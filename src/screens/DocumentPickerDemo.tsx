import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export default function DocumentPickerDemo() {
  const [files, setFiles] = useState<any[]>([]);

  //  Pick single document
  const pickSingleFile = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });

      setFiles([result]);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled');
      } else {
        console.error(error);
      }
    }
  };

  //  Pick multiple documents
  const pickMultipleFiles = async () => {
    try {
      const results = await DocumentPicker.pick({
        allowMultiSelection: true,
        type: [DocumentPicker.types.allFiles],
      });

      setFiles(results);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled');
      } else {
        console.error(error);
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

      {/* File List */}
      <FlatList
        data={files}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20, width: '100%' }}
        renderItem={({ item }) => (
          <View style={styles.fileCard}>
            <Text style={styles.fileText}>📄 Name: {item.name}</Text>
            <Text style={styles.fileText}>📦 Size: {item.size} bytes</Text>
            <Text style={styles.fileText}>📁 Type: {item.type}</Text>
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
    color: '#111827',
    fontSize: 14,
  },
});
