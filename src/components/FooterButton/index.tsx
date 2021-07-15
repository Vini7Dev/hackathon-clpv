import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../global/styles/theme';
import {
  Container,
  ButtonText,
} from './styles';

interface IFooterButton extends TouchableOpacityProps {
  iconName: string;
  text: string;
}

const { primary } = theme.colors;

const FooterButton: React.FC<IFooterButton> = ({ iconName, text, ...rest }) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <>
        <Icon name={iconName} color={primary} size={24} />

        <ButtonText>
          {text}
        </ButtonText>
      </>
    </Container>
  );
};

export default FooterButton;
