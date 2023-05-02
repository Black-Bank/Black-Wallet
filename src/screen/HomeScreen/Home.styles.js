import styled from 'styled-components/native';

export const AccountBalanceContainer = styled.View`
  margin-left: 10px;
`;

export const BalanceText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  font-family: Helvetica;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: semi-bold;
  font-family: Helvetica;
  margin-top: 5px;
`;

export const AccountHomeOptions = styled.View`
  margin-top: 10px;
  background-color: red;
`;

export const AccountContainerSupport = styled.TouchableOpacity`
  height: 100px;
  margin-top: 50px;
  background-color: #f3ecec;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionsContainer = styled.View`
  background-color: #f3ecec;
  flex-direction: row;
`;
export const IconContainer = styled.View`
  height: 60px;
  justify-content: center;
`;

export const OptionsButton = styled.TouchableOpacity`
  background-color: rgba(153, 153, 153, 0.3);
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const OptionButtonAll = styled.View`
  height: 100px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: rgba(153, 153, 153, 0.5);
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const FeatureCard = styled.TouchableOpacity`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #e6e6e6;
  border-radius: 12px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const FeatureCardContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CardName = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const FeaturesWrapper = styled.View`
  padding: 15px;
  flex-direction: row;
`;

export const FeatureBlockLarge = styled.TouchableOpacity`
  height: 150px;
  width: 360px;
  border-radius: 16px;
`;

export const FeatureBlockLargeThumbnail = styled.Image`
  height: 150px;
  width: 360px;
  border-radius: 16px;
  position: absolute;
`;

export const FeatureBlockLargeText = styled.Text`
  height: 150px;
  margin-top: 110px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const FeatureBlockSmall = styled.TouchableOpacity`
  height: 160px;
  width: 170px;
  border-radius: 16px;
  margin-right: 20px;
`;

export const FeatureBlockSmallThumbnail = styled.Image`
  height: 160px;
  width: 170px;
  border-radius: 16px;
  position: absolute;
`;

export const FeatureBlockSmallText = styled.Text`
  height: 160px;
  margin-top: 110px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;
