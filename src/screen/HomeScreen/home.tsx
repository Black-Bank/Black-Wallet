/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar, ScrollView} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {useGetWallets} from '../../component/hooks/useGetWallets';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  Description,
  LoadingContainer,
  OptionButtonAll,
  OptionsButton,
  OptionsContainer,
  ContainerContentHome,
} from './Home.styles';
import ToReceiveIcon from '../../assets/toReceive.svg';
import TransactionIcon from '../../assets/transactions.svg';
import SendIcon from '../../assets/send.svg';
import AddIcon from '../../assets/add.svg';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {ViewBalanceInfo} from '../../component/cardBalanceInfo/CardBalanceInfo';
import {ViewButtons} from './ViewButtons';
import {Footer} from '../../component/footer/Footer';
import {CardInviteFriends} from './CardInviteFriends';
import {CardsBuyCryptos} from './CardsBuyCryptos';
import {WalletsOrTransactions} from './WalletsOrTransactions';
import {useGetBalance} from '../../component/hooks/useGetBalance';
import {useGetDollarPrice} from '../../component/hooks/useGetDollarPrice';
import {useGetExtract} from '../../component/hooks/useGetExtract';

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
  const {data: dataBalance, refetch: retry} = useGetBalance();
  const {data, loading, refetch} = useGetWallets();
  const {data: extract} = useGetExtract();
  const {dollarPrice} = useGetDollarPrice();

  const {isUpdate, setDataBalance, setWalletList, setDollarPrice, setExtract} =
    useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const refetchTime = 100;

  const [inTransactionalWallet, setInTransactionalWallet] = useState<any[]>(
    data?.getFormatedData.filter(
      (wallets: {unconfirmedBalance: number}) =>
        wallets.unconfirmedBalance !== 0,
    ),
  );

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
      setDataBalance(dataBalance);
      setWalletList(data);
      setDollarPrice(dollarPrice);
      setExtract(extract);
    }
  }, [data, dataBalance, extract, dollarPrice]);

  const menuItems: IMenuItem[] = [
    {
      icon: <SendIcon width={25} height={30} fill="#212121" />,
      name: 'Gerenciar',
      screen: 'WalletListScreen',
    },
    {
      icon: <ToReceiveIcon width={20} height={30} fill="#212121" />,
      name: 'Evolução',
      screen: 'EvoScreen',
      params: {data: dataBalance, refetch: retry},
    },
    {
      icon: <TransactionIcon width={20} height={30} fill="#212121" />,
      name: 'Futuros',
      screen: 'FutureScreen',
      params: inTransactionalWallet,
    },
    {
      icon: <AddIcon width={20} height={30} fill="#212121" />,
      name: 'Nova Carteira',
      screen: 'CreateWallet',
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
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {loading && !data ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#0a0909" />
        </LoadingContainer>
      ) : (
        <>
          <ScrollView>
            <ContainerContentHome>
              <ViewBalanceInfo>
                <ViewButtons />
              </ViewBalanceInfo>

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

              <WalletsOrTransactions isUpdated={isUpdate} />
            </ContainerContentHome>
          </ScrollView>
          <Footer name={'Home'} />
        </>
      )}
    </>
  );
}
