import {useQuery} from '@apollo/client';
import {GET_COIN_PRICE} from '../client/queries/queries';

export const useGetCoinPrice = (coin: string) => {
  const {data, loading, error, refetch} = useQuery(GET_COIN_PRICE, {
    variables: {
      coin: coin,
    },
  });

  return {coinPrice: data?.CoinPrice, loading, error, refetch};
};
