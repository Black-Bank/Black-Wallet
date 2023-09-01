import React from 'react';
import {
  Container,
  Description,
  OptionButtonAll,
  OptionsButton,
  OptionsContainer,
} from './PrincipalScreen.styles';
import {ViewDollarBalance} from '../../component/DollarBalanceInfo/DollarBalanceInfo';
import {ScrollView} from 'react-native';
import {IRenderMenuCarouselProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {menuItems} from './Items';
import {useGetContractBalance} from '../../component/hooks/useGetContractBalance';
import {CardInviteFriends} from '../HomeScreen/CardInviteFriends';
import {CardsBuyCryptos} from '../HomeScreen/CardsBuyCryptos';

export const PrincipalScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const {data: dataBalance} = useGetContractBalance('PRINCIPAL');
  const RenderMenuCarousel: React.FC<IRenderMenuCarouselProps> = ({
    icon,
    name,
    index,
    screen,
    params,
  }) => {
    return (
      <OptionButtonAll key={index}>
        <OptionsButton
          onPress={() => {
            navigation.navigate(screen, params ? params : {});
          }}>
          {icon}
        </OptionsButton>
        <Description>{name}</Description>
      </OptionButtonAll>
    );
  };

  const DollarBalance: number = dataBalance?.getContractBalance.value;
  return (
    <>
      <ScrollView>
        <Container>
          <ViewDollarBalance dollarBalance={DollarBalance} />
          <OptionsContainer>
            {menuItems.map((item, index) => (
              <RenderMenuCarousel
                icon={item.icon}
                name={item.name}
                index={index}
                key={index}
                screen={item.screen}
                params={item.params}
              />
            ))}
          </OptionsContainer>

          <CardInviteFriends />
          <CardsBuyCryptos />
        </Container>
      </ScrollView>
    </>
  );
};
