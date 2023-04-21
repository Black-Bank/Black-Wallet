/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useGetBalance} from './useGetBalance';
import {useMutation} from '@apollo/client';
import {INSERT_BALANCE} from '../client/queries/queries';
import AuthStore from '../../screen/AuthScreen/AuthStore';
import ChartController from '../chart/controller/chartController';

export function useUpdateChart(TotalBalance: number) {
  const {data, refetch} = useGetBalance();
  const [insertBalance] = useMutation(INSERT_BALANCE);
  const date = new Date();
  const actualYear = date?.getFullYear();
  const Month = date.getMonth() + 1;
  const day = date.getDate();
  const todayDate = `${day}/${Month}/${actualYear}`;
  const refetchTime = 10;
  const loginInstance = AuthStore.getInstance();
  const chartInstance = ChartController.getInstance();
  const Email = loginInstance.email;
  const isChartUpdate = Boolean(
    data && data?.getBalance.updateDate !== todayDate && TotalBalance >= 0,
  );

  useEffect(() => {
    if (isChartUpdate) {
      insertBalance({
        variables: {
          Email: Email,
          newBalance: TotalBalance,
        },
      }).then(() => setTimeout(refetch, refetchTime));
    }
  }, [data, TotalBalance]);
  chartInstance.setData(data);

  return {};
}
