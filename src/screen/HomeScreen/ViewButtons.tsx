import React, {useContext} from 'react';
import {
  ButtonFilterHome,
  ContainerButtonsFilter,
  TextButtonFilter,
} from './ViewButton.styles';
import {ECoinType} from '../../component/types/interfaces';
import {AuthContext} from '../../contexts/auth';

export function ViewButtons() {
  const {balanceSelected, setBalanceSelected} = useContext(AuthContext);
  function handleButtonPress(type: string) {
    setBalanceSelected(type);
  }
  console.log(balanceSelected);
  const isGeneralPressed = Boolean(balanceSelected === 'geral');
  const isBTCPressed = Boolean(balanceSelected === ECoinType.BTC);
  const isETHPressed = Boolean(balanceSelected === ECoinType.ETH);

  return (
    <ContainerButtonsFilter>
      <ButtonFilterHome
        isPressed={isGeneralPressed}
        onPressIn={() => handleButtonPress('geral')}>
        <TextButtonFilter isPressed={isGeneralPressed}>
          Saldo Geral
        </TextButtonFilter>
      </ButtonFilterHome>
      <ButtonFilterHome
        isPressed={isBTCPressed}
        onPressIn={() => handleButtonPress('BTC')}>
        <TextButtonFilter isPressed={isBTCPressed}>Bitcoin</TextButtonFilter>
      </ButtonFilterHome>
      <ButtonFilterHome
        isPressed={isETHPressed}
        onPressIn={() => handleButtonPress('ETH')}>
        <TextButtonFilter isPressed={isETHPressed}>Ethereum</TextButtonFilter>
      </ButtonFilterHome>
    </ContainerButtonsFilter>
  );
}
