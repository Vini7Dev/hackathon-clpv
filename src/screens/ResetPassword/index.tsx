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
} from './styles';

import AppLogo from '../../components/AppLogo';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ResetPassword: React.FC = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const handleSubmitForm = useCallback(async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Informe a nova senha!'),
        confirmationPassword: Yup.string().oneOf(
          [Yup.ref('password')], 'A confirmação deve ser igual a nova senha.',
        ),
      });

      await schema.validate({
        password,
        confirmationPassword,
      });

      navigation.reset({
        routes: [{ name: 'Login' }],
        index: 0,
      });
    } catch (error) {
      Alert.alert(error.errors[0]);
    }
  }, [password, confirmationPassword, navigation]);

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
            <Description>
              Informe sua nova senha
            </Description>
          </TitleView>

          <Form>
            <InputMargin>
              <Input
                iconName="lock"
                placeholder="Informe sua nova senha"
                onChangeText={setPassword}
                secureTextEntry
              />
            </InputMargin>

            <InputMargin>
              <Input
                iconName="lock"
                placeholder="Confirme sua nova senha"
                onChangeText={setConfirmationPassword}
                secureTextEntry
              />
            </InputMargin>

            <Button text="Alterar" onPress={handleSubmitForm} />
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
