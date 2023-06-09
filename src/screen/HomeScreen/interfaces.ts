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
  address: string;
  balance: number;
  price: number;
  privateKey: string;
  coinPrice: number;
}
