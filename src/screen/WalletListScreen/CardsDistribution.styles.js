import styled from 'styled-components/native';

export const ContainerCountAndDistribution = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CardCountWallet = styled.View`
  width: 130px;
  height: 150px;
  background-color: #ffff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TextCountWallet = styled.Text`
  font-weight: 300;
  color: #414561;
  margin: 0;
  text-align: center;
`;

export const NumberCountWallet = styled.Text`
  margin: 5px 0;
  font-weight: 300;
  font-size: 48px;
  color: #4f4f4f;
`;

export const ContentTextNotWallet = styled.TouchableOpacity`
  width: 130px;
  height: 150px;
  background-color: #ffff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: #414561;
`;

export const TextNotWallet = styled.Text`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  width: 118px;
  margin-bottom: 10px;
`;
