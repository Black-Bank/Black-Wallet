import React, {useContext, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ModalBody, ModalContainer, ModalFooter, ModalHeader} from '../Modal';

import Modal from 'react-native-modal';
import {ADD_WALLET} from '../../strings/pt-br';
import {Card} from '../../../screen/selectScreen/SelectScreen';
import {useMutation} from '@apollo/client';
import {CREAT_ETH_WALLET} from '../../client/queries/queries';
import config from '../../../../config';
import {AuthContext} from '../../../contexts/auth';

export function ModalButton({title}: {title: string}) {
  const [addWallet, {data, loading, error}] = useMutation(CREAT_ETH_WALLET);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSelected, setIsSelected] = useState('BTC');
  const [name, setName] = useState('');
  const {isUpdate, setIsUpdate} = useContext(AuthContext);

  const HandlerUp = () => {
    setIsModalVisible(!isModalVisible);
  };
  const AddWallet = () => {
    addWallet({
      variables: {
        hashId: 'deg-hjags-123-212asdl',
        type: isSelected,
        name: name,
        key: config.KEY_SECRET_MONGODB,
      },
    });
    setIsModalVisible(() => !isModalVisible);
    setIsUpdate(!isUpdate);
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
              <ModalFooter>
                <View style={styles.button}>
                  <Button title={ADD_WALLET.cancel} onPress={handleDecline} />
                  <Button title={ADD_WALLET.create} onPress={AddWallet} />
                </View>
              </ModalFooter>
            </View>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
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
});