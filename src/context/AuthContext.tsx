import { StyleSheet, Text, View } from 'react-native';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Storage } from '../utils/Storage';

interface AuthContextProps {
  user: FirebaseAuthTypes.User | null;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  loading: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const user = await Storage.get('user');

      user ? setUser(user) : setUser(null);
    };
    
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
