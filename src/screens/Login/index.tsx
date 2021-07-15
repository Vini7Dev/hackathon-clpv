import React, { useEffect, useState } from 'react';
import {
  Keyboard, KeyboardAvoidingView, View,
} from 'react-native';

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
import Subtitle from '../../components/Subtitle';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FooterButton from '../../components/FooterButton';

const Login: React.FC = () => {
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

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
            <Subtitle>
              Precisamos de você para
              {'\n'}
              construirmos uma cidade melhor 😁
            </Subtitle>
          </TitleView>

          <Form>
            <InputMargin>
              <Input iconName="at-sign" placeholder="Informe seu e-mail" keyboardType="email-address" />
            </InputMargin>

            <InputMargin>
              <Input iconName="lock" placeholder="*******" secureTextEntry />

              <ForgotPassword>
                Esqueci minha senha
              </ForgotPassword>
            </InputMargin>

            <Button text="Entrar" />
          </Form>
        </Content>

        <View style={{ height: 100 }} />
      </Container>

      {!keyboardIsOpen && <FooterButton iconName="log-in" text="Criar uma conta" />}
    </KeyboardAvoidingView>
  );
};

export default Login;
