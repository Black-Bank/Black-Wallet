import React from 'react';
import {StatusBar} from 'react-native';
import {ContainerSplashScreen, TextStyled} from './SplashScreen.style';
import CreditBlackIcon from '../../assets/logo-white.svg';

export function SplashScreen() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ContainerSplashScreen>
        <CreditBlackIcon width={140} height={140} />
        <TextStyled>Praticidade. Segurança. Transparência.</TextStyled>
      </ContainerSplashScreen>
    </>
  );
}
