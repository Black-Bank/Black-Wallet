import {CoinPrice} from '../../component/services/WebServices';

export const GetCoinPrice = async (coin: string) => {
  const coinPrice = Number(await CoinPrice(coin));

  return coinPrice;
};
