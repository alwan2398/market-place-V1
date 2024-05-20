import { useUser } from '@clerk/clerk-expo';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { app } from '../../firebaseConfig';

export default function AddPostScreen() {
  const [image, setImage] = useState(null);
  const db = getFirestore(app);
  const [loading,setLoading]=useState(false);
  const storage = getStorage();

  const {user}=useUser();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    setCategoryList([]);
    try {
      const querySnapshot = await getDocs(collection(db, 'category'));
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          console.log("docs", doc.data());
          setCategoryList((categoryList) => [...categoryList, doc.data()]);
        });
      } else {
        console.log("No documents found in the 'category' collection.");
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = async (value) => {
    setLoading(true)
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const storageRef = ref(storage, 'comunityPost/' + Date.now() + '.jpg');

      uploadBytes(storageRef, blob)
        .then((snapshot) => {
          console.log('Uploaded a blob or file!', snapshot);
          return getDownloadURL(snapshot.ref);
        })
        .then(async (downloadUrl) => {
          console.log('File available at', downloadUrl);
          value.image = downloadUrl;
          value.userName=user.fullName,
          value.userEmail=user.primaryEmailAddress.emailAddress;
          value.userImage=user.imageUrl;
          const docRef = await addDoc(collection(db, 'UserPost'), value);
          if (docRef.id) {
            setLoading(false)
            Alert.alert('success','barang berhasil di upload')
          }
        })
        .catch((error) => {
          console.error('Error uploading file: ', error);
        });
    } catch (error) {
      console.error('Error during upload: ', error);
    }
  };

  return (
    <KeyboardAvoidingView>
    <ScrollView className="p-10 bg-white">
      <Text className="text-[24px] font-bold mt-8">Upload New Product</Text>
      <Text className="text-lg mb-7 text-gray-500">Buat barang yang ingin kamu pasarkan disini!</Text>
      <Formik
        initialValues={{ title: '', desc: '', category: '', address: '', price: '', image: '', userName: '', userEmail :'', userImage: '', createdAt:Date.now()}}
        onSubmit={(values) => onSubmitMethod(values)}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.name = 'Title harus diisi';
          }
          return errors;
        }}
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => (
          <View>
            <TouchableOpacity onPress={pickImage}>
              {image ? (
                <Image source={{ uri: image }} style={{ width:100, height:100, borderRadius:15 }} />
              ) : (
                <Image
                  source={{ uri: 'https://placehold.co/600x400/png' }}
                  style={{width:100, height:100, borderRadius:15}}
                />
              )}
            </TouchableOpacity>

            <TextInput
              className="border border-gray-500 rounded-lg p-2 mt-4"
              placeholder="Nama Product"
              value={values?.title}
              onChangeText={handleChange('title')}
            />
            <TextInput
              className="border border-gray-500 rounded-lg p-2 mt-4"
              placeholder="Deskripsi Product"
              value={values?.desc}
              multiline
              numberOfLines={5}
              onChangeText={handleChange('desc')}
            />
            <TextInput
              className="border border-gray-500 rounded-lg p-2 mt-4"
              placeholder="Harga Product"
              value={values?.price}
              keyboardType="numeric"
              onChangeText={handleChange('price')}
            />
            <TextInput
              className="border border-gray-500 rounded-lg p-2 mt-4"
              placeholder="Alamat"
              value={values?.address}
              onChangeText={handleChange('address')}
            />

            <View className="border border-gray-500 rounded-lg mt-4">
              <Picker
                selectedValue={values?.category}
                onValueChange={(itemValue) => setFieldValue('category', itemValue)}
              >
                <Picker.Item label="Pilih Kategori" value="" />
                {categoryList.length > 0 &&
                  categoryList?.map((item, index) => (
                    <Picker.Item key={index} label={item?.name} value={item?.name} />
                  ))}
              </Picker>
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor:loading?'#ccc':'#007BFF',
              }}
              disabled={loading}
              className="bg-blue-500 rounded-lg p-4 mt-10 items-center justify-center"
            >
              {loading?
                <ActivityIndicator color="#fff"/>
                :
              <Text className="text-white text-center text-lg font-semibold">Upload</Text>
              }
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}
