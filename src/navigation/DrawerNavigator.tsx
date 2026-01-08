import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ImagePickerDemo from '../screens/ImagePickerDemo';
import DocumentPickerDemo from '../screens/DocumentPickerDemo';
import DropDownDemo from '../screens/DropDownDemo';
import VectorIconDemo from '../screens/VectorIconDemo';
import Icon from '../utils/Icon';
import Test from './Test';
import MovieTabNavigator from './MovieTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerIcon: () => <Icon type="AntDesign" name="menu-fold" size={20} />,
        drawerActiveTintColor: 'orange',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Menu" component={TabNavigator} />
      <Drawer.Screen name="ImagePickerDemo" component={ImagePickerDemo} />
      <Drawer.Screen name="DocumentPickerDemo" component={DocumentPickerDemo} />
      <Drawer.Screen name="DropDownDemo" component={DropDownDemo} />
      <Drawer.Screen name="VectorIconDemo" component={VectorIconDemo} />
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="MovieTabNavigator" component={MovieTabNavigator} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
