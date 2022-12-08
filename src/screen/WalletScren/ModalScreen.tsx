import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {ADD_WALLET, WALLET_SCREEN} from '../../component/strings/pt-br';
import {ModalBody, ModalContainer, ModalFooter, ModalHeader} from './Modal';
import * as W from './styles';

export function ModalScreen({title}: {title: string}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [adress, setAdress] = useState('');

  const HandlerUp = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleDecline = () => {
    setAdress('');
    setIsModalVisible(() => !isModalVisible);
  };

  return (
    <>
      <TouchableOpacity onPress={HandlerUp}>
        <W.ModalContent>
          <W.Title>{title}</W.Title>
        </W.ModalContent>
      </TouchableOpacity>
      <W.ModalContainer>
        <W.SpaceView />
        <Modal isVisible={isModalVisible}>
          <ModalContainer>
            <LinearGradient
              colors={['#3c0f69', '#fff']}
              useAngle={true}
              angle={180}
              style={styles.LinearGradient}>
              <W.ModalBoxStyle>
                <ModalHeader title={title} />
                {title === 'Excluir' && (
                  <>
                    <ModalBody>
                      <W.Text>{WALLET_SCREEN.beShure}</W.Text>
                    </ModalBody>

                    <ModalFooter>
                      <W.ButtonBox>
                        <TouchableOpacity onPress={handleDecline}>
                          <W.DangerGeneralButtonStyles>
                            <W.ButtonTitle>{WALLET_SCREEN.goOut}</W.ButtonTitle>
                          </W.DangerGeneralButtonStyles>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Action')}>
                          <W.noClickrGeneralButtonStyles>
                            <W.ButtonTitle>{WALLET_SCREEN.Trash}</W.ButtonTitle>
                          </W.noClickrGeneralButtonStyles>
                        </TouchableOpacity>
                      </W.ButtonBox>
                    </ModalFooter>
                  </>
                )}
                {title === 'Enviar' && (
                  <>
                    <ModalBody>
                      <W.Text>{WALLET_SCREEN.lookAdress}</W.Text>
                      <TextInput
                        style={styles.input}
                        placeholder={WALLET_SCREEN.adressWallet}
                        keyboardType="ascii-capable"
                        value={adress}
                        onChangeText={text => setAdress(text)}
                      />
                    </ModalBody>

                    <ModalFooter>
                      <W.ButtonBox>
                        <TouchableOpacity onPress={handleDecline}>
                          <W.DangerGeneralButtonStyles>
                            <W.ButtonTitle>{ADD_WALLET.cancel}</W.ButtonTitle>
                          </W.DangerGeneralButtonStyles>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => console.log(adress, 'adress')}>
                          <W.noClickrGeneralButtonStyles>
                            <W.ButtonTitle>{WALLET_SCREEN.Send}</W.ButtonTitle>
                          </W.noClickrGeneralButtonStyles>
                        </TouchableOpacity>
                      </W.ButtonBox>
                    </ModalFooter>
                  </>
                )}
              </W.ModalBoxStyle>
            </LinearGradient>
          </ModalContainer>
        </Modal>
      </W.ModalContainer>
    </>
  );
}

const styles = StyleSheet.create({
  LinearGradient: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  input: {
    paddingTop: 10,
    borderColor: 'grey',
    borderBottomWidth: 2,
  },
});
