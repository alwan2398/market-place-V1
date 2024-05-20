import React from 'react'
import { Image, View } from 'react-native'

export default function ItemList() {
  return (
    <View>
    <View className="flex-row justify-between mt-5">
      <Image source={{uri: 'https://i.pinimg.com/564x/d9/c8/fa/d9c8fa35e982696e0ba99fff7a9c68bd.jpg'}}
      className="w-full h-48 rounded-lg"/>
    </View>
    <View className="flex-row justify-between mt-5">
      <Image source={{uri: 'https://i.pinimg.com/564x/39/bf/4c/39bf4c58e558d6c003b6b76464464b0f.jpg'}}
      className="w-full h-48 rounded-lg"/>
    </View>
    </View>
  )
}