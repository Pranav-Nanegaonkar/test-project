import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { firebaseAuthListener } from '../services/firebaseAuth.service';
;

interface AuthContextProps {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  Use your existing Firebase service
    const unsubscribe = firebaseAuthListener(firebaseUser => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
