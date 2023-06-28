/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const ImageBackgroundStyled = styled.ImageBackground`
  flex: 1;
  width: 100%;
  align-items: center;
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
  position: absolute;
  top: 60px;
  z-index: 1;
`;

export const TextSwiper = styled.Text`
  color: #ffffff;

  font-size: ${props => (props.h <= 750 ? '30px' : '40px')};
  text-align: center;
  padding: 0 10px;
  padding-top: 180px;
  font-family: 'AvertaStd-Regular';
`;

export const ContainerButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 120px;
`;

export const ActiveDotContainer = styled.View`
  border: 2px solid #624aa7;
  padding: 8px;
  border-radius: 50px;
  margin-bottom: 140px;
`;

export const InactiveDotContainer = styled.View`
  border: 2px solid transparent;
  padding: 5px;
  border-radius: 50px;
  margin-bottom: 140px;
`;

export const Dot = styled.View`
  background-color: #ffffff;
  padding: 2px;
  border-radius: 50px;
`;
