import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f5;
  align-items: center;
  padding-top: 80px;
`;

export const InputContainer = styled.View`
  width: 85%;
`;

export const TextLabel = styled.Text`
  margin-bottom: 8px;
  font-weight: 300;
  line-height: 20px;
  color: #4f4f4f;
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

export const InputStyled = styled.TextInput`
  width: 88%;
  background-color: transparent;
  height: 56px;
  border-radius: 8px;
  padding: 8px;
  height: 100%;
`;

export const Button = styled.TouchableOpacity`
  background-color: #624aa7;
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonTextCancel = styled.Text`
  color: #624aa7;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const Error = styled.Text`
  color: #eb5757;
  font-size: 14px;
  margin-top: 4px;
`;

export const EyeContainer = styled.TouchableOpacity``;
