import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f3ecec;
`;

export const GeneralButtonStyles = styled.View`
  height: 35px;
  width: 100px;
  justify-content: center;
  background-color: #6c3f91;
  border-radius: 15px;
  margin: 5px;
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
export const HeaderWalletTitle = styled.Text`
  display: flex;
  height: 30px;
  font-size: 18px;
  font-family: 'Gill Sans';
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: #121212;
  text-transform: uppercase;
  font-weight: bold;
  background-color: 'transparent';
`;

export const ContainerChartButton = styled.View`
  justify-content: center;
  flex-direction: row;
`;
export const WalletContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3ecec;
  padding-top: 100px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #000;
  font-family: Helvetica;
`;
export const AdressTitle = styled.Text`
  font-size: 14px;
  width: 80%;
  color: #121212;
`;
export const ButtonTitle = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;
export const ButtonChartTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;

export const CardWalletContainer = styled.View`
  margin-left: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const CardWallet = styled.View`
  width: 220px;
  flex-direction: row;
  flex: 1;
  margin-top: 5px;
`;

export const BoxCardTitle = styled.View`
  margin-left: 10px;
  flex-direction: row;
`;
export const CardCoin = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 40px;
  text-transform: uppercase;
`;

export const WalletCard = styled.View`
  display: flex;
  flex: 1;
  margin-top: 130px;
  justify-content: center;
  align-items: center;
`;
export const ContentCard = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const SendCard = styled.View`
  flex: 1;
  justify-content: center;
  border-radius: 20;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  align-items: center;
  background-color: #121212;
`;

export const SendAlert = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;

export const SendCoin = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;
