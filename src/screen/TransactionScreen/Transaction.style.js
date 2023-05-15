import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const TransactionContainer = styled.View`
  flex: 1;
  margin-top: 58px;
  background-color: rgba(153, 153, 153, 0.2);
`;

export const LogoContainer = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
export const QuantityContainer = styled.View`
  margin-top: 24px;
  margin-right: 16px;
  margin-left: 16px;
`;

export const TransactionItemContainer = styled.View`
  margin-top: 24px;
  margin-left: 18px;
  margin-right: 18px;
`;

export const TransactionQuantityItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TransactionTextItem = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #828282;
  mix-blend-mode: normal;
`;

export const TransactionItemExternalBox = styled.View`
  margin-top: 8px;
  flex-direction: row;
  background-color: #fff;
  min-height: 74px;
  border-radius: 8px;
  align-items: center;
`;
export const TransactionItemExternalWalletAddress = styled.View`
  margin-top: 8px;
  flex-direction: row;
  background-color: #fff;
  height: 54px;
  border-radius: 8px;
  align-items: center;
`;

export const TransactionItemExternalQuantity = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  margin-top: 8px;
`;

export const LogoItem = styled.View`
  margin-left: 12px;
`;

export const InternalItemBox = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 16px;
  min-height: 30px;
  margin-right: 16px;
  justify-content: space-between;
`;

export const InsideInternalBox = styled.View``;

export const WalletTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #828282;
`;

export const WalletValue = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #828282;
`;

export const InputWalletAddress = styled(TextInput)`
  flex: 1;
  padding: 16px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  margin-left: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #414561;
`;
export const InputWalletValue = styled(TextInput)`
  flex: 1;
  padding: 16px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  margin-left: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #414561;
`;

export const PastButton = styled.TouchableOpacity`
  background-color: #f2f3f5;
  border-radius: 12px;
  margin-right: 17px;
  padding: 8px;
  margin-left: 8px;
`;

export const PastButtonText = styled.Text`
  color: #414561;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;
export const SelectorButton = styled.TouchableOpacity`
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

export const DotItem = styled.TouchableOpacity`
  margin-left: 5px;
  margin-right: 5px;
  height: 15px;
  width: 15px;
  background-color: #121212;
  border-radius: 20px;
`;

export const EmptyDotItem = styled.TouchableOpacity`
  margin-left: 5px;
  margin-right: 5px;
  height: 15px;
  width: 15px;
  border: solid 2px #121212;
  background-color: transparent;
  border-radius: 40px;
`;

export const SelectorText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #737899;
`;

export const ContinueButtonContainer = styled.View`
  width: 100%;
  margin-top: 40px;
  align-items: center;
`;
export const ContinueButton = styled.TouchableOpacity`
  background-color: #624aa7;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 52px;
`;
export const DisabledButton = styled.TouchableOpacity`
  background-color: #ccc;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 52px;
  opacity: 0.6;
`;

export const ButtonContinueText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

export const ValidationContainer = styled.View`
  margin-top: 24px;
  margin-right: 16px;
  margin-left: 16px;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;

export const SucessMessage = styled.Text`
  color: green;
  font-size: 16px;
  margin-top: 5px;
`;
