import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Profile from '../screens/Profile';

import { useAuth } from '../context/AuthContext';
import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
