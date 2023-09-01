import styled from 'styled-components/native';

export const Container = styled.View``;

export const Description = styled.Text`
  color: #4f4f4f;
  font-size: 14px;
  font-weight: semi-bold;
  font-family: Helvetica;
  margin-top: 5px;
  text-align: center;
  padding: 4px 0;
`;

export const OptionsContainer = styled.View`
  background-color: white;
  flex-direction: row;
  height: 120px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
`;
export const OptionsButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
`;

export const OptionButtonAll = styled.View`
  height: 90px;
  width: 75px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
