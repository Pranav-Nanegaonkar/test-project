import { DrawerNavigatorProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { Text } from 'react-native-svg';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
} from 'react-native-vision-camera';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setCameraImage } from '../features/camera/cameraSlice';

export default function CameraVisionDemoCapturePhoto({ navigation }: any) {
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice('back');
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();
  if (!device) return <Text>Failed to Load the device</Text>;

  const takePhoto = async () => {
    const photo = await cameraRef.current?.takePhoto({
      flash: 'off',
    });

    console.log('Photo path:', photo?.path);

    dispatch(setCameraImage(`file://${photo?.path}`));

    // @ts-ignore

    navigation.navigate('PreviewScreen');
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

      <View style={{ rowGap: 10 }}>
        <Button
          title=" go to preview"
          onPress={() => navigation.navigate('PreviewScreen')}
        />
        <Button title="Capture" onPress={takePhoto} />
      </View>
    </View>
  );
}
