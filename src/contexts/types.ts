import {ITypeExtract} from '../component/transactionList/type';

export interface IWallet {
  address: string;
  name: string;
  privateKey: string;
  balance: number;
  coin: string;
}

export interface ITransaction extends IWallet {
  addressTo: string;
  value: number;
  fee: number;
  convertFactor: number;
}

export interface IDataBalance {
  getBalance: {month: number[]; week: number[]; day: number[]};
}
export interface IExtract {
  getExtract: ITypeExtract[];
}
