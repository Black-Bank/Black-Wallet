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

export const ContentTextNotWallet = styled.View`
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
  width: 90%;
  margin-bottom: 10px;
  color: #414561;
`;

export const ContainerGraphic = styled.View`
  width: 200px;
  height: 150px;
  background-color: #ffff;
  border-radius: 8px;
`;

export const TextTitle = styled.Text`
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  margin-top: 7px;
`;

export const ContentGrapric = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  height: 32px;
  margin: 0 auto;
`;

export const ContainerText = styled.View`
  flex-direction: row;
`;

export const TextGraphic = styled.Text`
  margin-left: 5px;
`;

export const TextPercentageBTC = styled.Text`
  position: absolute;
  top: 55%;
  left: 13%;
  border-bottom-color: #ff7d00;
  border-bottom-width: 2;
`;

export const TextPercentageETH = styled.Text`
  position: absolute;
  top: 22%;
  right: 13%;
  border-bottom-color: #5b95ff;
  border-bottom-width: 2;
`;

export const ContainetNotWallet = styled.View`
  width: 200px;
  height: 150px;
  background-color: #ffff;
  border-radius: 8px;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonCreateWallet = styled.TouchableOpacity``;
