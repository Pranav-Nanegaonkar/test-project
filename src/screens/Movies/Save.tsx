import { Image, Text, View } from 'react-native';
import React from 'react';
import { icons } from '../../constants/icons';

export default function Save() {
  return (
    <View className="flex justify-center items-center flex-1 flex-col gap-5 bg-primary px-10">
      <Image source={icons.save} className="size-10" tintColor="#fff" />
      <Text className="text-gray-500 text-base">Save</Text>
    </View>
  );
}
