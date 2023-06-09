import React, {useContext} from 'react';
import {ButtonMenu, Container} from './Footer.style';
import HomeIcon from '../../assets/home.svg';
import TransactionIcon from '../../assets/transactionsFooter.svg';
import WalletIcon from '../../assets/walletFooter.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthContext} from '../../contexts/auth';

interface IFooterItems {
  icon: any;
  screen: string;
  params?: any;
}
interface IRoute {
  name: string;
}

export const Footer = ({name}: IRoute) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {dataBalance, dollarPrice, extract, walletList} =
    useContext(AuthContext);
  const footerItems = [
    {
      icon: (
        <HomeIcon
          width={25}
          height={30}
          stroke={name === 'Home' ? '#624AA7' : '#BDBDBD'}
        />
      ),
      screen: 'Home',
    },
    {
      icon: (
        <WalletIcon
          width={26}
          height={30}
          fill={name === 'WalletListScreen' ? '#624AA7' : '#BDBDBD'}
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
          fill={name === 'TransactionsScreen' ? '#624AA7' : '#BDBDBD'}
        />
      ),
      screen: 'FutureScreen',
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
