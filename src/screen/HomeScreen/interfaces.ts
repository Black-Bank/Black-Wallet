export interface IWallet {
  name?: string;
  address: string;
  WalletType?: string;
}

export interface IWalletData {
  address: string;
  balance: string;
  price: number;
  privateKey?: string;
  coinPrice: number;
}
