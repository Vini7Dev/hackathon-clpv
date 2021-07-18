import React, { useCallback, useState } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

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

  const [email, setEmail] = useState('');

  const goToResetPasswordScreen = useCallback(() => {
    navigation.navigate('ResetPassword');
  }, [navigation]);

  const handleSubmitForm = useCallback(async () => {
    try {
      const shape = Yup.object().shape({
        email: Yup.string().required('Informe o email!').email('Informe um email válido!'),
      });

      await shape.validate({
        email,
      });

      // TEMP FUNCTION
      goToResetPasswordScreen();
    } catch (error) {
      Alert.alert(error.errors[0]);
    }
  }, [email, goToResetPasswordScreen]);

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
              <Input
                iconName="at-sign"
                placeholder="Informe seu e-mail"
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </InputMargin>

            <ButtonMargin>
              <Button text="Enviar" onPress={handleSubmitForm} />
            </ButtonMargin>
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default RecoverPassword;
