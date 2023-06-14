import styled from 'styled-components/native';
import IconCardInvite1 from '../../assets/IconCardInviteFriends1.svg';
import IconCardInvite2 from '../../assets/IconCardInviteFriends2.svg';
import IconCardInvite3 from '../../assets/IconCardInviteFriends3.svg';
import IconCardInvite4 from '../../assets/IconCardInviteFriends4.svg';
import IconCardInvite5 from '../../assets/IconCardInviteFriends5.svg';
import IconCardInvite6 from '../../assets/IconCardInviteFriends6.svg';
import IconCardInvite7 from '../../assets/IconCardInviteFriends7.svg';
import IconCardInvite8 from '../../assets/IconCardInviteFriends8.svg';

export const ContainerBackgroundImage = styled.TouchableOpacity`
  margin-top: 15px;
  border-radius: 8px;
  height: 150px;
  overflow: hidden;
`;

export const ImageBackgroundStyled = styled.ImageBackground`
  flex: 1;
  border-radius: 8px;
  position: relative;
  justify-content: center;
  padding: 0 35px;
`;

export const IconCardInvite1Styled = styled(IconCardInvite1)``;

export const IconCardInvite2Styled = styled(IconCardInvite2)`
  position: absolute;
  right: 5%;
  top: 0;
`;

export const IconCardInvite3Styled = styled(IconCardInvite3)`
  position: absolute;
  right: 5%;
  bottom: 55px;
`;

export const IconCardInvite4Styled = styled(IconCardInvite4)`
  position: absolute;
  left: 55%;
  top: 30px;
`;

export const IconCardInvite5Styled = styled(IconCardInvite5)`
  position: absolute;
  top: 0;
  right: 48%;
`;

export const IconCardInvite6Styled = styled(IconCardInvite6)`
  position: absolute;
  bottom: 0;
  left: 28%;
`;

export const IconCardInvite7Styled = styled(IconCardInvite7)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const IconCardInvite8Styled = styled(IconCardInvite8)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const TextNormalCardInviteFriends = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
`;

export const TextBoldCardInviteFriends = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

export const ViewCardInviteFriendsContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
