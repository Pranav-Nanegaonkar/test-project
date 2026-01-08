import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BasicDropdown from '../components/BasicDropdown';
import CustomHeader from '../components/CustomHeader';

export default function DropDownDemo() {
  return (
    <>
      <CustomHeader title="DropDown" />
      <View>
        <BasicDropdown />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
