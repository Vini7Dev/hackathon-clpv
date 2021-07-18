import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Keyboard, KeyboardAvoidingView, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import {
  Container,
  Content,
  TitleView,
  Form,
  InputMargin,
  ForgotPassword,
} from './styles';

import AppLogo from '../../components/AppLogo';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FooterButton from '../../components/FooterButton';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToHomeScreen = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const goToCreateAccountScreen = useCallback(() => {
    navigation.navigate('CreateAccount');
  }, [navigation]);

  const goToRecoverPasswordScreen = useCallback(() => {
    navigation.navigate('RecoverPassword');
  }, [navigation]);

  const handleSubmitForm = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Informe o email!').email('Informe um email válido!'),
        password: Yup.string().required('Informe a senha!'),
      });

      await schema.validate({ email, password }, { abortEarly: false });

      goToHomeScreen();
    } catch (error) {
      Alert.alert(error.errors[0]);
    }
  }, [email, password, goToHomeScreen]);

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
            <Title>Bem-vindo!</Title>
            <Description>
              Precisamos de você para construirmos uma cidade melhor 😁
            </Description>
          </TitleView>

          <Form>
            <InputMargin>
              <Input
                iconName="at-sign"
                placeholder="Informe seu e-mail"
                keyboardType="email-address"
                onChangeText={setEmail}
              />
            </InputMargin>

            <InputMargin>
              <Input
                iconName="lock"
                placeholder="*******"
                secureTextEntry
                onChangeText={setPassword}
              />

              <ForgotPassword onPress={goToRecoverPasswordScreen}>
                Esqueci minha senha
              </ForgotPassword>
            </InputMargin>

            <Button text="Entrar" onPress={handleSubmitForm} />
          </Form>
        </Content>

        <View style={{ height: 100 }} />
      </Container>

      {
        !keyboardIsOpen
          && (
          <FooterButton
            iconName="log-in"
            text="Criar uma conta"
            onPress={goToCreateAccountScreen}
          />
          )
      }
    </KeyboardAvoidingView>
  );
};

export default Login;
