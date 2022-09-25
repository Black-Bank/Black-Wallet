import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
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
