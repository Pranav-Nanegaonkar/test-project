import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Menu" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
