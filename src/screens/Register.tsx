import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CheckBox from '@react-native-community/checkbox';

import { RootStackParamsList } from '../navigation/RootNavigator';
import { Images } from '../assets/images';
import { AppText } from '../components/ui/AppText';
import { Fonts } from '../constants/fonts';
import { firebaseSignUp } from '../services/firebaseAuth.service';

type RegisterNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Register'
>;

export default function Register() {
  const navigation = useNavigation<RegisterNavigationProp>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ------------------ Validation Helpers ------------------ */

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validatePassword = (value: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    else if (name.trim().length < 3)
      newErrors.name = 'Name must be at least 3 characters';

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(email.trim()))
      newErrors.email = 'Enter a valid email';

    if (!password) newErrors.password = 'Password is required';
    else if (!validatePassword(password))
      newErrors.password =
        'Password must be 8+ chars, include upper, lower, number & symbol';

    if (!confirmPassword) newErrors.confirmPassword = 'Confirm your password';
    else if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    if (!agreeTerms) newErrors.terms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ------------------ Submit Handler ------------------ */

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const result = await firebaseSignUp(email.trim(), password.trim());
      console.log(result);

      ToastAndroid.show('Register successful', ToastAndroid.SHORT);
    } catch (error: any) {
      if (error.message.includes('[auth/email-already-in-use]')) {

        console.log('Login error:', error.message);
        ToastAndroid.show('The email address is already exist', ToastAndroid.SHORT);
      } else {
        console.log('Login error:', error.message);
        ToastAndroid.show('Someting went wrong try again', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <ImageBackground
      source={Images.bg}
      resizeMode="stretch"
      style={styles.container}
    >
      {/* Logos */}
      <View style={styles.topLogos}>
        <Image source={Images.leftLogo} />
        <Image source={Images.rightLogo} />
      </View>

      <View style={styles.body}>
        <AppText style={styles.title}>Create an account</AppText>

        {/* Inputs */}
        <View style={styles.inputGroup}>
          {/* Name */}
          <View style={styles.inputWrapper}>
            <Image source={Images.person} style={styles.iconPerson} />
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#FAB400"
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
          </View>

          {/* Email */}
          <View style={styles.inputWrapper}>
            <Image source={Images.email} style={styles.iconEmail} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email"
              placeholderTextColor="#FAB400"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          </View>

          {/* Password */}
          <View style={styles.inputWrapper}>
            <Image source={Images.lock} style={styles.iconLock} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#FAB400"
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>

          {/* Confirm Password */}
          <View style={styles.inputWrapper}>
            <Image source={Images.lock} style={styles.iconLock} />
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor="#FAB400"
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
          </View>
        </View>

        {/* Terms */}
        <View style={styles.rememberMe}>
          <CheckBox
            value={agreeTerms}
            onValueChange={setAgreeTerms}
            tintColors={{ true: '#FAE7B3', false: '#aaaaaa' }}
          />
          <AppText style={styles.smallText}>I agree to the terms</AppText>
        </View>
        {errors.terms && <Text style={styles.error}>{errors.terms}</Text>}

        {/* Button */}
        <Pressable
          style={[styles.button, !agreeTerms && styles.disabledButton]}
          disabled={!agreeTerms}
          onPress={handleRegister}
        >
          <AppText style={styles.buttonText}>Sign Up</AppText>
        </Pressable>

        <AppText style={styles.signupText}>
          Already have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </AppText>
      </View>
    </ImageBackground>
  );
}

/* ------------------ Styles ------------------ */

const styles = StyleSheet.create({
  container: { flex: 1 },

  topLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 30,
  },

  body: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 70,
  },

  title: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    marginBottom: 20,
    marginTop: 100,
  },

  inputGroup: { rowGap: 24 },

  inputWrapper: { position: 'relative' },

  input: {
    height: 40,
    fontFamily: Fonts.Regular,
    borderBottomWidth: 1.5,
    borderColor: '#b784035e',
    paddingLeft: 32,
    color: '#FAB400',
  },

  error: {
    fontSize: 10,
    color: 'red',
    marginTop: 4,
    fontFamily: Fonts.Regular,
  },

  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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

  disabledButton: {
    opacity: 0.5,
  },

  buttonText: {
    fontFamily: Fonts.Bold,
    fontSize: 16,
  },

  signupText: {
    fontFamily: Fonts.Medium,
    fontSize: 12,
    textAlign: 'center',
  },

  signupLink: {
    color: '#FFC122',
    fontFamily: Fonts.Bold,
  },

  iconPerson: {
    width: 12,
    height: 10,
    position: 'absolute',
    top: 16,
    left: 15,
  },
  iconEmail: { width: 12, height: 10, position: 'absolute', top: 16, left: 15 },
  iconLock: { width: 11, height: 14, position: 'absolute', top: 14, left: 15 },
});
