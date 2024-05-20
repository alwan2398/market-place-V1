import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, View } from 'react-native';

export default function Slider({ sliderList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (sliderList.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderList.length);
      }, 3000); // Ganti slide setiap 3 detik

      return () => clearInterval(interval);
    }
  }, [sliderList]);

  useEffect(() => {
    if (flatListRef.current && sliderList.length > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex, sliderList]);

  if (sliderList.length === 0) {
    return null;
  }

  return (
    <View className="mt-5 px-4">
      <FlatList
        ref={flatListRef}
        data={sliderList}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            className="h-[200px] w-[380px] mr-3 items-center rounded-lg object-contain"
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}
