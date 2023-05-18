export interface IFutureCard {
  name: string;
  value: number;
  walletType: string;
}

export interface IUnconfirmedWallet {
  route?: {
    params: {
      WalletType: string;
      address: string;
      balance: number;
      coinPrice: number;
      name: string;
      privateKey: string;
      totalBalance: number;
      unconfirmedBalance: number;
      __typename: string;
    }[];
  };
}

export interface IWalletType {
  WalletType: string;
  address: string;
  balance: number;
  coinPrice: number;
  name: string;
  privateKey: string;
  totalBalance: number;
  unconfirmedBalance: number;
  __typename: string;
}
