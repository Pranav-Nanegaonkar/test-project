import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../utils/Icon';
import CustomHeader from '../components/CustomHeader';
export default function VectorIconDemo() {
  return (
    <>
      <CustomHeader title="Vector Icons" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>VectorIconDemo</Text>
        <Icon type="MaterialIcons" size={100} name="currency-rupee" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
