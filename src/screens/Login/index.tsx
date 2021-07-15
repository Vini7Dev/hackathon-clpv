import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Content,
  Logo,
  TitleView,
  Title,
  Subtitle,
  Form,
  InputMargin,
  ForgotPassword,
} from './styles';

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
          <Logo />

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

            <InputMargin>
              <Button />
            </InputMargin>
          </Form>
        </Content>
      </Container>

      {!keyboardIsOpen && <FooterButton iconName="log-in" />}
    </KeyboardAvoidingView>
  );
};

export default Login;
