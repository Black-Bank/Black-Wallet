import styled from 'styled-components/native';

export const ContainerCreateWallet = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 16px;
`;

export const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 16px;
  position: relative;
`;

export const InputStyled = styled.TextInput`
  background-color: transparent;
  height: 40px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
  color: black;
`;

export const Error = styled.Text`
  color: #ffcccc;
  font-size: 14px;
  margin-top: 4px;
`;

export const CreateWalletButton = styled.TouchableOpacity`
  background-color: #7159c1;
  justify-content: center;
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ViewDropDown = styled.View`
  position: absolute;
  z-index: 1;
  background-color: white;
  border-radius: 5px;
  width: 100%;
  top: 105%;
`;
