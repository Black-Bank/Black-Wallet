import React, {createContext, useState} from 'react';
import {IWallet} from './types';
interface IAuth {
  isUpdate: boolean;
  setIsUpdate: (param: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (param: boolean) => void;
  walletData: IWallet;
  setWalletData: (param: IWallet) => void;
}
export const AuthContext = createContext<IAuth>({
  isUpdate: false,
  setIsUpdate: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  walletData: {
    address: '',
    name: '',
    privateKey: '',
    balance: 0,
    coin: '',
  },
  setWalletData: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletData, setWalletData] = useState<IWallet>({
    address: '',
    name: '',
    privateKey: '',
    balance: 0,
    coin: '',
  });

  const contextObjects = {
    isUpdate,
    setIsUpdate,
    isAuthenticated,
    setIsAuthenticated,
    walletData,
    setWalletData,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
