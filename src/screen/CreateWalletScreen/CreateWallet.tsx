import * as React from 'react';
import {useState} from 'react'
import {ActivityIndicator} from 'react-native';
import { ButtonText, ContainerCreateWallet, CreateWalletButton, Error, InputContainer, InputStyled, Title } from "./style";
import { Formik, FormikProps } from 'formik';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import * as yup from 'yup';

interface ItemTypeWithKey<T> extends ItemType<T> {
  key: string;
}

interface FormValues {
  name: string;
  cryptocurrency: string;
}

export function CreateWallet () {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
    const [valueSelect, setValueSelect] = useState<string | null>(null);
    const [itemsSelect, setItemsSelect] = useState<ItemTypeWithKey<string>[]>([
      { label: 'Bitcoin', value: 'bitcoin', key: 'btc' },
      { label: 'Ethereum', value: 'ethereum', key: 'eth' },
    ]);

    const createWalletValidationSchema = yup.object().shape({
        name: yup.string().required(),
        cryptocurrency: yup.string().required(),
    });

    // const handleCreateWallet = async ({name, cryptocurrency}: CreateWalletType) => {
    //     console.log("*******", name, "***", cryptocurrency)
    // };

    // const options: ItemTypeWithKey<string>[] = [
    //   { label: 'Bitcoin', value: 'bitcoin', key: 'btc' },
    //   { label: 'Ethereum', value: 'ethereum', key: 'eth' },
    // ];

    return (
        <>
          <ContainerCreateWallet>
            <Title>Criar carteira</Title>
            <Formik <FormValues>
                initialValues={{ name: '', cryptocurrency: 'ete'}}
                validationSchema={createWalletValidationSchema}
                onSubmit={(values) => {
                  console.log(values)
                  console.log(valueSelect)
                }}
            >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
            }: FormikProps<FormValues>) => (
            <>
              <InputContainer>
                <InputStyled
                  placeholder="Nome"
                  placeholderTextColor="#ccc"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {touched.name && errors.name && <Error>{errors.name}</Error>}
              </InputContainer>

              <InputContainer>
                <DropDownPicker
                  placeholder='Selecione um item'
                  open={isOpenSelect}
                  value={valueSelect}
                  items={itemsSelect}
                  setOpen={setIsOpenSelect}
                  setValue={setValueSelect}
                  setItems={setItemsSelect}
                  // items={itemsSelect.map((item) => ({
                  //   label: item.label,
                  //   value: item.value,
                  // }))}
                  // onChangeItem={(item: ItemTypeWithKey<string> | undefined) =>
                  //   item && item.value && handleChange('cryptocurrency')(item.value)
                  // }
                  {...(DropDownPicker as any).props}
                  keyExtractor={(item: ItemTypeWithKey<string>) => item.key}
                />
                {touched.cryptocurrency && errors.cryptocurrency && <Error>{errors.cryptocurrency}</Error>}
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