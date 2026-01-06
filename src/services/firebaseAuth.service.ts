import { getApp } from '@react-native-firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  FirebaseAuthTypes,
} from '@react-native-firebase/auth';

// Get default app (already initialized natively)
const app = getApp();

// Auth instance (MODULAR – non-deprecated)
export const auth = getAuth(app);

// -------- AUTH HELPERS --------

// Login
export const firebaseSignIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

// Register
export const firebaseSignUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

// Logout
export const firebaseLogout = () => signOut(auth);

// Auth state listener
export const firebaseAuthListener = (
  callback: (user: FirebaseAuthTypes.User | null) => void,
) => onAuthStateChanged(auth, callback);
