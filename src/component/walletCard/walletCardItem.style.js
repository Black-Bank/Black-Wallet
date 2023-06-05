import styled from 'styled-components/native';
import {LineChart} from 'react-native-chart-kit';

export const TouchableOpacityStyled = styled.TouchableOpacity`
  margin-bottom: 5px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
`;

export const ContainerHeaderCard = styled.View`
  flex-direction: row;
`;

export const ContainerWalletName = styled.View`
  margin-left: 10px;
`;

export const FooterCardWallet = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
`;

export const TitleCard = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;

export const SubtitleCard = styled.Text`
  font-weight: 300;
  font-size: 16px;
`;

export const GraphicContainer = styled.View`
  position: relative;
  left: -55px;
  margin-bottom: 35px;
`;

export const LineChartStyled = styled(LineChart)`
  position: absolute;
  padding-right: 10px;
`;
