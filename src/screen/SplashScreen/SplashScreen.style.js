import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerSplashScreen = styled(LinearGradient).attrs({
  colors: ['#000000', '#271d42'],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextStyled = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin-top: 15px;
`;
