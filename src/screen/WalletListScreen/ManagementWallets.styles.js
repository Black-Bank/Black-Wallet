import styled from 'styled-components/native';

export const ContainerAddOrDeleteWallet = styled.View`
  height: 202px;
  justify-content: space-between;
`;

export const CardAddOrDeleteWallet = styled.TouchableOpacity`
  height: 100px;
  background-color: #ffff;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #828282;
`;

export const ContentText = styled.View`
  width: 62%;
  height: 65px;
  justify-content: space-between;
`;

export const TitleCard = styled.Text`
  font-weight: 600;
  line-height: 20px;
  height: 20px;
`;

export const DescriptionCard = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
`;

export const ContainerManagementWallets = styled.View`
  height: 400px;
`;

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

export const CardDistribution = styled.TouchableOpacity`
  width: 200px;
  height: 150px;
  background-color: #ffff;
  border-radius: 8px;
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

export const PieChart = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

export const Slice = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: 50% 100%;
`;
