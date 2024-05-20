import { useUser } from '@clerk/clerk-expo';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

export default function Header() {
    const {user}=useUser();
  return (
    <View className="py-8 px-4 bg-blue-600 rounded-b-2xl">
    <View className="flex flex-row gap-4 mt-3">
        <Image source={{uri:user?.imageUrl}}
        className="rounded-full w-11 h-11"
        />
        <View>
            <Text className="text-[12px] text-white">Welcome</Text>
            <Text className="text-[16px] text-white font-bold">{user.fullName}</Text>
        </View>
    </View>
            <View className="absolute right-4 top-1 mt-14 rounded-full bg-white p-2 items-center justify-center">
            <Feather name="bell" size={26} color="black" />
        </View>
    <View className="p-2 px-6 flex flex-row items-center bg-white rounded-full mt-5">
        <Feather name="search" size={20} color="gray" />
        <TextInput placeholder='Cari Style Mu' className="ml-2 text-[14px]"
        onChangeText={(value)=>console.log(value)}/>
    </View>
    </View>
  )
}