import {useQuery} from '@apollo/client';
import config from '../../../config';
import {GET_BTC_PRICE} from '../client/queries/queries';

export const useGetPrice = (coin: string) => {
  const {data, loading, error, refetch} = useQuery(GET_BTC_PRICE, {
    variables: {
      coin: coin,
      apiKey: config.MARKETCAP_API_KEY,
    },
  });

  return {result: data?.getPrice, reload: refetch};
};
