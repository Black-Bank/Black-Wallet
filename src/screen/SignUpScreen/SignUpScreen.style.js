import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #35224b;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  margin-bottom: 32px;
`;

export const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 16px;
`;

export const InputStyled = styled.TextInput`
  background-color: transparent;
  height: 40px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  background-color: #7159c1;
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

export const Error = styled.Text`
  color: #ffcccc;
  font-size: 14px;
  margin-top: 4px;
`;
