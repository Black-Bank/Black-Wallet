import {useQuery} from '@apollo/client';
import {GET_EXTRACT} from '../client/queries/queries';
import AuthStore from '../../screen/AuthScreen/AuthStore';

export const useGetExtract = () => {
  const loginInstance = AuthStore.getInstance();
  const Email = loginInstance.email;
  const {data, loading, error, refetch} = useQuery(GET_EXTRACT, {
    variables: {
      email: Email,
    },
  });

  return {data, loading, error, refetch};
};
