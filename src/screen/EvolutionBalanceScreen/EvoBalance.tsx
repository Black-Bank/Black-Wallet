import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {Chart} from '../../component/chart/chart';
import {EVO_SCREEN} from '../../component/strings/pt-br';
import {Container, Description, Title} from './EvoBalance.style';
import {ActivityIndicator} from 'react-native-paper';
import {AuthContext} from '../../contexts/auth';

export function EvoBalance() {
  const {dataBalance} = useContext(AuthContext);

  const dayDataFinance = dataBalance?.getBalance.day;
  const value = dataBalance
    ? dayDataFinance[dayDataFinance?.length - 1].toFixed(2)
    : 0;

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      {dataBalance ? (
        <Container>
          <Title>US$ {value}</Title>

          <Chart data={dataBalance} />
          <Description>{EVO_SCREEN.description}</Description>
        </Container>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
