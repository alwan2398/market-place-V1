import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import PostItem from '../PostItem/PostItem';

export default function ProductList({ userPost, numColumns = 2 }) {
const [key, setKey] = useState(`flatlist-${numColumns}`);

  useEffect(() => {
    setKey(`flatlist-${numColumns}`);
  }, [numColumns]);
  return (
    <View className="flex-1 px-4 mt-3">
      <Text className="font-bold text-[14px]">ProductList</Text>
      <FlatList
        data={userPost}
        numColumns={2}
        renderItem={({ item, index }) => (
        <PostItem item={item}/>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
