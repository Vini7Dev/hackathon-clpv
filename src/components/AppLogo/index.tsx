import React from 'react';
import { View } from 'react-native';

import {
  LogoImg,
} from './styles';

import Logo from '../../assets/logo.jpg';

const AppLogo: React.FC = () => {
  return (
    <View>
      <LogoImg source={Logo} />
    </View>
  );
};

export default AppLogo;
