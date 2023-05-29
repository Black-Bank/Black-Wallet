import React, {useContext, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Chart} from '../../component/chart/chart';
import {EVO_SCREEN} from '../../component/strings/pt-br';
import {Container, Description, Title} from './EvoBalance.style';
import {useGetBalance} from '../../component/hooks/useGetBalance';
import {ActivityIndicator} from 'react-native-paper';
import {AuthContext} from '../../contexts/auth';

export function EvoBalance() {
  const {isUpdate} = useContext(AuthContext);
  const refetchTime = 100;
  const {data, refetch} = useGetBalance();
  const dayDataFinance = data?.getBalance.day;
  const value = data
    ? dayDataFinance[dayDataFinance?.length - 1].toFixed(2)
    : 0;

  useEffect(() => {
    setTimeout(refetch, refetchTime);
  }, [refetch, isUpdate]);

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      {data ? (
        <Container>
          <Title>US$ {value}</Title>

          <Chart data={data} />
          <Description>{EVO_SCREEN.description}</Description>
        </Container>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
