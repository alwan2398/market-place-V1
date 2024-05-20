import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

export default function CategoryList({ categoryList, numColumns = 4 }) {
  const [key, setKey] = useState(`flatlist-${numColumns}`);

  useEffect(() => {
    setKey(`flatlist-${numColumns}`);
  }, [numColumns]);

  return (
    <View className="px-4 mt-3">
      <Text className="font-bold text-[14px]">Kategori</Text>
      <FlatList
        key={key}
        numColumns={numColumns}
        data={categoryList}
        renderItem={({ item, index }) => (
          <TouchableOpacity className="flex-1 items-center justify-center p-2 border-[1px] bg-blue-50 border-blue-200 m-1 rounded-lg">
            <Image
              source={{ uri: item.icon }}
              className="w-[32px] h-[32px]"
            />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
