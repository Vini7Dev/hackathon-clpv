import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
              <Input iconName="type" placeholder="Informe seu nome completo" />
            </InputMargin>

            <InputMargin>
              <Input iconName="user" placeholder="Informe seu CPF" keyboardType="numeric" />
            </InputMargin>

            <InputMargin>
              <Input iconName="phone" placeholder="Informe seu Whatsapp" keyboardType="numeric" />
            </InputMargin>

            <InputGroupTitle>Dados da conta</InputGroupTitle>

            <InputMargin>
              <Input iconName="at-sign" placeholder="Informe seu email" keyboardType="email-address" />
            </InputMargin>

            <InputMargin>
              <Input iconName="lock" placeholder="Informe sua senha" secureTextEntry />
            </InputMargin>

            <InputMargin>
              <Input iconName="lock" placeholder="Confirme sua senha" secureTextEntry />
            </InputMargin>

            <InputMargin>
              <Checkbox>
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
              <Button text="Cadastrar-se" />
            </ButtonMargin>
          </Form>
        </Content>
      </Container>

      {!keyboardIsOpen && <FooterButton iconName="arrow-left" text="Entre com sua conta" />}
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
