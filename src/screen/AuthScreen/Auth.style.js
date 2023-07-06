import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  background-color: #f2f3f5;
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 85%;
  margin-bottom: 16px;
`;
export const InputStyled = styled.TextInput`
  background-color: #ffff;
  height: 56px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
  color: black;
`;

export const InputContent = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  background-color: white;
  border-color: #ccc;
`;

export const InputStyledPassword = styled.TextInput`
  width: 88%;
  background-color: transparent;
  height: 56px;
  border-radius: 8px;
  padding: 8px;
  color: black;
`;

export const TextLabel = styled.Text`
  font-weight: 300;
  margin-bottom: 8px;
  color: #4f4f4f;
`;

export const Button = styled.TouchableOpacity`
  background-color: #000;
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #7159c1;
  justify-content: center;
  width: 85%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const SignLink = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  width: 80%;
  border: none;
  align-items: center;
  margin-top: 60px;
  cursor: default;

  &:hover {
    cursor: pointer;
  }
`;

export const SignButton = styled.TouchableOpacity`
  justify-content: center;
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;
`;

export const SignText = styled.Text`
  color: #7159c1;
  font-size: 16px;
  font-weight: 600;
`;

export const Error = styled.Text`
  color: #eb5757;
  font-size: 14px;
  margin-top: 4px;
`;

export const EyeContainer = styled.TouchableOpacity``;

export const ContainerLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ForgotPasswordContainer = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #624aa7;
`;
