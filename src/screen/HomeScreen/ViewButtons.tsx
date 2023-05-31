import React, {useState} from 'react';
import {
  ButtonFilterHome,
  ContainerButtonsFilter,
  TextButtonFilter,
} from './Home.styles';

export function ViewButtons() {
  const [button1Pressed, setButton1Pressed] = useState(true);
  const [button2Pressed, setButton2Pressed] = useState(false);
  const [button3Pressed, setButton3Pressed] = useState(false);

  function handleButton1Press() {
    setButton1Pressed(true);
    setButton2Pressed(false);
    setButton3Pressed(false);
  }

  function handleButton2Press() {
    setButton1Pressed(false);
    setButton2Pressed(true);
    setButton3Pressed(false);
  }

  function handleButton3Press() {
    setButton1Pressed(false);
    setButton2Pressed(false);
    setButton3Pressed(true);
  }

  return (
    <ContainerButtonsFilter>
      <ButtonFilterHome
        isPressed={button1Pressed}
        onPressIn={handleButton1Press}>
        <TextButtonFilter isPressed={button1Pressed}>
          Saldo Geral
        </TextButtonFilter>
      </ButtonFilterHome>
      <ButtonFilterHome
        isPressed={button2Pressed}
        onPressIn={handleButton2Press}>
        <TextButtonFilter isPressed={button2Pressed}>Enviadas</TextButtonFilter>
      </ButtonFilterHome>
      <ButtonFilterHome
        isPressed={button3Pressed}
        onPressIn={handleButton3Press}>
        <TextButtonFilter isPressed={button3Pressed}>
          Recebidas
        </TextButtonFilter>
      </ButtonFilterHome>
      {/* <TouchableOpacity
          style={[styles.button, button3Pressed && styles.buttonPressed]}
          onPressIn={handleButton3PressIn}
          onPressOut={handleButton3PressOut}>
          <Text>Recebidas</Text>
        </TouchableOpacity> */}
    </ContainerButtonsFilter>
  );
}
