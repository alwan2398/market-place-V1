import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from "expo-web-browser";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {

    useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

     const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View className="items-center justify-center bg-black">
        <Image source={require('../../assets/images/login.png')}
        className="w-full h-full object-cover opacity-50"
        resizeMode='cover'/>
        <View className="absolute w-full bottom-0 p-8 mb-10 items-center">
        <Text className="text-3xl font-bold text-white">
            Welcome To Our Clothing
        </Text>
        <Text className="text-base text-center font-medium text-white mt-4">
            Find your style and make yourself more confident
        </Text>
        <TouchableOpacity onPress={onPress} className="bg-white p-4 rounded-3xl mt-10 items-center">
            <Text className="font-bold text-[18px]">
                Login With Google
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}