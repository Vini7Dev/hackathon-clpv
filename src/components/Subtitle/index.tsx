import React from 'react';

import {
  SubtitleText,
} from './styles';

const Subtitle: React.FC = ({ children }) => {
  return (
    <SubtitleText>
      {children}
    </SubtitleText>
  );
};

export default Subtitle;
