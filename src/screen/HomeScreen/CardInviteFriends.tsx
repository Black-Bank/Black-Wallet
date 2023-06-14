import React from 'react';
import {
  ContainerBackgroundImage,
  IconCardInvite1Styled,
  IconCardInvite2Styled,
  IconCardInvite3Styled,
  IconCardInvite4Styled,
  IconCardInvite5Styled,
  IconCardInvite6Styled,
  IconCardInvite7Styled,
  IconCardInvite8Styled,
  ImageBackgroundStyled,
  TextBoldCardInviteFriends,
  TextNormalCardInviteFriends,
  ViewCardInviteFriendsContent,
} from './CardInviteFriends.style';

export function CardInviteFriends() {
  return (
    <ContainerBackgroundImage>
      <ImageBackgroundStyled
        source={require('../../assets/imageCardInviteFriends.png')}>
        <ViewCardInviteFriendsContent>
          <TextNormalCardInviteFriends>
            {' '}
            Convide{'\n'} seus{' '}
            <TextBoldCardInviteFriends>Amigos</TextBoldCardInviteFriends>
          </TextNormalCardInviteFriends>
          <IconCardInvite1Styled />
        </ViewCardInviteFriendsContent>
        <IconCardInvite2Styled />
        <IconCardInvite3Styled />
        <IconCardInvite4Styled />
        <IconCardInvite5Styled />
        <IconCardInvite6Styled />
        <IconCardInvite7Styled />
        <IconCardInvite8Styled />
      </ImageBackgroundStyled>
    </ContainerBackgroundImage>
  );
}
