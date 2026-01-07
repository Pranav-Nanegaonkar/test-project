import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import { Images } from '../assets/images';
import { AppText } from '../components/ui/AppText';
import { Fonts } from '../constants/fonts';
import { firebaseSignIn } from '../services/firebaseAuth.service';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ------------------ Validation ------------------ */

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(email.trim()))
      newErrors.email = 'Enter a valid email';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      await firebaseSignIn(email.trim(), password.trim());

      ToastAndroid.show('Login successful', ToastAndroid.SHORT);
    } catch (error: any) {
      console.log('Login error:', error.message);
      ToastAndroid.show('Invalid credentials', ToastAndroid.SHORT);
    }
  };

  return (
    <ImageBackground
      source={Images.bg}
      resizeMode="stretch"
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Logos */}
        <View style={styles.topLogos}>
          <Image source={Images.leftLogo} />
          <Image source={Images.rightLogo} />
        </View>

        <View style={styles.body}>
          <AppText style={styles.title}>Login</AppText>

          {/* Inputs */}
          <View style={styles.inputGroup}>
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
          </View>

          {/* Remember / Forgot */}
          <View style={styles.optionsRow}>
            <View style={styles.rememberMe}>
              <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
                tintColors={{ true: '#FAE7B3', false: '#aaaaaa' }}
              />
              <AppText style={styles.smallText}>Remember me</AppText>
            </View>

            <Text style={styles.forgotText}>Forgot password?</Text>
          </View>

          <Pressable
            onPress={handleLogin}
            style={[
              styles.button,
              (!email || !password) && styles.disabledButton,
            ]}
            disabled={!email|| !password ? true : false}
          >
            <AppText style={styles.buttonText}>Login</AppText>
          </Pressable>

          <AppText style={styles.signupText}>
            Don’t have an account?{' '}
            <Text
              style={styles.signupLink}
              onPress={() => navigation.navigate('Register' as never)}
            >
              Sign Up
            </Text>
          </AppText>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topLogos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 30,
  },
  body: { flex: 1, justifyContent: 'center', paddingHorizontal: 70 },
  title: { fontFamily: Fonts.Bold, fontSize: 35, marginBottom: 40 },
  inputGroup: { rowGap: 30 },
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
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  rememberMe: { flexDirection: 'row', alignItems: 'center' },
  smallText: { fontSize: 10, fontFamily: Fonts.Regular },
  forgotText: { fontSize: 10, fontFamily: Fonts.Regular, color: '#FFC122' },
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
  },
  signupText: { fontFamily: Fonts.Medium, fontSize: 12, textAlign: 'center' },
  signupLink: {
    color: '#FFC122',
    fontFamily: Fonts.Bold,
    textDecorationLine: 'underline',
  },
  iconEmail: { width: 12, height: 10, position: 'absolute', top: 16, left: 15 },
  iconLock: { width: 11, height: 14, position: 'absolute', top: 14, left: 15 },
  disabledButton: { opacity: 0.5 },
});
