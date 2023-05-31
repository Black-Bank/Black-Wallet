import styled from 'styled-components/native';

export const Description = styled.Text`
  color: #4f4f4f;
  font-size: 14px;
  font-weight: semi-bold;
  font-family: Helvetica;
  margin-top: 5px;
  text-align: center;
  padding: 4px 0;
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

export const OptionsContainerWalletHeader = styled.View`
  flex: 0.85;
  align-items: center;
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
`;
export const OptionsContainer = styled.View`
  background-color: white;
  flex-direction: row;
  height: 120px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
`;

export const OptionsButton = styled.TouchableOpacity`
  background-color: #f2f3f5;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const OptionButtonAll = styled.View`
  height: 90px;
  width: 75px;
  justify-content: space-between;
  align-items: center;
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
  padding: 30px 12px;
  width: 48%;
  border-radius: 16px;
  background-color: #e6e6e6;
  align-items: center;
  justify-content: center;
`;

export const FeatureBlockSmallText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const FeaturesWrappers = styled.View`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

export const ContainerContentHome = styled.View`
  background-color: #f2f3f5;
  padding: 15px 20px;
`;

export const ContentTop = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding-top: 20px;
  margin-bottom: 12px;
`;

export const ContainerLogoMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const ContainerTotalBalance = styled.View`
  padding: 15px 15px 0;
`;

export const TextGray1Bold = styled.Text`
  color: #828282;
  font-weight: bold;
  font-size: 14px;
`;

export const TextGray1Normal = styled.Text`
  color: #828282;
  font-weight: 400;
  font-size: 14px;
`;

export const ContainerValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`;

export const TextGray2Large = styled.Text`
  color: #414561;
  font-size: 48px;
`;

export const TextGray2Small = styled.Text`
  color: #414561;
  font-size: 14px;
  position: absolute;
  right: -30;
  top: 8;
`;

export const ViewSuport = styled.View`
  position: relative;
`;

export const ViewLastContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewPercentual = styled.View`
  flex-direction: row;
  padding-bottom: 15px;
`;

export const Textpercentage = styled.Text`
  color: ${props => (props.value >= 0 ? '#51ae6f' : 'red')};
  margin-left: 10px;
`;

export const ViewChildrenBalanceInfo = styled.View`
  background-color: #f9fafb;
  padding: 10px;
`;

export const ButtonFilterHome = styled.TouchableOpacity`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${props => (props.isPressed ? '#624AA7' : 'transparent')};
`;

export const ContainerButtonsFilter = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TextButtonFilter = styled.Text`
  color: ${props => (props.isPressed ? '#ffffff' : '#828282')};
  font-weight: ${props => (props.isPressed ? 600 : 300)};
`;
