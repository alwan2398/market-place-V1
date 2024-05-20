import { collection, getDocs, getFirestore, } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { app } from '../../firebaseConfig';
import CategoryList from '../CategoryList/CategoryList';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import Slider from '../Slider/Slider';

export default function HomeScreen() {
  const db = getFirestore(app);
  const [sliderList, setSliderList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [userPost, setUserPost] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    getSliders();
    getCategoryList();
    getUserPosts();
  }, []);

  const getSliders = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, 'Sliders'));
      const sliders = [];
      querySnapShot.forEach((doc) => {
        sliders.push({ ...doc.data(), id: doc.id });
      });
      setSliderList(sliders);
    } catch (error) {
      console.error('Error fetching sliders: ', error);
    }
  };

  const getCategoryList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'category'));
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push(doc.data());
      });
      setCategoryList(categories);
    } catch (error) {
      console.error('Error fetching category list: ', error);
    }
  };

  const getUserPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'UserPost'));
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      setUserPost(posts);
    } catch (error) {
      console.error("Error getting UserPost: ", error);
    }
  };

  useEffect(() => {
    if (sliderList.length > 1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: 1 });
    }
  }, [sliderList]);

  if (sliderList.length === 0) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Slider sliderList={sliderList} flatListRef={flatListRef} />
      <CategoryList categoryList={categoryList} />
      <ProductList userPost={userPost} />
    </View>
  );
}
