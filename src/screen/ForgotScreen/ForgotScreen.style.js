import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f5;
  align-items: center;
  padding-top: 50px;
`;

export const Text = styled.Text`
  margin: 25px 0;
  text-align: center;
  width: 90%;
  color: #414561;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

export const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 16px;
`;

export const InputStyled = styled.TextInput`
  background-color: white;
  height: 55px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
`;

export const TextLabel = styled.Text`
  font-weight: 300;
  margin-bottom: 8px;
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonCancel = styled.TouchableOpacity`
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonTextCancel = styled.Text`
  color: #7159c1;
  font-size: 16px;
  font-weight: 600;
`;

export const Error = styled.Text`
  color: #ffcccc;
  font-size: 14px;
  margin-top: 4px;
`;
