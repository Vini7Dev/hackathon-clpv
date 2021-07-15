import React from 'react';

import {
  Container,
  ButtonText,
} from './styles';

const Button: React.FC = () => {
  return (
    <Container activeOpacity={0.7} onPress={() => console.log('OK')}>
      <ButtonText>
        Entrar
      </ButtonText>
    </Container>
  );
};

export default Button;
