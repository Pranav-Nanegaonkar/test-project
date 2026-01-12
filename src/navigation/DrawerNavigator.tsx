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
import ReduxDemo from '../screens/ReduxDemo';
import CameraScreen from '../screens/CameraScreen';

<<<<<<< Updated upstream
const Drawer = createDrawerNavigator();
=======
export type DrawerNavigationList = {
  Menu: undefined;
  ImagePickerDemo: undefined;
  DocumentPickerDemo: undefined;
  DropDownDemo: undefined;
  VectorIconDemo: undefined;
  Test: undefined;
  MovieTabNavigator: undefined;
  ReactReduxDemo: undefined;
  CameraVisionDemo: undefined;
  CameraVisionDemoCapturePhoto: undefined;
  CameraVisionDemoZoom: undefined;
  PreviewScreen: undefined;
  CameraStackNavigator: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigationList>();
>>>>>>> Stashed changes

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerIcon: () => <Icon type="AntDesign" name="menu-fold" size={20} />,
        drawerActiveTintColor: 'orange',
        headerShown: false,
      }}
      // remove this after done
<<<<<<< Updated upstream
      initialRouteName="CameraVision"
=======
      initialRouteName="CameraStackNavigator"
>>>>>>> Stashed changes
    >
      <Drawer.Screen name="Menu" component={TabNavigator} />
      <Drawer.Screen name="ImagePickerDemo" component={ImagePickerDemo} />
      <Drawer.Screen name="DocumentPickerDemo" component={DocumentPickerDemo} />
      <Drawer.Screen name="DropDownDemo" component={DropDownDemo} />
      <Drawer.Screen name="VectorIconDemo" component={VectorIconDemo} />
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="MovieTabNavigator" component={MovieTabNavigator} />
      <Drawer.Screen name="ReactReduxDemo" component={ReduxDemo} />
<<<<<<< Updated upstream
      <Drawer.Screen name="CameraScreen" component={CameraScreen} />
=======
      <Drawer.Screen name="CameraVisionDemo" component={CameraVisionDemo} />
      <Drawer.Screen
        name="CameraStackNavigator"
        component={CameraStackNavigator}
      />
      <Drawer.Screen
        name="CameraVisionDemoZoom"
        component={CameraVisionDemoZoom}
      />
      <Drawer.Screen name="PreviewScreen" component={PreviewScreen} />
>>>>>>> Stashed changes
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
