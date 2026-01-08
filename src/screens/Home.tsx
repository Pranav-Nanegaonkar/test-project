import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { SVGLogo } from '../components/svg/SVGComponent';
import { AppText } from '../components/ui/AppText';
import { Fonts } from '../constants/fonts';
import CustomHeader from '../components/CustomHeader';

export default function Home() {
  const [image, setImage] = useState<any>(null);

  //  Pick image from gallery
  const pickImage = async () => {
    try {
      const img = await ImagePicker.openPicker({
        width: 300,
        height: 200,
        cropping: true,
        compressImageQuality: 0.8,
      });

      setImage(img);
    } catch (error: any) {
      if (error?.code !== 'E_PICKER_CANCELLED') {
        Alert.alert('Error', 'Failed to pick image');
      }
    }
  };

  //  Open camera
  const openCamera = async () => {
    try {
      const img = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        compressImageQuality: 0.8,
      });

      setImage(img);
    } catch (error: any) {
      if (error?.code !== 'E_PICKER_CANCELLED') {
        Alert.alert('Error', 'Failed to open camera');
      }
    }
  };

  //  Clean cache manually
  const cleanUp = async () => {
    try {
      await ImagePicker.clean();
      setImage(null);
      Alert.alert('Success', 'Cache cleaned successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to clean cache');
    }
  };

  //  Auto clean on unmount
  useEffect(() => {
    return () => {
      ImagePicker.clean();
    };
  }, []);

  return (
    <>
      <CustomHeader title="Home" />
      <View style={styles.container}>
        <AppText style={styles.text}>Home Page</AppText>
        <View style={{ marginVertical: 10 }}>
          <SVGLogo width={200} height={200} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: Fonts.Bold,
    fontSize: 30,
  },
});
