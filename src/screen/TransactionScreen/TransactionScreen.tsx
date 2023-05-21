/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ECoinType} from '../../component/types/interfaces';
import {AuthContext} from '../../contexts/auth';
import {
  ButtonContinueText,
  ContinueButton,
  ContinueButtonContainer,
  DisabledButton,
  DotItem,
  EmptyDotItem,
  ErrorMessage,
  FeeContainer,
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
  SucessMessage,
  TransactionContainer,
  TransactionItemContainer,
  TransactionItemExternalBox,
  TransactionItemExternalQuantity,
  TransactionItemExternalWalletAddress,
  TransactionQuantityItemContainer,
  TransactionTextItem,
  ValidationContainer,
  WalletTitle,
  WalletValue,
} from './Transaction.style';
import CreditBlackIcon from '../../assets/CreditBlackLogo.svg';
import BTCIcon from '../../assets/BitcoinLogo.svg';
import ETHIcon from '../../assets/ETHTransaction.svg';
import BankIcon from '../../assets/bank.svg';
import Clipboard from '@react-native-clipboard/clipboard';
import {useGetTransferInfo} from '../../component/hooks/useGetTransferInfo';
import {useGetCoinPrice} from '../../component/hooks/useGetCoinPrice';

export function TransactionScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [address, setAddress] = useState<string>('');
  const [addressError, setAddressError] = useState<boolean>(true);
  const [valueError, setValueError] = useState<boolean>(true);
  const [valueAmountError, setValueAmountError] = useState<boolean>(true);
  const {walletData, setTransactionData} = useContext(AuthContext);
  const {data} = useGetTransferInfo();
  const {coinPrice} = useGetCoinPrice(walletData.coin);
  const [selectedOption, setSelectedOption] = useState<string>(walletData.coin);
  const [selectedTaxOption, setSelectedTaxOption] = useState<string>('midle');
  const [value, setValue] = useState<string>('');
  const addressBTCRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
  const addressETHRegex = /^0x[0-9a-fA-F]{40}$/;
  const isBTCWallet = Boolean(walletData.coin === ECoinType.BTC);
  const isETHWallet = Boolean(walletData.coin === ECoinType.ETH);
  const dolarTotal = Number(
    (Number(walletData.balance) * coinPrice).toFixed(2),
  );
  const factor = isBTCWallet
    ? 100000000
    : isETHWallet
    ? 1000000000000000000
    : 1;
  const taxContract: Record<string, string> = {
    low: data?.getTransferInfo.LowFee,
    midle: data?.getTransferInfo.MediumFee,
    hight: data?.getTransferInfo.fatestFee,
  };
  const coinTax = Number(taxContract[selectedTaxOption]) / factor;
  const usdTax = Number(
    ((Number(taxContract[selectedTaxOption]) / factor) * coinPrice).toFixed(2),
  );

  const pasteAddress = async () => {
    const clipboardContent = await Clipboard.getString();
    setAddress(clipboardContent);
  };
  const pasteValue = async () => {
    setValue(
      selectedOption === walletData.coin
        ? String(walletData.balance - coinTax - 0.05 * coinTax)
        : String(
            (walletData.balance * coinPrice - usdTax - 0.05 * usdTax).toFixed(
              2,
            ),
          ),
    );
  };
  const handleWalletAdress = (addr: string) => {
    setAddress(addr);
    setAddressError(true);
    if (isBTCWallet) {
      setAddressError(!addressBTCRegex.test(address));
    } else if (isETHWallet) {
      setAddressError(!addressETHRegex.test(address));
    }
  };

  const handleValue = (val: string) => {
    setValue(val);
    setValueError(true);
    setValueAmountError(true);
    if (Number(value) > 0) {
      setValueError(false);
    }
    if (selectedOption === walletData.coin) {
      setValueAmountError(
        Boolean(Number(value) >= walletData.balance - coinTax),
      );
    } else if (selectedOption === ECoinType.USD) {
      setValueAmountError(Boolean(Number(value) >= dolarTotal - usdTax));
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
  const handleContinue = () => {
    setTransactionData({
      ...walletData,
      fee: Number(taxContract[selectedTaxOption]),
      value:
        selectedOption === walletData.coin
          ? Number(value)
          : Number(value) / coinPrice,
      addressTo: address,
      convertFactor: factor,
    });
    navigation.navigate('ConfirmTransactionScreen');
  };

  useEffect(() => {
    handleWalletAdress(address);
    handleValue(value);
  }, [address, value, selectedOption, selectedTaxOption]);

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
                {selectedOption === walletData.coin ? (
                  <WalletValue>
                    {walletData.balance} {walletData.coin}
                  </WalletValue>
                ) : (
                  <WalletValue>
                    {(walletData.balance * coinPrice).toFixed(2)} USD
                  </WalletValue>
                )}
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
              onChangeText={(text: string) => handleWalletAdress(text)}
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
              onChangeText={(payValue: string) => handleValue(payValue)}
              value={value}
            />
            <PastButton onPress={pasteValue}>
              <PastButtonText>Max</PastButtonText>
            </PastButton>
          </TransactionItemExternalQuantity>
          {selectedOption === walletData.coin ? (
            <SelectorText>
              USD {(Number(value) * coinPrice).toFixed(2)}
            </SelectorText>
          ) : (
            <SelectorText>
              {Number(value) / coinPrice} {walletData.coin}
            </SelectorText>
          )}

          <FeeContainer>
            {selectedOption === walletData.coin ? (
              <TransactionTextItem>
                Taxa: {coinTax} {walletData.coin}
              </TransactionTextItem>
            ) : (
              <TransactionTextItem>Taxa: {usdTax} USD</TransactionTextItem>
            )}

            <SelectorButton>
              {selectedTaxOption === 'hight' ? (
                <DotItem onPress={() => setSelectedTaxOption('hight')} />
              ) : (
                <EmptyDotItem onPress={() => setSelectedTaxOption('hight')} />
              )}
              <SelectorText>Alta</SelectorText>
              {selectedTaxOption === 'midle' ? (
                <DotItem onPress={() => setSelectedTaxOption('midle')} />
              ) : (
                <EmptyDotItem onPress={() => setSelectedTaxOption('midle')} />
              )}
              <SelectorText>Média</SelectorText>
              {selectedTaxOption === 'low' ? (
                <DotItem onPress={() => setSelectedTaxOption('low')} />
              ) : (
                <EmptyDotItem onPress={() => setSelectedTaxOption('low')} />
              )}
              <SelectorText>Baixa</SelectorText>
            </SelectorButton>
          </FeeContainer>
        </QuantityContainer>

        <ValidationContainer>
          {addressError ? (
            <ErrorMessage>O endereço da carteira é compatível</ErrorMessage>
          ) : (
            <SucessMessage>O endereço da carteira é compatível</SucessMessage>
          )}
          {valueError ? (
            <ErrorMessage>O valor deve ser maior que zero</ErrorMessage>
          ) : (
            <SucessMessage>O Valor deve ser maior que zero</SucessMessage>
          )}
          {valueAmountError ? (
            <ErrorMessage>
              O valor deve ser menor que o saldo mais a taxa
            </ErrorMessage>
          ) : (
            <SucessMessage>
              O valor deve ser menor que o saldo mais a taxa
            </SucessMessage>
          )}
          <ContinueButtonContainer>
            {
              <>
                {valueAmountError || valueError || addressError ? (
                  <DisabledButton>
                    <ButtonContinueText>Continuar</ButtonContinueText>
                  </DisabledButton>
                ) : (
                  <ContinueButton onPress={handleContinue}>
                    <ButtonContinueText>Continuar</ButtonContinueText>
                  </ContinueButton>
                )}
              </>
            }
          </ContinueButtonContainer>
        </ValidationContainer>
      </TransactionContainer>
    </>
  );
}
