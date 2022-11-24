import {useQuery} from '@apollo/client';
import config from '../../../config';
import {GET_WALLETS} from '../client/queries/queries';

export const useGetWallets = () => {
  const {data, loading, error, refetch} = useQuery(GET_WALLETS, {
    variables: {
      hashId: 'deg-hjags-123-212asdl',
      key: config.KEY_SECRET_MONGODB,
      mainNet: config.ETH_MAINNET,
      API_KEY: config.MARKETCAP_API_KEY,
    },
  });

  return {data, loading, error, refetch};
};
