export type ITypeExtract = {
  hash: string;
  type: string;
  addressFrom: string;
  addressTo: string;
  value: number;
  coinValue: number;
  confirmed: boolean;
  date: Date;
  fee: number;
  balance?: number;
  prevout?: number;
};

export type ITypeCardTransaction = {
  addressFrom: string;
  value: number;
  coinValue: number;
  confirmed: boolean;
  date: Date;
};
