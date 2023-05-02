import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Description = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  color: #333;
`;
export const CodeinputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 20;
  justify-content: space-around;
`;

export const CodeInput = styled.TextInput`
  background-color: #e6e4ef;
  border-radius: 4px;
  width: 50px;
  height: 65px;
  text-align: center;
  font-size: 24px;
`;

export const TimeContainer = styled.View`
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
export const ButtonContainer = styled.View`
  justify-content: center;
  margin-top: 50px;
`;
export const CancelButton = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  width: 150px;
  align-items: center;
`;
export const CancelButtonText = styled.Text`
  color: #494949;
  font-size: 16px;
  font-weight: bold;
  text-decoration-line: underline;
`;
export const ConfirmationButton = styled.TouchableOpacity`
  background-color: black;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  width: 150px;
  align-items: center;
`;

export const ConfirmationButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const RemainderButton = styled.TouchableOpacity`
  background-color: black;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  width: 150px;
  align-items: center;
`;
export const RemainderButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
export const NotReceived = styled.Text`
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  color: #333;
`;
