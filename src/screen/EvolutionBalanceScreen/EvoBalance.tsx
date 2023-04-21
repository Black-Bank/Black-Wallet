import React from 'react';
import {StatusBar} from 'react-native';
import {Chart} from '../../component/chart/chart';
import ChartController from '../../component/chart/controller/chartController';
import {EVO_SCREEN} from '../../component/strings/pt-br';
import {Container, Description, Title} from './EvoBalance.style';

export function EvoBalance() {
  const chartInstance = ChartController.getInstance();
  const dayDataFinance = chartInstance.data.getBalance.day;
  const value = dayDataFinance[dayDataFinance.length - 1].toFixed(2);

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      <Container>
        <Title>US$ {value}</Title>

        <Chart />
        <Description>{EVO_SCREEN.description}</Description>
      </Container>
    </>
  );
}
