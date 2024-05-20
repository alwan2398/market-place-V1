import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function PostItem({item}) {
  return (
    <View>
          <TouchableOpacity className="flex-1 mt-2 p-2 border-slate-300 bg-blue-50 rounded-lg">
            <Image
              source={{ uri: item.image }}
              className="w-[170px] h-[170px] rounded-lg"
            />
            <Text className="text-blue-500 bg-blue-200 p-1 mt-2 text-center rounded-lg px-2 text-[14px] w-[80px]">{item.category}</Text>
            <Text className="font-bold text-[14px] mt-2">{item.title}</Text>
            <Text className="font-bold text-[14px] text-blue-500">Rp {item.price}</Text>
          </TouchableOpacity>
    </View>
  )
}