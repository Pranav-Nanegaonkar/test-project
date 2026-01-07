import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Profile from '../screens/Profile';

import { useAuth } from '../context/AuthContext';

import DrawerNavigator from './DrawerNavigator';

export type RootStackParamsList = {
  DrawerNavigator: undefined;
  Profile: undefined;
  Login: undefined;
  Register: undefined;
};

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

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
