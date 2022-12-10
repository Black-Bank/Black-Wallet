import {useMutation} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import config from '../../../config';
import {DELETE_WALLET} from '../../component/client/queries/queries';
import {ADD_WALLET, WALLET_SCREEN} from '../../component/strings/pt-br';
import {AuthContext} from '../../contexts/auth';
import {ModalBody, ModalContainer, ModalFooter, ModalHeader} from './Modal';
import * as W from './styles';

export function ModalScreen({
  title,
  address,
}: {
  title: string;
  address: string;
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [walletAddress, setAdress] = useState('');
  const [deleteWallet] = useMutation(DELETE_WALLET);
  const [error, setError] = useState<string>();
  const {isUpdate, setIsUpdate} = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const HandlerUp = () => {
    setIsModalVisible(!isModalVisible);
  };

  const IsDeletedWallet = () => {
    deleteWallet({
      variables: {
        hashId: 'deg-hjags-123-212asdl',
        key: config.KEY_SECRET_MONGODB,
        address: address,
      },
    })
      .then(() => setIsUpdate(!isUpdate))
      .catch(err => setError(err.message));
    if (!error) {
      navigation.navigate('Home');
    }
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
                        <TouchableOpacity onPress={IsDeletedWallet}>
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
                        value={walletAddress}
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
                          onPress={() =>
                            console.log(walletAddress, 'send adress')
                          }>
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
