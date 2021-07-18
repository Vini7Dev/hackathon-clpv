import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Logo from '../../assets/logo.jpg';
import {
  Container,
  AppLogo,
  GreetingsArea,
  HelloArea,
  HelloMessage,
  UserName,
  Greetings,
  LogoutButton,
} from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const logout = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'Login' }],
      index: 0,
    });
  }, [navigation]);

  return (
    <Container>
      <AppLogo source={Logo} />

      <GreetingsArea>
        <HelloArea>
          <HelloMessage>Olá, </HelloMessage>
          <UserName>Vinícius</UserName>
        </HelloArea>

        <Greetings>Tenha um bom dia!</Greetings>
      </GreetingsArea>

      <LogoutButton activeOpacity={0.7} onPress={logout}>
        <Icon name="log-out" color="#FFFFFF" size={24} />
      </LogoutButton>
    </Container>
  );
};

export default Header;
