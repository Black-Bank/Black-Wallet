/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {GetCoinPrice} from './GetCoinPrice';
import {ECoinType} from '../../component/types/interfaces';
import {AuthContext} from '../../contexts/auth';
import {
  ButtonContinueText,
  ContinueButton,
  ContinueButtonContainer,
  DotItem,
  EmptyDotItem,
  ErrorMessage,
  InputWalletAddress,
  InputWalletValue,
  InsideInternalBox,
  InternalItemBox,
  LogoContainer,
  LogoItem,
  PastButton,
  PastButtonText,
  QuantityContainer,
  SelectorButton,
  SelectorText,
  TransactionContainer,
  TransactionItemContainer,
  TransactionItemExternalBox,
  TransactionItemExternalQuantity,
  TransactionItemExternalWalletAddress,
  TransactionQuantityItemContainer,
  TransactionTextItem,
  WalletTitle,
  WalletValue,
} from './Transaction.style';
import CreditBlackIcon from '../../assets/CreditBlackLogo.svg';
import BTCIcon from '../../assets/BitcoinLogo.svg';
import ETHIcon from '../../assets/ETHTransaction.svg';
import BankIcon from '../../assets/bank.svg';
import Clipboard from '@react-native-clipboard/clipboard';

export function TransactionScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [coinPrice, setCoinPrice] = useState(0);
  const [address, setAddress] = useState<string>('');
  const {walletData} = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState<string>(walletData.coin);
  const [value, setValue] = useState<string>('');
  const addressBTCRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
  const addressETHRegex = /^0x[0-9a-fA-F]{40}$/;
  const isBTCWallet = Boolean(walletData.coin === ECoinType.BTC);
  const isETHWallet = Boolean(walletData.coin === ECoinType.ETH);
  useEffect(() => {
    const Set = async () => setCoinPrice(await GetCoinPrice(walletData.coin));
    Set();
  }, []);

  const pasteAddress = async () => {
    const clipboardContent = await Clipboard.getString();
    setAddress(clipboardContent);
  };
  const pasteValue = async () => {
    setValue(String(walletData.balance));
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <TransactionContainer>
        <LogoContainer>
          <CreditBlackIcon width={100} height={100} />
        </LogoContainer>
        <TransactionItemContainer>
          <TransactionTextItem>Enviar de:</TransactionTextItem>
          <TransactionItemExternalBox>
            <LogoItem>
              {isBTCWallet ? (
                <BTCIcon width={50} height={50} />
              ) : (
                <ETHIcon width={60} height={60} />
              )}
            </LogoItem>
            <InternalItemBox>
              <InsideInternalBox>
                <WalletTitle>{walletData.name}</WalletTitle>
                <WalletValue>
                  {walletData.balance} {walletData.coin}
                </WalletValue>
              </InsideInternalBox>

              <BankIcon width={20} height={20} />
            </InternalItemBox>
          </TransactionItemExternalBox>
        </TransactionItemContainer>
        <TransactionItemContainer>
          <TransactionTextItem>Enviar para:</TransactionTextItem>
          <TransactionItemExternalWalletAddress>
            <InputWalletAddress
              placeholder="Endereço da carteira"
              onChangeText={(text: string) => setAddress(text)}
              value={address}
            />
            <PastButton onPress={pasteAddress}>
              <PastButtonText>colar</PastButtonText>
            </PastButton>
          </TransactionItemExternalWalletAddress>
        </TransactionItemContainer>
        <QuantityContainer>
          <TransactionQuantityItemContainer>
            <TransactionTextItem>Quantidade</TransactionTextItem>

            <SelectorButton>
              {selectedOption === walletData.coin ? (
                <DotItem onPress={() => handleOptionSelect(walletData.coin)} />
              ) : (
                <EmptyDotItem
                  onPress={() => handleOptionSelect(walletData.coin)}
                />
              )}
              <SelectorText>{walletData.coin}</SelectorText>
              {selectedOption === ECoinType.USD ? (
                <DotItem onPress={() => handleOptionSelect(ECoinType.USD)} />
              ) : (
                <EmptyDotItem
                  onPress={() => handleOptionSelect(ECoinType.USD)}
                />
              )}
              <SelectorText>USD</SelectorText>
            </SelectorButton>
          </TransactionQuantityItemContainer>

          <TransactionItemExternalQuantity>
            <InputWalletValue
              placeholder="Valor"
              onChangeText={(payValue: string) => setValue(payValue)}
              value={value}
            />
            <PastButton onPress={pasteValue}>
              <PastButtonText>Max</PastButtonText>
            </PastButton>
          </TransactionItemExternalQuantity>
          <SelectorText>USD 50,00</SelectorText>
        </QuantityContainer>
        <ContinueButtonContainer>
          <ContinueButton>
            <ButtonContinueText>Continuar</ButtonContinueText>
          </ContinueButton>
        </ContinueButtonContainer>
      </TransactionContainer>
    </>
  );
}
