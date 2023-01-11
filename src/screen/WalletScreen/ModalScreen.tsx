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
import {
  ADD_WALLET,
  MODAL_ERROR,
  WALLET_SCREEN,
} from '../../component/strings/pt-br';
import {AuthContext} from '../../contexts/auth';
import {ModalBody, ModalContainer, ModalFooter, ModalHeader} from './Modal';
import * as W from './styles';
import {isDeviceConnected} from '../../component/services/HardwareServices';

export function ModalScreen({
  title,
  address,
  coin,
  privateKey,
}: {
  title: string;
  address: string;
  coin: string;
  privateKey?: string;
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [walletAddress, setAdress] = useState('');
  const [deleteWallet] = useMutation(DELETE_WALLET);
  const [error, setError] = useState<string>();
  const [sendError, setSendError] = useState<string>(MODAL_ERROR.emptyError);
  const {isUpdate, setIsUpdate} = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const HandlerUp = () => {
    setIsModalVisible(!isModalVisible);
  };

  const MonitorError = async (text: string) => {
    setAdress(text);
    const isConnect = await isDeviceConnected();
    const caractersRegex = /[˜`!@#$'".,%ˆ&<>?/*()-+ ]+/g;

    if (!isConnect) {
      setSendError(MODAL_ERROR.noNetworkError);
    } else if (text.match(caractersRegex)) {
      setSendError(MODAL_ERROR.invalidCaractersError);
    } else if (walletAddress.length < 10 && walletAddress.length > 0) {
      setSendError(MODAL_ERROR.smallAdressError);
    } else {
      setSendError('');
    }
  };
  const GoTo = async () => {
    if (!sendError) {
      navigation.navigate('TransactionScreen', {
        walletAddressTo: walletAddress,
        walletAddressFrom: address,
        privateKey: privateKey,
        coin: coin,
      });
    }
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
                        testID={'addressWalletInput'}
                        placeholder={WALLET_SCREEN.adressWallet}
                        keyboardType="ascii-capable"
                        value={walletAddress}
                        onChangeText={text => MonitorError(text)}
                      />
                    </ModalBody>

                    <ModalFooter>
                      <W.ButtonBox>
                        <TouchableOpacity onPress={handleDecline}>
                          <W.DangerGeneralButtonStyles>
                            <W.ButtonTitle>{ADD_WALLET.cancel}</W.ButtonTitle>
                          </W.DangerGeneralButtonStyles>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={GoTo}>
                          <W.noClickrGeneralButtonStyles>
                            <W.ButtonTitle>{WALLET_SCREEN.next}</W.ButtonTitle>
                          </W.noClickrGeneralButtonStyles>
                        </TouchableOpacity>
                      </W.ButtonBox>
                    </ModalFooter>
                    <W.Text>{sendError}</W.Text>
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
