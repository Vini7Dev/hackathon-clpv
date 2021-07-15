import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
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
              <Input />
            </InputMargin>

            <InputMargin>
              <Input />

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

      <FooterButton />
    </KeyboardAvoidingView>
  );
};

export default Login;
