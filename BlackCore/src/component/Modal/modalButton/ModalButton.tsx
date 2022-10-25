import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ModalBody, ModalContainer, ModalFooter, ModalHeader} from '../Modal';

import Modal from 'react-native-modal';
import {ADD_WALLET, MODAL_ERROR} from '../../strings/pt-br';
import {Card} from '../../../screen/selectScreen/SelectScreen';
import {useMutation} from '@apollo/client';
import {CREAT_BTC_WALLET, CREAT_ETH_WALLET} from '../../client/queries/queries';
import config from '../../../../config';
import {AuthContext} from '../../../contexts/auth';
import {ButtonTitle, GeneralButtonStyles} from '../../styles/styles';
import LinearGradient from 'react-native-linear-gradient';

export function ModalButton({title}: {title: string}) {
  const [addETHWallet] = useMutation(CREAT_ETH_WALLET);
  const [addBTCWallet] = useMutation(CREAT_BTC_WALLET);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSelected, setIsSelected] = useState('BTC');
  const [name, setName] = useState('');
  const {isUpdate, setIsUpdate} = useContext(AuthContext);
  const [error, setError] = useState('');

  const HandlerUp = () => {
    setIsModalVisible(!isModalVisible);
  };

  const CheckError = useCallback(() => {
    const errorLength = 7;
    const caractersRegex = /[˜`!@#$'".,%ˆ&<>?/*()-+]+/g;
    if (name.length >= errorLength) {
      setError(MODAL_ERROR.errorLength);
    } else if (name.match(caractersRegex)) {
      setError('não use caracters especiais');
    } else {
      setError('');
    }
  }, [name]);
  useEffect(() => {
    CheckError();
  }, [CheckError, error, name]);

  const AddWallet = () => {
    if (isSelected === 'ETH') {
      addETHWallet({
        variables: {
          hashId: 'deg-hjags-123-212asdl',
          type: isSelected,
          name: name,
          key: config.KEY_SECRET_MONGODB,
        },
      });
    } else if (isSelected === 'BTC') {
      console.log('btc? ' + isSelected);
      addBTCWallet({
        variables: {
          hashId: 'deg-hjags-123-212asdl',
          type: isSelected,
          name: name,
          key: config.KEY_SECRET_MONGODB,
        },
      });
    }
    if (!error) {
      setIsModalVisible(() => !isModalVisible);
      setIsUpdate(!isUpdate);
    }
  };

  const handleDecline = () => {
    setIsModalVisible(() => !isModalVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.buttonModal} onPress={HandlerUp}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.separator} />
        <Modal isVisible={isModalVisible}>
          <ModalContainer>
            <LinearGradient
              colors={['#3c0f69', '#fff']}
              useAngle={true}
              angle={180}
              style={styles.LinearGradient}>
              <View style={styles.modal}>
                <ModalHeader title={ADD_WALLET.title} />
                <ModalBody>
                  <Text style={styles.text}>{ADD_WALLET.walletType}</Text>
                  <TouchableOpacity onPress={() => setIsSelected('ETH')}>
                    <Card
                      isClick={Boolean(isSelected === 'ETH')}
                      isSelected={isSelected}
                      text={'ETH'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setIsSelected('BTC')}>
                    <Card
                      isClick={Boolean(isSelected === 'BTC')}
                      isSelected={isSelected}
                      text={'BTC'}
                    />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.input}
                    placeholder={ADD_WALLET.name}
                    keyboardType="ascii-capable"
                    value={name}
                    onChangeText={text => setName(text)}
                  />
                </ModalBody>
                <Text style={styles.error}>{error}</Text>
                <ModalFooter>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={handleDecline}>
                      <GeneralButtonStyles>
                        <ButtonTitle>{ADD_WALLET.cancel}</ButtonTitle>
                      </GeneralButtonStyles>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={AddWallet}>
                      <GeneralButtonStyles>
                        <ButtonTitle>{ADD_WALLET.create}</ButtonTitle>
                      </GeneralButtonStyles>
                    </TouchableOpacity>
                  </View>
                </ModalFooter>
              </View>
            </LinearGradient>
          </ModalContainer>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonModal: {
    backgroundColor: '#121212',
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 25,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',

    height: 50,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LinearGradient: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    paddingTop: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#121212',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    paddingTop: 10,
    borderColor: 'grey',
    borderBottomWidth: 2,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  modal: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: '#ba3939',
    background: '#ffe0e0',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
});
