import styled from 'styled-components/native';

export const ContainerCards = styled.View``;

export const Card = styled.TouchableOpacity`
  height: 95px;
  margin-top: 15px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${props => props.bgColor};
`;

export const ContentBuyCoins = styled.View`
  width: 55%;
  margin-bottom: 10px;
`;

export const TitleContent = styled.Text`
  font-weight: 600;
  font-size: 14px;
  color: white;
`;

export const DescriptionContent = styled.Text`
  color: white;
  font-weight: 300;
  margin-top: 5px;
`;
