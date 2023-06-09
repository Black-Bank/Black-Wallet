export interface IWallet {
  name?: string;
  address: string;
  WalletType?: string;
  balance: number;
  coinPrice: number;
}

export interface IWalletData {
  address: string;
  balance: number;
  price: number;
  privateKey?: string;
  coinPrice: number;
}

export interface IWalletDataList {
  totalBalance: number;
  address: string;
  balance: number;
  price: number;
  WalletType: string;
  privateKey: string;
  coinPrice: number;
}
