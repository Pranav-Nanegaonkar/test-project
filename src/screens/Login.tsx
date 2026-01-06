import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';

import { RootStackParamsList } from '../navigation/RootNavigator';
import { Images } from '../assets/images';
import { AppText } from '../components/ui/AppText';
import { Fonts } from '../constants/fonts';

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Login'
>;

export default function Login() {
  const navigation = useNavigation<LoginNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ImageBackground
      source={Images.bg}
      resizeMode="stretch"
      style={styles.container}
    >
      {/* Top Logos */}
      <View style={styles.topLogos}>
        <Image source={Images.leftLogo} width={100} height={100} />
        <Image
          source={Images.rightLogo}
          width={100}
          height={100}
          style={{ alignSelf: 'center' }}
        />
      </View>

      {/* Body */}
      <View style={styles.body}>
        <AppText style={styles.title}>Login</AppText>

        {/* Inputs */}
        <View style={styles.inputGroup}>
          {/* Email */}
          <View style={styles.inputWrapper}>
            <Image
              source={Images.email}
              resizeMode="center"
              style={styles.iconEmail}
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              placeholder="Email"
              placeholderTextColor="#FAB400"
            />
          </View>

          {/* Password */}
          <View style={styles.inputWrapper}>
            <Image
              source={Images.lock}
              resizeMode="center"
              style={styles.iconLock}
            />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#FAB400"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="password"
            />
          </View>
        </View>

        {/* Remember / Forgot */}
        <View style={styles.optionsRow}>
          <View style={styles.rememberMe}>
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              tintColors={{
                true: '#FAE7B3',
                false: '#aaaaaa',
              }}
            />
            <AppText style={styles.smallText}>Remember me</AppText>
          </View>

          <AppText style={styles.smallText}>Forgot password?</AppText>
        </View>

        {/* Login Button */}
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log({ email, password, rememberMe });
            navigation.navigate('AppNavigator');
          }}
        >
          <AppText style={styles.buttonText}>Login</AppText>
        </Pressable>

        {/* Register Redirect */}
        <AppText style={styles.signupText}>
          Don’t have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </Text>
        </AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  title: {
    fontFamily: Fonts.Bold,
    fontSize: 35,
    color: '#000',
    marginBottom: 40,
  },

  inputGroup: {
    rowGap: 30,
  },

  inputWrapper: {
    position: 'relative',
  },

  input: {
    height: 40,
    fontSize: 15,
    fontFamily: Fonts.Regular,
    color: '#FAB400',
    borderBottomWidth: 1.5,
    borderColor: '#b784035e',
    paddingLeft: 32,
    paddingBottom: 5,
  },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 10,
  },

  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallText: {
    fontSize: 10,
    fontFamily: Fonts.Regular,
  },

  button: {
    backgroundColor: '#FFC122',
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  buttonText: {
    fontFamily: Fonts.Bold,
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#000',
  },

  signupText: {
    fontFamily: Fonts.Medium,
    fontSize: 12,
    textAlign: 'center',
  },

  signupLink: {
    color: '#FFC122',
    fontFamily: Fonts.Bold,
    textDecorationLine: 'underline',
  },

  iconEmail: {
    width: 12,
    height: 10,
    position: 'absolute',
    top: 16,
    left: 15,
  },

  iconLock: {
    width: 11,
    height: 14,
    position: 'absolute',
    top: 14,
    left: 15,
  },
});
