import React from 'react';

import {
  LogoImg,
} from './styles';

import Logo from '../../assets/logo.jpg';

const AppLogo: React.FC = () => {
  return (
    <LogoImg source={Logo} />
  );
};

export default AppLogo;
