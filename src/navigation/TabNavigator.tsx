import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { House, User } from 'lucide-react-native';



type BottomTabProps = {
  Home: undefined;
  Profile: undefined;
  Menu: undefined;
};

const Tab = createBottomTabNavigator<BottomTabProps>();

type TabBarIconProps = {
  focused: boolean;
  icon: 'Home' | 'Profile';
  label: string;
};

const TabBarIcon = ({ focused, icon, label }: TabBarIconProps) => {
  return (
    <View style={styles.iconContainer}>
      {icon === 'Home' ? (
        <House color={focused ? '#2196f3' : 'gray'} size={24} />
      ) : (
        <User color={focused ? '#2196f3' : 'gray'} size={24} />
      )}
      {focused && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{

        headerShown: false,
        tabBarShowLabel: false, // ⬅️ IMPORTANT
        tabBarStyle: {
          width: '80%',
          height: 65,
          marginHorizontal: 'auto',
          borderRadius: 50,
          marginBottom: 20,
          alignSelf: 'center',
          backgroundColor: '#fff',
          elevation: 10,
        },
        tabBarItemStyle: {
          paddingVertical: 12,
        },
      }}

     
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="Home" label="Home" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon="Profile" label="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    minWidth: 80,
    height: 50, // fixed height → prevents jumping
    justifyContent: 'center', // centers icon when inactive
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#2196f3',
  },
});
