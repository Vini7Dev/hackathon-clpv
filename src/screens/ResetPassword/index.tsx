import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Content,
  TitleView,
  Form,
  InputMargin,
} from './styles';

import AppLogo from '../../components/AppLogo';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ResetPassword: React.FC = () => {
  return (
    <KeyboardAvoidingView>
      <Container>
        <Content>
          <AppLogo />

          <TitleView>
            <Title>
              Alteração
              {'\n'}
              de Senha
            </Title>
            <Subtitle>
              Informe sua nova senha
            </Subtitle>
          </TitleView>

          <Form>
            <InputMargin>
              <Input iconName="lock" placeholder="Informe sua nova senha" secureTextEntry />
            </InputMargin>

            <InputMargin>
              <Input iconName="lock" placeholder="Confirme sua nova senha" secureTextEntry />
            </InputMargin>

            <Button text="Alterar" />
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
