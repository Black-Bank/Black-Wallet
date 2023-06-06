import styled from 'styled-components/native';

export const ContainerWalletsAndTransactions = styled.View`
  flex-direction: column;
`;

export const OptionsWalletsOrTransactions = styled.View`
  flex-direction: row;
`;

export const WalletsOrTransactionsText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: ${props => (props.isPressed ? '#624AA7' : '#828282')};
  margin-right: 20px;
  margin-top: 15px;
  padding-bottom: 5px;
  border-bottom-width: 3px;
  border-bottom-color: ${props =>
    props.isPressed ? '#624AA7' : 'transparent'};
`;

export const ButtonFilterWalletsOrTransactions = styled.TouchableOpacity``;

export const Transactions = styled.View`
  border-radius: 8px;
  overflow: hidden;
  margin: 15px 0;
`;

export const ContainerTransactionsDate = styled.View`
  margin-top: 15px;
`;

export const ContainerTransaction = styled.TouchableOpacity`
  background-color: #ffffff;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text1 = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;

export const Text2 = styled.Text`
  font-weight: 300;
  font-size: 14px;
`;

export const ViewCollumn = styled.View`
  margin-left: 5px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;

export const ButtonSeeBallance = styled.TouchableOpacity``;
