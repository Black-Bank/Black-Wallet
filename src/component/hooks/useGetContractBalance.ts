import {useQuery} from '@apollo/client';
import {GET_CONTRACT_BALANCE} from '../client/queries/queries';
import AuthStore from '../../screen/AuthScreen/AuthStore';
export const useGetContractBalance = (name: string) => {
  const loginInstance = AuthStore.getInstance();
  const Email = loginInstance.email;
  const {data, loading, error, refetch} = useQuery(GET_CONTRACT_BALANCE, {
    variables: {
      name: name,

      email: Email,
    },
  });

  return {data, loading, error, refetch};
};
