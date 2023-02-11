import axios from 'axios';

export async function CoinPrice(coin: string) {
  try {
    const getPrice_url = `https://api.binance.com/api/v3/avgPrice?symbol=${coin}USDT`;
    const response = await axios.get(getPrice_url);
    const coinPrice = Number(response?.data.price);

    return coinPrice;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
