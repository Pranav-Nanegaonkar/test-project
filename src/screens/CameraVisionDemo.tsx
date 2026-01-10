import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useCameraPermission } from '../hooks/useCameraPermission';

export default function CameraVisionDemo() {
  const device = useCameraDevice('back');
  const hasPermission = useCameraPermission();

  if (!device) return <Text>Loading camera...</Text>;
  if (!hasPermission) return <Text>No camera permission</Text>;

  return (
    <View style={StyleSheet.absoluteFill}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
}
