/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const ContainerOnboarding = styled.View`
  position: relative;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageBackgroundStyled = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const DarkOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 60px;
`;

export const TextSwiper = styled.Text`
  color: #ffffff;
  font-size: ${props => (props.h <= 750 ? '30px' : '40px')};
  text-align: center;
  padding: 0 10px;
  font-family: 'AvertaStd-Regular';
`;

export const ContainerButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 90px;

`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
`;

export const ActiveDotContainer = styled.View`
  border: 2px solid #624aa7;
  padding: 8px;
  border-radius: 50px;
  margin-bottom: 100px;
`;

export const InactiveDotContainer = styled.View`
  border: 2px solid transparent;
  padding: 5px;
  border-radius: 50px;
  margin-bottom: 100px;
`;

export const Dot = styled.View`
  background-color: #ffffff;
  padding: 2px;
  border-radius: 50px;
`;
