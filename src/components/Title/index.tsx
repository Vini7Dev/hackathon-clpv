import React from 'react';

import {
  TitleText,
} from './styles';

interface ITitle {
  textAlign?: 'left' | 'center' | 'right';
}

const Title: React.FC<ITitle> = ({ textAlign = 'left', children }) => {
  return (
    <TitleText textAlign={textAlign}>
      {children}
    </TitleText>
  );
};

export default Title;
