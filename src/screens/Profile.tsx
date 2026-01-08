import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import TabNavigator from '../navigation/TabNavigator';
import { useNavigation } from '@react-navigation/native';
import { firebaseLogout } from '../services/firebaseAuth.service';
import CustomHeader from '../components/CustomHeader';

export default function Profile() {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <>
      <CustomHeader title="Profile" />
      <View style={[styles.container, { rowGap: 20 }]}>
        <Text style={styles.text}>Profile</Text>
        <Text style={styles.text}>{user?.email}</Text>
        <View
          style={{
            backgroundColor: 'red',
            overflow: 'hidden',
            borderRadius: 10,
          }}
        >
          <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
        <View
          style={{
            backgroundColor: 'red',
            overflow: 'hidden',
            borderRadius: 10,
          }}
        >
          <Button title="Logout" onPress={async () => await firebaseLogout()} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 900,
    color: 'black',
  },
});
