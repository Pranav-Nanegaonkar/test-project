import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import AppNavigator from './AppNavigator';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator<RootStackParamsList>();

export type RootStackParamsList = {
  Login: undefined;
  Register: undefined;
  AppNavigator: undefined;
};
export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
