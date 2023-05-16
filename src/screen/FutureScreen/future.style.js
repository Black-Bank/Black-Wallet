import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: black;
  font-weight: bold;
  margin-bottom: 32px;
  margin-top: 80px;
`;

export const FutureCard = styled.View`
  height: 60px;
  width: 320px;
  margin-bottom: 20px;
  padding-left: 10px;
  border-width: 1px;
  border-color: 'black';
  border-radius: 8px;
`;

export const FutureIcon = styled.View`
  height: 40px;
  width: 40px;
`;

export const FutureCardWallet = styled.View`
  width: 220px;
  flex-direction: row;
  flex: 1;
  margin-top: 5px;
`;

export const CardFutureContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  margin-top: 5px;
`;

export const FutureCardTitle = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;

export const BoxCardTitle = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const MoneyIn = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: green;
`;

export const MoneyOut = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: red;
`;

export const FutureTotalContainer = styled.View`
  background: rgba(153, 153, 153, 0.3);

  width: 320px;
  border-radius: 8px;
  flex-direction: row;
  padding: 0 16px;
  padding-top: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  padding-right: 10px;
`;
export const TotalText = styled.Text`
  color: ${props => (props.value ? 'green' : 'red')};
  font-weight: bold;
  margin-left: 16px;
`;
export const DescText = styled.Text`
  color: black;
  font-weight: bold;
  width: 100%;
  margin-left: 16px;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: right;
`;

export const MoreButton = styled.TouchableOpacity`
  margin-top: 10px;
  margin-left: 16px;
`;
