/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
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
  FeatureBlockLargeText,
  FeatureBlockSmall,
  FeatureBlockSmallText,
  FeaturesWrappers,
} from './Home.styles';
import BankIcon from '../../assets/bank.svg';
import TransferIcon from '../../assets/transfer.svg';
import WalletIcon from '../../assets/wallet.svg';
import PlusIcon from '../../assets/plus.svg';
import CaretRightIcon from '../../assets/caret-right.svg';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import BTCIcon from '../../assets/bitcoin.svg';
import ETHIcon from '../../assets/ethereum.svg';
import FriendIcon from '../../assets/friend.svg';
import InfoIcon from '../../assets/info.svg';
import {handleWhatsAppPress} from '../../component/services/wppServices';

interface IMenuItem {
  icon: any;
  name: string;
  screen: string;
  params?: any;
}

interface IRenderMenuCarouselProps {
  icon: any;
  name: string;
  index: number;
  screen: string;
  params?: any;
}

export function Home() {
  const {isUpdate} = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const refetchTime = 100;
  const {data, loading, refetch} = useGetWallets();

  const [inTransactionalWallet, setInTransactionalWallet] = useState<any[]>(
    data?.getFormatedData.filter(
      (wallets: {unconfirmedBalance: number}) =>
        wallets.unconfirmedBalance !== 0,
    ),
  );

  const totalBalance = data?.getFormatedData.length
    ? data?.getFormatedData[0].totalBalance
    : 0;

  const walletsNavigate = async () => {
    navigation.navigate('WalletListScreen');
  };

  useEffect(() => {
    setTimeout(refetch, refetchTime);
  }, [refetch, isUpdate]);

  useEffect(() => {
    if (data) {
      setInTransactionalWallet(
        data?.getFormatedData.filter(
          (wallets: {unconfirmedBalance: number}) =>
            wallets.unconfirmedBalance !== 0,
        ),
      );
    }
  }, [data]);
  setTimeout(
    useUpdateChart(totalBalance, Boolean(data)),
    data ? 15000 : refetchTime,
  );

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
      icon: <TransferIcon width={30} height={40} fill="#212121" />,
      name: 'Futuros',
      screen: 'FutureScreen',
      params: inTransactionalWallet,
    },
    {
      icon: <TransferIcon width={30} height={40} fill="#212121" />,
      name: 'Transferir',
      screen: 'WalletListScreen',
    },
  ];

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
            if (screen === 'CreateWallet') {
              data?.getFormatedData.length < 6 || data === null
                ? navigation.navigate(
                    screen,
                    params ? {paramScreens: params} : {},
                  )
                : Toast.show({
                    type: 'error',
                    text1: 'Máximo 6 carteiras, exclua alguma existente.',
                  });
            } else {
              navigation.navigate(screen, params ? params : {});
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
      {loading && !data ? (
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
                <BalanceText>
                  {totalBalance?.toFixed(2) || '0.00'} USD
                </BalanceText>
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
                  key={index}
                  screen={item.screen}
                  params={item.params}
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
                <FriendIcon width={64} height={64} fill={'black'} />

                <FeatureBlockLargeText>
                  Convide seus amigos!
                </FeatureBlockLargeText>
              </FeatureBlockLarge>
            </FeaturesWrapper>

            <FeaturesWrappers>
              <FeatureBlockSmall
                onPress={() => handleWhatsAppPress('5521977040408')}>
                <BTCIcon width={64} height={64} fill={'black'} />
                <FeatureBlockSmallText>Compre bitcoin</FeatureBlockSmallText>
              </FeatureBlockSmall>

              <FeatureBlockSmall
                onPress={() => handleWhatsAppPress('5521977040408')}>
                <ETHIcon width={64} height={64} fill={'black'} />

                <FeatureBlockSmallText>Compre ethereum</FeatureBlockSmallText>
              </FeatureBlockSmall>
            </FeaturesWrappers>

            <FeaturesWrapper>
              <FeatureBlockLarge
                onPress={() => handleWhatsAppPress('5521983206963')}>
                <InfoIcon width={64} height={64} fill={'black'} />

                <FeatureBlockLargeText>Precisa de ajuda?</FeatureBlockLargeText>
              </FeatureBlockLarge>
            </FeaturesWrapper>
          </>
        </ScrollView>
      )}
    </>
  );
}
