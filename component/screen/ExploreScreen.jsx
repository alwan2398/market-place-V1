import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <Text style={styles.subHeader}>Cari Style Sesuai Fashion Mu!</Text>
      <View style={styles.searchContainer}>
        <TextInput placeholder='Fashion impian Mu' style={styles.textInput} />
        <Feather name="search" size={20} color="gray" />
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/60/2e/da/602eda4ed62f649f3f0d205a52517042.jpg' }} 
          style={styles.image} 
        />
        <View style={styles.textOverlay}>
          <Text style={styles.imageText}>T-Shrit</Text>
        </View>
      </View>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/22/ce/0d/22ce0df38287b9d4f16a37da74f6e199.jpg' }} 
          style={styles.image} 
        />
        <View style={styles.textOverlay}>
          <Text style={styles.imageText}>Sepatu</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/236x/52/d6/81/52d6810ce65141f8086aa1e82b9c04c2.jpg' }} 
          style={styles.image} 
        />
        <View style={styles.textOverlay}>
          <Text style={styles.imageText}>Jacket</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
    color: 'gray',
  },
  searchContainer: {
    padding: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 16,
  },
  textInput: {
    flex: 1,
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  textOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
