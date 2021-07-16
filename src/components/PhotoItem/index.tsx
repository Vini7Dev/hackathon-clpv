import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Photo,
  RemoveButton,
} from './styles';

const PhotoItem: React.FC = () => {
  return (
    <Container>
      <Photo source={{ uri: '' }} />

      <RemoveButton activeOpacity={0.9}>
        <Icon name="x" color="#FFFFFF" size={35} />
      </RemoveButton>
    </Container>
  );
};

export default PhotoItem;
