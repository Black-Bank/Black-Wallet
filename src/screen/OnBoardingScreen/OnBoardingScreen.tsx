import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {
  ImageBackgroundStyled,
  ActiveDotContainer,
  Dot,
  InactiveDotContainer,
  TextSwiper,
  ContainerLogo,
  TextButton,
  ContainerButton,
  DarkOverlay,
  ContainerOnboarding,
} from './OnBoardingScreen.style';
import Logo from '../../assets/logo-white.svg';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ActiveDot = () => (
  <ActiveDotContainer>
    <Dot />
  </ActiveDotContainer>
);

const InactiveDot = () => (
  <InactiveDotContainer>
    <Dot />
  </InactiveDotContainer>
);

export function OnBoardingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSignIn = () => {
    navigation.navigate('AuthScreen');
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ContainerOnboarding>
        <ContainerLogo>
          <Logo width={100} height={100} />
        </ContainerLogo>
        <DarkOverlay />
        <Swiper
          dot={<InactiveDot />}
          activeDot={<ActiveDot />}
          testID="swiper-test">
          <ImageBackgroundStyled
            source={require('../../assets/bgimage1-onboarding.png')}>
            <DarkOverlay />
            <TextSwiper>
              Faça transações entre as principais criptomoedas de forma simples
              e segura com alguns cliques
            </TextSwiper>
          </ImageBackgroundStyled>

          <ImageBackgroundStyled
            source={require('../../assets/bgimage2-onboarding.png')}>
            <DarkOverlay />
            <TextSwiper>
              Descubra a liberdade financeira ao ter controle total sobre seus
              ativos digitais, sem restrições geográficas ou burocracias
            </TextSwiper>
          </ImageBackgroundStyled>

          <ImageBackgroundStyled
            source={require('../../assets/bgimage3-onboarding.png')}>
            <DarkOverlay />
            <TextSwiper>
              Explore um universo de possibilidades financeiras com as
              criptomoedas, abrindo portas para novas oportunidades
            </TextSwiper>
          </ImageBackgroundStyled>

          <ImageBackgroundStyled
            source={require('../../assets/bgimage4-onboarding.png')}>
            <DarkOverlay />
            <TextSwiper>
              Realize transações instantâneas, 24 horas por dia, 7 dias por
              semana, sem depender de horários bancários tradicionais
            </TextSwiper>
          </ImageBackgroundStyled>
        </Swiper>
        <ContainerButton>
          <TouchableOpacity onPress={handleSignIn}>
            <TextButton>Pular</TextButton>
          </TouchableOpacity>
        </ContainerButton>
      </ContainerOnboarding>
    </>
  );
}
