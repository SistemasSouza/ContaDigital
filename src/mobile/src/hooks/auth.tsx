import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import {AsyncStorage} from 'react-native';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthData {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthData>({} as AuthData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        'contadigital:token',
        'contadigital:user',
      ]);

      if (token[1] && user[1]) {
        setData({token: token[1], user: JSON.parse(user[1])});
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['contadigital:token', 'contadigital:user']);

    setData({} as AuthData);
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    const response = await api.post('/sessions', {email, password});

    const {user, token} = response.data;

    await AsyncStorage.multiSet([
      ['contadigital:token', token],
      ['contadigital:user', JSON.stringify(user)],
    ]);

    setData({token, user});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};
