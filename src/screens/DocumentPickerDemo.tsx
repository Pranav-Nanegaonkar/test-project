import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';

import { pick, types } from '@react-native-documents/picker';


export default function DocumentPickerDemo() {
  const [files, setFiles] = useState<any[]>([]);

  // 📄 Pick single document
  const pickSingleFile = async () => {
    try {
      const result = await pick({
        allowMultiSelection: false, // single
        type: [types.docx, types.images], // limit types
      });

      setFiles(result);
    } catch (error: any) {
      //  User cancelled
      if (error.code === 'OPERATION_CANCELED') {
        console.log('User cancelled document picker');
      } else {
        console.log(error);
        ToastAndroid.show('Failed to pick documents', ToastAndroid.SHORT);
      }
    }
  };

  //  Pick multiple documents
  const pickMultipleFiles = async () => {
    try {
      const results = await pick({
        allowMultiSelection: true,
        type: [types.docx, types.images],
      });

      setFiles(results);
    } catch (error: any) {
      // console.log(error.code);

      if (error.code === 'OPERATION_CANCELED') {
        console.log('User cancelled document picker');
      } else {
        console.log(error);
        ToastAndroid.show('Failed to pick documents', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Document Picker</Text>

      <Pressable style={styles.button} onPress={pickSingleFile}>
        <Text style={styles.buttonText}>Pick Single File</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={pickMultipleFiles}>
        <Text style={styles.buttonText}>Pick Multiple Files</Text>
      </Pressable>

      <FlatList
      showsVerticalScrollIndicator={false}
        data={files}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.fileCard}>
            <Text style={styles.fileText}>📄 Name: {item.name}</Text>
            <Text style={styles.fileText}>📁 Type: {item.type}</Text>
            <Text style={styles.fileText}>
              📦 Size: {item.size ?? 'N/A'} bytes
            </Text>
            <Text style={styles.fileText}>🔗 URI: {item.uri}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  fileCard: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  fileText: {
    fontSize: 14,
    color: '#111827',
  },
});
