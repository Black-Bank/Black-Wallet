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

export const DescriptionWalletHeader = styled.Text`
  color: #fff;
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
export const OptionsContainerWalletHeader = styled.View`
  flex: 0.85;
  align-items: center;
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
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
  padding: 15px;
`;

export const FeatureCardContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #e6e6e6;
  padding: 15px;
  border-radius: 12px;
`;

export const CardName = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const FeaturesWrapper = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FeatureBlockLarge = styled.TouchableOpacity`
  height: 150px;
  width: 100%;
  border-radius: 16px;
  background-color: #e6e6e6;
  align-items: center;
  justify-content: center;
`;

export const FeatureBlockLargeText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const FeatureBlockSmall = styled.TouchableOpacity`
  height: 160px;
  width: 48%;
  border-radius: 16px;
  background-color: #e6e6e6;
  align-items: center;
  justify-content: center;
`;

export const FeatureBlockSmallText = styled.Text`
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const FeaturesWrappers = styled.View`
  padding: 15px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;
