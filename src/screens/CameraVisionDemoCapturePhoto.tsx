import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native-svg';
import { Camera, useCameraDevice, useCameraDevices } from 'react-native-vision-camera';

export default function CameraVisionDemoCapturePhoto() {
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice("back");
  

  if (!device) return <Text>Failed to Load the device</Text>;

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePhoto({
      flash: 'off',
    });

    console.log('Photo path:', photo?.path);
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        device={device}
        isActive={true}
        photo={true} // 🔴 REQUIRED
      />

      <Button title="Capture" onPress={takePhoto} />
    </View>
  );
}
