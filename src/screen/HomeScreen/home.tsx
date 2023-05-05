import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, StatusBar, ScrollView} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {useGetWallets} from '../../component/hooks/useGetWallets';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useUpdateChart} from '../../component/hooks/useUpdateChart';
import {
  AccountBalanceContainer,
  AccountContainerSupport,
  BalanceText,
  Description,
  IconContainer,
  LoadingContainer,
  OptionButtonAll,
  OptionsButton,
  OptionsContainer,
  Divider,
  FeatureCard,
  FeatureCardContent,
  CardName,
  FeatureBlockLarge,
  FeaturesWrapper,
  FeatureBlockLargeThumbnail,
  FeatureBlockLargeText,
  FeatureBlockSmall,
  FeatureBlockSmallThumbnail,
  FeatureBlockSmallText,
} from './Home.styles';
import BankIcon from '../../assets/bank.svg';
import TransferIcon from '../../assets/transfer.svg';
import WalletIcon from '../../assets/wallet.svg';
import PlusIcon from '../../assets/plus.svg';
import TrashIcon from '../../assets/trash.svg';
import CaretRightIcon from '../../assets/caret-right.svg';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

interface IMenuItem {
  icon: any;
  name: string;
  screen: string;
}

interface IRenderMenuCarouselProps {
  icon: any;
  name: string;
  index: number;
  screen: string;
}

export function Home() {
  const {isUpdate} = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const refetchTime = 10;
  const {data, loading, refetch} = useGetWallets();
  const totalBalance = data?.getFormatedData[0].totalBalance;

  useUpdateChart(totalBalance);

  const walletsNavigate = () => {
    navigation.navigate('WalletListScreen');
  };

  useEffect(() => {
    setTimeout(refetch, refetchTime);
  }, [refetch, isUpdate]);

  const menuItems: IMenuItem[] = [
    {
      icon: <BankIcon width={20} height={30} fill="#212121" />,
      name: 'Evolução',
      screen: 'EvoScreen',
    },
    {
      icon: <PlusIcon width={20} height={30} fill="#212121" />,
      name: 'Adicionar',
      screen: 'CreateWallet',
    },
    {
      icon: <TrashIcon width={20} height={30} fill="#212121" />,
      name: 'Futuros',
      screen: 'FutureScreen',
    },
    {
      icon: <TransferIcon width={30} height={40} fill="#212121" />,
      name: 'Transferir',
      screen: 'EvoScreen',
    },
  ];

  const RenderMenuCarousel: React.FC<IRenderMenuCarouselProps> = ({
    icon,
    name,
    index,
    screen,
  }) => {
    return (
      <OptionButtonAll key={index}>
        <OptionsButton
          onPress={() => {
            if (screen === 'CreateWallet') {
              data.getFormatedData.length < 6
                ? navigation.navigate(screen)
                : Toast.show({
                    type: 'error',
                    text1: 'Máximo 6 carteiras, exclua alguma existente.',
                  });
            } else {
              navigation.navigate(screen);
            }
          }}>
          {icon}
        </OptionsButton>
        <Description>{name}</Description>
      </OptionButtonAll>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#35224b" barStyle="dark-content" />
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#0a0909" />
        </LoadingContainer>
      ) : (
        <ScrollView>
          <>
            <AccountContainerSupport
              onPress={() => navigation.navigate('EvoScreen')}>
              <AccountBalanceContainer>
                <BalanceText>Conta</BalanceText>
                <BalanceText>US$ {totalBalance?.toFixed(2)}</BalanceText>
              </AccountBalanceContainer>
              <IconContainer>
                <CaretRightIcon width={20} height={20} fill="#202020" />
              </IconContainer>
            </AccountContainerSupport>

            <OptionsContainer>
              {menuItems.map((item, index) => (
                <RenderMenuCarousel
                  icon={item.icon}
                  name={item.name}
                  index={index}
                  screen={item.screen}
                />
              ))}
            </OptionsContainer>

            <Divider />

            <FeatureCard onPress={walletsNavigate}>
              <FeatureCardContent>
                <WalletIcon height={30} width={30} fill={'#272727'} />

                <CardName>Carteiras</CardName>
              </FeatureCardContent>
            </FeatureCard>

            <FeaturesWrapper>
              <FeatureBlockLarge>
                <FeatureBlockLargeThumbnail
                  source={require('../../assets/horizon.jpg')}
                />

                <FeatureBlockLargeText>
                  Convide seus amigos!
                </FeatureBlockLargeText>
              </FeatureBlockLarge>
            </FeaturesWrapper>

            <FeaturesWrapper>
              <FeatureBlockSmall>
                <FeatureBlockSmallThumbnail
                  source={require('../../assets/buy-bitcoin.jpg')}
                />

                <FeatureBlockSmallText>Compre bitcoin</FeatureBlockSmallText>
              </FeatureBlockSmall>

              <FeatureBlockSmall>
                <FeatureBlockSmallThumbnail
                  source={require('../../assets/ETHLogo.png')}
                />

                <FeatureBlockSmallText>Compre ethereum</FeatureBlockSmallText>
              </FeatureBlockSmall>
            </FeaturesWrapper>

            <FeaturesWrapper>
              <FeatureBlockLarge>
                <FeatureBlockLargeThumbnail
                  source={require('../../assets/help.jpg')}
                />

                <FeatureBlockLargeText>Precisa de ajuda?</FeatureBlockLargeText>
              </FeatureBlockLarge>
            </FeaturesWrapper>
          </>
        </ScrollView>
      )}
    </>
  );
}
