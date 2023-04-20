import {useQuery} from '@apollo/client';
import {GET_BALANCE} from '../client/queries/queries';
import AuthStore from '../../screen/AuthScreen/AuthStore';

export const useGetBalance = () => {
  const loginInstance = AuthStore.getInstance();
  const Email = loginInstance.email;
  const {data, loading, error, refetch} = useQuery(GET_BALANCE, {
    variables: {
      Email: Email,
    },
  });

  return {data, loading, error, refetch};
};
