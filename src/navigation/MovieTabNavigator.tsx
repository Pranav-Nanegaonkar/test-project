import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type BottomTabProps = {
  Home: undefined;
  Profile: undefined;
  Menu: undefined;
};

const BottomTabs = createBottomTabNavigator();

export default function MovieTabNavigator() {
  return (
    <View>
      <Text>MovieTabNavigator</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
