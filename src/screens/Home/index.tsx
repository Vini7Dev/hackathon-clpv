import React from 'react';

import {
  Container,
  Content,
  RegisterOccurrenceBtnArea,
  OccurrencesTableArea,
  TotalText,
  OccurrencesTable,
} from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import OccurrenceItem from '../../components/OccurrenceItem';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>

        <Title textAlign="center">
          Registre uma
          {'\n'}
          Ocorrência
        </Title>

        <RegisterOccurrenceBtnArea>
          <Description
            color="alert_dark"
            fontSize={15}
          >
            Você viu algum problema da área ambiental, de habitação ou de urbanismo na cidade?
          </Description>
          <Button
            style={{ marginTop: 4 }}
            text={'Regstrar\nOcorrência'}
            hSize="large"
          />
        </RegisterOccurrenceBtnArea>

        <OccurrencesTableArea>
          <Title textAlign="center">
            Acompanhe suas
            {'\n'}
            Ocorrência
          </Title>

          <TotalText>
            Total 3
          </TotalText>

          <OccurrencesTable>
            <OccurrenceItem />
            <OccurrenceItem />
            <OccurrenceItem />
          </OccurrencesTable>
        </OccurrencesTableArea>
      </Content>
    </Container>
  );
};

export default Home;
