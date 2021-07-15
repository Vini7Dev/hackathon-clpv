import React from 'react';

import {
  TitleText,
} from './styles';

interface ITitle {
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: 40 | 30;
}

const Title: React.FC<ITitle> = ({ textAlign = 'left', fontSize = 40, children }) => {
  return (
    <TitleText textAlign={textAlign} fontSize={fontSize}>
      {children}
    </TitleText>
  );
};

export default Title;
