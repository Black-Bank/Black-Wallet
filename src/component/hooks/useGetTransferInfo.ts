/* eslint-disable react-hooks/exhaustive-deps */
import {useQuery} from '@apollo/client';
import {GET_TRANSFER_INFO} from '../client/queries/queries';
import {AuthContext} from '../../contexts/auth';
import {useContext, useEffect} from 'react';

export const useGetTransferInfo = () => {
  const {walletData, transactionInfo, setFeeContract} = useContext(AuthContext);
  const {data, loading, error, refetch} = useQuery(GET_TRANSFER_INFO, {
    variables: {
      coin: walletData.coin,
      addressFrom: walletData.address,
      privateKey: walletData.privateKey,
      addressTo: transactionInfo.addressTo,
      value: transactionInfo.value,
    },
  });

  useEffect(() => {
    if (data) {
      setFeeContract(data);
    }
  }, [data]);

  return {data, loading, error, refetch};
};
