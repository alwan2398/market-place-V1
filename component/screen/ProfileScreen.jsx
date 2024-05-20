import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Image, Text, View } from 'react-native';
import ItemList from '../screen/ItemList';

export default function ProfileScreen() {
  const {user}=useUser();
  return (
    <View className="px-4 py-6">
      <View className="items-center h-56 mt-10">
        <Image source={{uri:user?.imageUrl}}
        className="w-24 h-24 rounded-full mt-10"/>
        <Text className="mt-4 text-lg font-bold">{user.fullName}</Text>
        <Text className="mt-4 text-lg">Kota Bekasi</Text>
        <View className="px-5 mt-5">
          <View className="flex-row justify-between gap-20">
            <View className="items-center">
            <Text className="font-bold text-xl">10</Text>
            <Text className="font-bold">Post</Text>
            </View>
            <View className="items-center">
            <Text className="font-bold text-xl">13.2k</Text>
            <Text className="font-bold">Followers</Text>
            </View>
            <View className="items-center">
            <Text className="font-bold text-xl">150</Text>
            <Text className="font-bold">Klien</Text>
            </View>
            </View>
          </View>
          <ItemList/>
        </View>
      </View>
  )
}