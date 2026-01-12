import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useNavigation } from '@react-navigation/native';
import { clearCameraImage } from '../features/camera/cameraSlice';

export default function PreviewScreen({ navigation }: any) {
  const { image } = useAppSelector(state => state.camera);
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>PreviewScreen</Text>
      {/* <Text>{image}</Text> */}
      {image && <Image source={{ uri: image }} width={100} height={100} />}
      <Button
        title="go back"
        onPress={() => {
          dispatch(clearCameraImage());
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
