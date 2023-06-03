import styled from 'styled-components/native';

export const Description = styled.Text`
  color: #4f4f4f;
  font-size: 14px;
  font-weight: semi-bold;
  font-family: Helvetica;
  margin-top: 5px;
  text-align: center;
  padding: 4px 0;
`;

export const DescriptionWalletHeader = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: semi-bold;
  font-family: Helvetica;
  margin-top: 5px;
`;

export const AccountHomeOptions = styled.View`
  margin-top: 10px;
  background-color: red;
`;

export const OptionsContainerWalletHeader = styled.View`
  flex: 0.85;
  align-items: center;
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
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
  background-color: #f2f3f5;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const OptionButtonAll = styled.View`
  height: 90px;
  width: 75px;
  justify-content: space-between;
  align-items: center;
  align-items: center;
`;

export const LoadingContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerContentHome = styled.View`
  background-color: #f2f3f5;
  padding: 15px 20px;
`;
