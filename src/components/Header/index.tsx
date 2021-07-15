import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

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
  return (
    <Container>
      <AppLogo />

      <GreetingsArea>
        <HelloArea>
          <HelloMessage>Olá, </HelloMessage>
          <UserName>Vinícius</UserName>
        </HelloArea>

        <Greetings>Tenha um bom dia!</Greetings>
      </GreetingsArea>

      <LogoutButton activeOpacity={0.7}>
        <Icon name="log-out" color="#FFFFFF" size={24} />
      </LogoutButton>
    </Container>
  );
};

export default Header;
