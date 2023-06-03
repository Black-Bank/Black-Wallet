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

export const ContainerWallets = styled.View``;
