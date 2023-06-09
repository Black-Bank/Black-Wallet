import React, {createContext, useState} from 'react';
import {IDataBalance, IExtract, ITransaction, IWallet} from './types';
import {IWalletDataList} from '../screen/HomeScreen/interfaces';
interface IAuth {
  isUpdate: boolean;
  setIsUpdate: (param: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (param: boolean) => void;
  walletData: IWallet;
  setWalletData: (param: IWallet) => void;
  walletList: {getFormatedData: IWalletDataList[]};
  setWalletList: (param: {getFormatedData: IWalletDataList[]}) => void;
  transactionData: ITransaction;
  setTransactionData: (param: ITransaction) => void;
  balanceSelected: string;
  setBalanceSelected: (param: string) => void;
  dataBalance: IDataBalance;
  setDataBalance: (params: IDataBalance) => void;
  dollarPrice: number;
  setDollarPrice: (params: number) => void;
  extract: IExtract;
  setExtract: (params: IExtract) => void;
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
  balanceSelected: 'general',
  setBalanceSelected: () => {},
  dataBalance: {getBalance: {month: [], week: [], day: []}},
  setDataBalance: () => {},
  dollarPrice: 5,
  setDollarPrice: () => {},
  extract: {
    getExtract: [
      {
        hash: '',
        type: '',
        addressFrom: '',
        addressTo: '',
        value: 0,
        coinValue: 0,
        confirmed: false,
        date: new Date('01-01-19994'),
        fee: 0,
        balance: 0,
        prevout: 0,
      },
    ],
  },
  setExtract: () => {},
  walletList: {
    getFormatedData: [
      {
        address: '',
        balance: 0,
        price: 0,
        privateKey: '',
        coinPrice: 0,
      },
    ],
  },
  setWalletList: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletList, setWalletList] = useState({
    getFormatedData: [
      {
        address: '',
        balance: 0,
        price: 0,
        privateKey: '',
        coinPrice: 0,
      },
    ],
  });
  const [extract, setExtract] = useState<IExtract>({
    getExtract: [
      {
        hash: '',
        type: '',
        addressFrom: '',
        addressTo: '',
        value: 0,
        coinValue: 0,
        confirmed: false,
        date: new Date('01-01-19994'),
        fee: 0,
        balance: 0,
        prevout: 0,
      },
    ],
  });
  const [dataBalance, setDataBalance] = useState({
    getBalance: {month: [0], week: [0], day: [0]},
  });

  const [balanceSelected, setBalanceSelected] = useState<string>('general');
  const [dollarPrice, setDollarPrice] = useState<number>(5);
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
    balanceSelected,
    setBalanceSelected,
    dataBalance,
    setDataBalance,
    dollarPrice,
    setDollarPrice,
    extract,
    setExtract,
    walletList,
    setWalletList,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
