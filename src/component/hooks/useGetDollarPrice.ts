import {useQuery} from '@apollo/client';
import {GET_DOLLAR_PRICE} from '../client/queries/queries';

export const useGetDollarPrice = () => {
  const {data, loading, error, refetch} = useQuery(GET_DOLLAR_PRICE);

  return {
    dollarPrice: Number(data?.getDolarPrice.Price),
    loading,
    error,
    refetch,
  };
};
