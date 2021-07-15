import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../global/styles/theme';
import {
  Container,
  IconView,
  InputElement,
} from './styles';

const { text } = theme.colors;

const Input: React.FC = () => {
  return (
    <Container>
      <IconView>
        <Icon name="at-sign" color={text} size={20} />
      </IconView>

      <InputElement placeholder="Example" />
    </Container>
  );
};

export default Input;
