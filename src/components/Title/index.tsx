import React from 'react';

import {
  TitleText,
} from './styles';

const Title: React.FC = ({ children }) => {
  return (
    <TitleText>
      {children}
    </TitleText>
  );
};

export default Title;
