import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootNavigator';
import { Images } from '../assets';

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Login'
>;

export default function Login() {
  const navigation = useNavigation<LoginNavigationProp>();

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  return (
    <ImageBackground source={Images.bg} style={styles.container}>
      <View style={styles.topLogos}>
        <Image source={Images.leftLogo} width={100} height={100} />
        <Image
          source={Images.rightLogo}
          width={100}
          height={100}
          style={{ alignSelf: 'center' }}
        />
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 35, fontWeight: 900 }}>Login</Text>
        <View style={{ rowGap: 30 }}>
          <View style={{ position: 'relative' }}>
            <Image
              source={Images.email}
              resizeMode="center"
              style={{
                width: 12,
                height: 10,
                position: 'absolute',
                top: 16,
                left: 15,
              }}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              placeholder="Email"
              placeholderTextColor="#FAB400"
            />
          </View>
          <View style={{ position: 'relative' }}>
            <Image
              source={Images.lock}
              resizeMode="center"
              style={{
                width: 11,
                height: 14,
                position: 'absolute',
                top: 14,
                left: 15,
              }}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#FAB400"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="password"
            />
          </View>
        </View>

        <View></View>

        <Button title='Login' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 900,
    color: 'black',
  },
  topLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 30,
    paddingHorizontal: 50,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 70,
  },
  input: {
    height: 40,
    fontSize: 15,
    color: '#FAB400',
    borderBottomWidth: 1.5,
    borderColor: '#b784035e',
    paddingLeft: 32,
    paddingBottom: 5,
  },
});
