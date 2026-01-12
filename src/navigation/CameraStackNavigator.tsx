import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraVisionDemoCapturePhoto from '../screens/CameraVisionDemoCapturePhoto';
import PreviewScreen from '../screens/PreviewScreen';

export type CameraStackTypesList = {
  CameraVisionDemoCapturePhoto: undefined;
  PreviewScreen: undefined;
};

const Stack = createNativeStackNavigator<CameraStackTypesList>();

export default function CameraStackNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="CameraVisionDemoCapturePhoto"
          component={CameraVisionDemoCapturePhoto}
        />
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
