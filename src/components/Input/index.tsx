import React from 'react';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../global/styles/theme';
import {
  Container,
  IconView,
  InputElement,
} from './styles';

interface IInputProps extends TextInputProps {
  iconName: string;
}

const { text } = theme.colors;

const Input: React.FC<IInputProps> = ({ iconName, ...rest }) => {
  return (
    <Container>
      <IconView>
        <Icon name={iconName} color={text} size={20} />
      </IconView>

      <InputElement {...rest} />
    </Container>
  );
};

export default Input;
