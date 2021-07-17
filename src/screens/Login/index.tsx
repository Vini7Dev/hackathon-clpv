import React, { useCallback, useEffect, useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  const goToHomeScreen = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const goToCreateAccountScreen = useCallback(() => {
    navigation.navigate('CreateAccount');
  }, [navigation]);

  const goToRecoverPasswordScreen = useCallback(() => {
    navigation.navigate('RecoverPassword');
  }, [navigation]);

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
              <Input iconName="at-sign" placeholder="Informe seu e-mail" keyboardType="email-address" />
            </InputMargin>

            <InputMargin>
              <Input iconName="lock" placeholder="*******" secureTextEntry />

              <ForgotPassword onPress={goToRecoverPasswordScreen}>
                Esqueci minha senha
              </ForgotPassword>
            </InputMargin>

            <Button text="Entrar" onPress={goToHomeScreen} />
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
