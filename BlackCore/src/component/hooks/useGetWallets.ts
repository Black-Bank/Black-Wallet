import {useQuery} from '@apollo/client';
import config from '../../../config';
import {GET_WALLETS} from '../client/queries/queries';

export const useGetWallets = () => {
  const {data, loading, error, refetch} = useQuery(GET_WALLETS, {
    variables: {
      hashId: 'deg-hjags-123-212asdl',
      key: config.KEY_SECRET_MONGODB,
    },
  });

  return {data, loading, error, refetch};
};
