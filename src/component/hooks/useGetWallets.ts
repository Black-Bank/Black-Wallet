import {useQuery} from '@apollo/client';
import {GET_WALLETS} from '../client/queries/queries';
import AuthStore from '../../screen/AuthScreen/AuthStore';

export const useGetWallets = () => {
  const loginInstance = AuthStore.getInstance();
  const Email = loginInstance.email;

  const {data, loading, error, refetch} = useQuery(GET_WALLETS, {
    variables: {
      Email: Email,
    },
  });

  return {data, loading, error, refetch};
};
