import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const HeaderTitle = styled.Text`
  display: flex;
  height: 30px;
  font-size: 18px;
  font-family: 'Gill Sans';
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  background-color: 'transparent';
`;

export const ContainerChartButton = styled.View`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: space-around;

  flex-direction: row;
`;
export const RedContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #fff;
`;

export const ButtonTitle = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;

export const CardWalletContainer = styled.View`
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CardWallet = styled.View`
  display: flex;
  width: 220px;
  flex-direction: row;
`;

export const BoxCardTitle = styled.View`
  display: flex;
  width: 320px;
  margin-left: 5px;
`;
export const CardTitle = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 40px;
  text-transform: uppercase;
`;
