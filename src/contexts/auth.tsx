import React, {createContext, useState} from 'react';
import {ITransaction, IWallet} from './types';
interface IAuth {
  isUpdate: boolean;
  setIsUpdate: (param: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (param: boolean) => void;
  walletData: IWallet;
  setWalletData: (param: IWallet) => void;
  transactionData: ITransaction;
  setTransactionData: (param: ITransaction) => void;
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
  transactionData: {
    address: '',
    addressTo: '',
    name: '',
    privateKey: '',
    balance: 0,
    coin: '',
    value: 0,
    fee: 0,
    convertFactor: 1,
  },
  setTransactionData: () => {},
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
  const [transactionData, setTransactionData] = useState<ITransaction>({
    address: '',
    convertFactor: 1,
    addressTo: '',
    fee: 0,
    value: 0,
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
    transactionData,
    setTransactionData,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
