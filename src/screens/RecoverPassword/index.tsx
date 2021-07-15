import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Content,
  TitleView,
  Form,
  InputMargin,
  ButtonMargin,
} from './styles';

import AppLogo from '../../components/AppLogo';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Input from '../../components/Input';
import Button from '../../components/Button';

const RecoverPassword: React.FC = () => {
  return (
    <KeyboardAvoidingView>
      <Container>
        <Content>
          <AppLogo />

          <TitleView>
            <Title>
              Recuperação
              {'\n'}
              de Senha
            </Title>
            <Subtitle>
              Vamos te enviar um email para
              {'\n'}
              você alterar sua senha
            </Subtitle>
          </TitleView>

          <Form>
            <InputMargin>
              <Input iconName="at-sign" placeholder="Informe seu e-mail" keyboardType="email-address" />
            </InputMargin>

            <ButtonMargin>
              <Button text="Enviar" />
            </ButtonMargin>
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default RecoverPassword;
