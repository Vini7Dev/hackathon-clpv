import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import {
  Container,
  Content,
  TitleView,
  AlertView,
  AlertText,
  Form,
  InputGroupTitle,
  InputMargin,
  ButtonMargin,
  PrimaryColorText,
} from './styles';

import ModalView from '../../components/ModalView';
import AppLogo from '../../components/AppLogo';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import FooterButton from '../../components/FooterButton';
import theme from '../../global/styles/theme';

const {
  alert_light,
} = theme.colors;

const CreateAccount: React.FC = () => {
  const navigation = useNavigation();

  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [termsConfirmation, setTermsConfirmation] = useState(false);

  const goBackToLoginScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleCloseModal = useCallback(() => {
    setModalIsVisible(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModalIsVisible(true);
  }, []);

  const handleSubmitForm = useCallback(async () => {
    try {
      const shape = Yup.object().shape({
        name: Yup.string().required('Informe o nome!'),
        cpf: Yup.string().required('Informe o CPF!'),
        whatsapp: Yup.string().required('Informe o Whatsapp!'),
        email: Yup.string().required('Informe o email!').email('Informe um email válido!'),
        password: Yup.string().required('Informe a senha!'),
        confirmationPassword: Yup.string().oneOf(
          [Yup.ref('password')], 'A confirmação deve ser igual a senha.',
        ),
        termsConfirmation: Yup.boolean().isTrue('Você precisa concordar com os termos!'),
      });

      await shape.validate({
        name,
        cpf,
        whatsapp,
        email,
        password,
        confirmationPassword,
        termsConfirmation,
      });

      navigation.reset({
        routes: [{ name: 'Login' }],
        index: 0,
      });
    } catch (error) {
      Alert.alert(error.errors[0]);
    }
  }, [name, cpf, whatsapp, email, password, confirmationPassword, termsConfirmation, navigation]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardIsOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardIsOpen(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView>
      <Container>
        <Content>
          <AppLogo />

          <TitleView>
            <Title>Cadastro</Title>

            <AlertView>
              <Icon name="alert-triangle" size={24} color={alert_light} />
              <AlertText>
                Somente pessoas autorizadas
                {'\n'}
                vão ter acesso aos seus dados!
              </AlertText>
            </AlertView>
          </TitleView>

          <Form>
            <InputGroupTitle>Dados do cidadão</InputGroupTitle>

            <InputMargin>
              <Input
                iconName="type"
                placeholder="Informe seu nome completo"
                onChangeText={setName}
              />
            </InputMargin>

            <InputMargin>
              <Input
                iconName="user"
                placeholder="Informe seu CPF"
                keyboardType="numeric"
                onChangeText={setCpf}
              />
            </InputMargin>

            <InputMargin>
              <Input
                iconName="phone"
                placeholder="Informe seu Whatsapp"
                keyboardType="numeric"
                onChangeText={setWhatsapp}
              />
            </InputMargin>

            <InputGroupTitle>Dados da conta</InputGroupTitle>

            <InputMargin>
              <Input
                iconName="at-sign"
                placeholder="Informe seu email"
                keyboardType="email-address"
                onChangeText={setEmail}
              />
            </InputMargin>

            <InputMargin>
              <Input
                iconName="lock"
                placeholder="Informe sua senha"
                onChangeText={setPassword}
                secureTextEntry
              />
            </InputMargin>

            <InputMargin>
              <Input
                iconName="lock"
                placeholder="Confirme sua senha"
                onChangeText={setConfirmationPassword}
                secureTextEntry
              />
            </InputMargin>

            <InputMargin>
              <Checkbox
                isChecked={termsConfirmation}
                toggleIsChecked={() => setTermsConfirmation(!termsConfirmation)}
                onPressInLabel={handleOpenModal}
              >
                Eu li e concordo com os
                {' '}
                <PrimaryColorText>Termos de Uso</PrimaryColorText>
                {'\n'}
                e as
                {' '}
                <PrimaryColorText>Políticas de Privacidade</PrimaryColorText>
              </Checkbox>
            </InputMargin>

            <ButtonMargin>
              <Button text="Cadastrar-se" onPress={handleSubmitForm} />
            </ButtonMargin>
          </Form>
        </Content>
      </Container>

      {
        !keyboardIsOpen
        && (
        <FooterButton
          iconName="arrow-left"
          text="Entre com sua conta"
          onPress={goBackToLoginScreen}
        />
        )
      }

      {
        modalIsVisible && (
        <ModalView
          visible={modalIsVisible}
          title="Termos de Uso e Política de Privacidade"
          message="Por conta da nova Lei Geral de Proteção de Dados (Lei 13.709/2018) ou LGPD, que tem como objetivo reforçar a responsabilidade e a transparência no tratamento dos seus dados pessoais (nome completo, endereço, CPF, email, número de whatsapp), gostaríamos de pedir o seu consentimento para armazená-los e utilizá-los com toda segurança e privacidade."
          onCloseModal={handleCloseModal}
        />
        )
      }
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
