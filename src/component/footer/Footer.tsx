import React, {useContext} from 'react';
import {ButtonMenu, Container} from './Footer.style';
import HomeIcon from '../../assets/home.svg';
import TransactionIcon from '../../assets/transactionsFooter.svg';
import UserIcon from '../../assets/user.svg';
import WalletIcon from '../../assets/walletFooter.svg';
import {useRoute, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthContext} from '../../contexts/auth';

interface IFooterItems {
  icon: any;
  screen: string;
  params?: any;
}

export const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {dataBalance, dollarPrice, extract, walletList} =
    useContext(AuthContext);
  const footerItems = [
    {
      icon: (
        <HomeIcon
          width={25}
          height={30}
          stroke={route.name === 'Home' ? '#624AA7' : '#BDBDBD'}
        />
      ),
      screen: 'Home',
    },
    {
      icon: (
        <WalletIcon
          width={26}
          height={30}
          fill={route.name === 'WalletListScreen' ? '#624AA7' : '#BDBDBD'}
        />
      ),
      screen: 'WalletListScreen',
      params: {dataBalance, dollarPrice, extract, data: walletList},
    },
    {
      icon: (
        <TransactionIcon
          width={25}
          height={30}
          fill={route.name === 'TransactionsScreen' ? '#624AA7' : '#BDBDBD'}
        />
      ),
      screen: 'TransactionsScreen',
    },
    {
      icon: (
        <UserIcon
          width={25}
          height={30}
          stroke={route.name === 'UserScreen' ? '#624AA7' : '#BDBDBD'}
        />
      ),
      screen: 'UserScreen',
    },
  ];

  const FooterMenu: React.FC<IFooterItems> = ({icon, screen, params}) => {
    return (
      <ButtonMenu
        onPress={() => {
          navigation.navigate(screen, params ? params : {});
        }}>
        {icon}
      </ButtonMenu>
    );
  };

  return (
    <Container>
      {footerItems.map((item, index) => (
        <FooterMenu icon={item.icon} screen={item.screen} key={index} />
      ))}
    </Container>
  );
};
