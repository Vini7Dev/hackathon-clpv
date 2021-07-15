import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Cotainer,
  Image,
  Description,
} from './styles';

interface IProblemTypeItem {
  image: ImageSourcePropType;
  description: string;
}

const ProblemTypeItem: React.FC<IProblemTypeItem> = ({ image, description }) => {
  return (
    <Cotainer activeOpacity={0.8}>
      <Image source={image} />
      <Description>
        {description}
      </Description>
    </Cotainer>
  );
};

export default ProblemTypeItem;
