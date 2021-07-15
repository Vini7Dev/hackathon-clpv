import React from 'react';

import {
  Container,
  Content,
} from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
      </Content>
    </Container>
  );
};

export default Home;
