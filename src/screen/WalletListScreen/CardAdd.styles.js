import styled from 'styled-components/native';

export const ContainerAddOrDeleteWallet = styled.View``;

export const CardAddOrDeleteWallet = styled.TouchableOpacity`
  background-color: #ffff;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #828282;
  padding: 20px 0;
`;

export const ContentText = styled.View`
  width: 62%;
  justify-content: space-between;
`;

export const TitleCard = styled.Text`
  font-weight: 600;
  line-height: 20px;
`;

export const DescriptionCard = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #828282;
`;
