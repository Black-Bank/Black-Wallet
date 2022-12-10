import {useQuery} from '@apollo/client';
import config from '../../../config';
import {DELETE_WALLET} from '../client/queries/queries';

export const useGetDeleteWallet = (address: string) => {
  const {data, loading, error, refetch} = useQuery(DELETE_WALLET, {
    variables: {
      hashId: 'deg-hjags-123-212asdl',
      key: config.KEY_SECRET_MONGODB,
      address: address,
    },
  });

  return {data, loading, error, refetch};
};
