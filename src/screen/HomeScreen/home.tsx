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
// import {handleWhatsAppPress} from '../../component/services/wppServices';
import {ViewBanceInfo} from '../../component/cardBalanceInfo/CardBalanceInfo';
import {ViewButtons} from './ViewButtons';
import {Footer} from '../../component/footer/Footer';
import {CardInviteFriends} from './CardInviteFriends';
import {CardsBuyCryptos} from './CardsBuyCryptos';

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

  // const totalBalance = data?.getFormatedData.length
  //   ? data?.getFormatedData[0].totalBalance
  //   : 0;

  // const walletsNavigate = async () => {
  //   navigation.navigate('WalletListScreen');
  // };

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

  const menuItems: IMenuItem[] = [
    {
      icon: <SendIcon width={25} height={30} fill="#212121" />,
      name: 'Enviar',
      screen: 'WalletListScreen',
    },
    {
      icon: <ToReceiveIcon width={20} height={30} fill="#212121" />,
      name: 'Receber',
      screen: 'EvoScreen',
    },
    {
      icon: <TransactionIcon width={20} height={30} fill="#212121" />,
      name: 'Transações',
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
              <ViewBanceInfo>
                <ViewButtons />
              </ViewBanceInfo>

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
            </ContainerContentHome>
          </ScrollView>
          <Footer />
        </>
      )}
    </>
  );
}
