import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../global/styles/theme';
import {
  Container,
  ButtonText,
} from './styles';

const { primary } = theme.colors;

const FooterButton: React.FC = () => {
  return (
    <Container>
      <Icon name="log-in" color={primary} size={24} />

      <ButtonText>
        Criar uma conta
      </ButtonText>
    </Container>
  );
};

export default FooterButton;
