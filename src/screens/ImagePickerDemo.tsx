import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { SVGLogo } from '../components/svg/SVGComponent';
import CustomHeader from '../components/CustomHeader';

export default function ImagePickerDemo() {
  const [image, setImage] = useState<any>(null);

  //  Pick image from gallery
  const pickImage = async () => {
    try {
      const img = await ImagePicker.openPicker({
        // width: 300,
        // height: 200,
        cropping: true,
        freeStyleCropEnabled: true,
        // compressImageQuality: 0.8,
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
      <CustomHeader title="ImagePicker" />
      <View style={styles.container}>
        <View style={{ marginVertical: 10 }}>
          <SVGLogo width={40} height={40} />
        </View>

        <Text style={styles.title}>Image Picker Demo</Text>

        {/* Buttons */}
        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick Image</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Open Camera</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.cleanBtn]} onPress={cleanUp}>
          <Text style={styles.buttonText}>Clean Cache</Text>
        </Pressable>

        {/* Image Preview */}
        {image && (
          <Image
            source={{ uri: image.path }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
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
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    color: '#000',
  },
  button: {
    width: '100%',
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  cleanBtn: {
    backgroundColor: '#DC2626',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    borderRadius: 12,
  },
});
