import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 80px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 92%;
  height: 500px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #414561;
  line-height: 25px;
  font-weight: 600;
  align-items: center;
  margin: -5px 20px 10px 20px;
`;

export const TextEmail = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #624aa7;
`;

export const Description = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: #414561;
  line-height: 20px;
`;

export const CodeinputContainer = styled.View`
  width: 95%;
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
  color: #624aa7;
  text-transform: uppercase;
`;

export const TimeContainer = styled.View`
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerText = styled.Text`
  color: #624aa7;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;

export const ConfirmationButton = styled.TouchableOpacity`
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  width: 164px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ConfirmationButtonText = styled.Text`
  color: white;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

export const RemainderButton = styled.TouchableOpacity`
  width: 120px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const RemainderButtonText = styled.Text`
  color: #624aa7;
  font-size: 16px;
  font-weight: bold;
`;

export const NotReceived = styled.Text`
  margin: 20px 0;
  text-align: center;
  font-weight: 300;
  color: #414561;
  line-height: 20px;
  width: 85%;
`;
