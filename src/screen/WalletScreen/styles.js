import styled from 'styled-components/native';

export const AdressBox = styled.View`
  background-color: #d3d3d3;
  padding: 10px 0;
  /* width: 100%; */
  flex-direction: row;
  border-radius: 5px;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.8;
`;

export const HorizontalSpaceViewDefault = styled.View`
  margin-left: 10px;
  margin-right: 10px;
`;

export const DescriptionBox = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const GoBackButtonSpace = styled.View`
  margin-bottom: 10px;
`;

export const ModalBox = styled.View`
  margin-top: 50px;
  flex-direction: row;
  width: 90%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
`;
export const ModalContent = styled.View`
  margin-top: 70px;
  border: 1px solid #3c0f69;
  border-radius: 5px;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: #121212;
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const SpaceView = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
  height: 1px;
  width: 80%;
`;

export const ModalBoxStyle = styled.View`
  height: 90%;
  align-items: center;
  justify-content: center;
`;

export const ButtonBox = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
`;
export const Text = styled.Text`
  margin-top: 30px;
  font-family: monospace;
  font-size: 18px;
  color: #121212;
`;

export const DangerGeneralButtonStyles = styled.View`
  height: 35px;
  width: 80px;
  justify-content: center;
  background-color: #d3d3d3;
  border-radius: 50px;
  margin: 1px;
  margin-top: 10px;
`;
export const noClickrGeneralButtonStyles = styled.View`
  height: 35px;
  width: 80px;
  justify-content: center;
  background-color: red;
  border-radius: 50px;
  margin: 1px;
  margin-top: 10px;
`;
export const ButtonTitle = styled.Text`
  font-size: 15px;
  color: #121212;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;
