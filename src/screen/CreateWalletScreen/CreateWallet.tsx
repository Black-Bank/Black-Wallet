import React, {useState, useContext} from 'react';
import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ButtonText,
  ContainerCreateWallet,
  CreateWalletButton,
  Error,
  InputContainer,
  InputStyled,
  Title,
  ViewDropDown,
} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import AuthStore from '../AuthScreen/AuthStore';
import {useMutation} from '@apollo/client';
import {CREAT_ETH_WALLET} from '../../component/client/queries/queries';
import {CREAT_BTC_WALLET} from '../../component/client/queries/queries';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthContext} from '../../contexts/auth';

interface RequestData {
  name: string;
  WalletType: 'BTC' | 'ETH' | '';
}

export function CreateWallet() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const cryptos = [
    {value: 'BTC', name: 'Bitcoin'},
    {value: 'ETH', name: 'Ethereum'},
  ];
  const email = AuthStore.getInstance().email;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {setIsUpdate, isUpdate} = useContext(AuthContext);
  const [createEthWallet] = useMutation(CREAT_ETH_WALLET);
  const [createBtcWallet] = useMutation(CREAT_BTC_WALLET);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const createWalletValidationSchema = yup.object().shape({
    name: yup.string().required('Insira um nome'),
    WalletType: yup.string().required('Especifique o tipo de carteira'),
  });

  const createWallet = async (values: RequestData) => {
    setIsLoading(true);
    try {
      if (values.WalletType === 'BTC') {
        await createBtcWallet({
          variables: {
            Email: email,
            name: values.name,
          },
        });
      } else {
        await createEthWallet({
          variables: {
            Email: email,
            name: values.name,
          },
        });
      }

      Toast.show({
        type: 'success',
        text1: 'Carteira criada com sucesso',
      });

      setTimeout(() => {
        navigation.navigate('Home');
        setIsUpdate(!isUpdate);
      }, 2000);
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Não foi possível criar a carteira',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ContainerCreateWallet>
        <Title>Criar carteira</Title>
        <Formik
          initialValues={{name: '', WalletType: ''}}
          validationSchema={createWalletValidationSchema}
          onSubmit={(values: RequestData) => createWallet(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <InputContainer>
                <InputStyled
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Nome"
                />
                {touched.name && errors.name && <Error>{errors.name}</Error>}
              </InputContainer>

              <InputContainer>
                <TouchableOpacity onPress={toggleDropdown}>
                  <View>
                    <InputStyled
                      editable={false}
                      placeholder="Selecione uma cryptomoeda"
                      value={values.WalletType}
                    />
                  </View>
                </TouchableOpacity>
                {touched.WalletType && errors.WalletType && (
                  <Error>{errors.WalletType}</Error>
                )}

                {showDropdown && (
                  <ViewDropDown>
                    {cryptos.map(crypto => (
                      <TouchableOpacity
                        key={crypto.name}
                        onPress={() => {
                          handleChange('WalletType')(crypto.value);
                          toggleDropdown();
                        }}>
                        <View>
                          <TextInput editable={false} value={crypto.name} />
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ViewDropDown>
                )}
              </InputContainer>

              <CreateWalletButton onPress={handleSubmit}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <ButtonText>Criar</ButtonText>
                )}
              </CreateWalletButton>
            </>
          )}
        </Formik>
      </ContainerCreateWallet>
    </>
  );
}
