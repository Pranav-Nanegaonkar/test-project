import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

export default function CameraScreen() {
  const devices = useCameraDevices();
  // @ts-ignore
  const device = devices.front; // or devices.back
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermission();
      // @ts-ignore
      setHasPermission(permission === 'authorized');
    })();
  }, []);

  if (!device) return <Text>Loading camera...</Text>;
  if (!hasPermission) return <Text>No camera permission</Text>;

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
