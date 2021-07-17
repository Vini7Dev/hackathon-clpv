import React, { useCallback } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
import Description from '../../components/Description';
import Input from '../../components/Input';
import Button from '../../components/Button';

const RecoverPassword: React.FC = () => {
  const navigation = useNavigation();

  const goToResetPasswordScreen = useCallback(() => {
    navigation.navigate('ResetPassword');
  }, [navigation]);

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
            <Description>
              Vamos te enviar um email para
              {'\n'}
              você alterar sua senha
            </Description>
          </TitleView>

          <Form>
            <InputMargin>
              <Input iconName="at-sign" placeholder="Informe seu e-mail" keyboardType="email-address" />
            </InputMargin>

            <ButtonMargin>
              <Button text="Enviar" onPress={goToResetPasswordScreen} />
            </ButtonMargin>
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default RecoverPassword;
