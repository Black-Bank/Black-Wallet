import {useQuery} from '@apollo/client';
import {GET_TRANSFER_INFO} from '../client/queries/queries';
import {AuthContext} from '../../contexts/auth';
import {useContext} from 'react';

export const useGetTransferInfo = () => {
  const {walletData} = useContext(AuthContext);
  const {data, loading, error, refetch} = useQuery(GET_TRANSFER_INFO, {
    variables: {
      coin: walletData.coin,
    },
  });

  return {data, loading, error, refetch};
};
