import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const goToChooseOccurrenceTypeScreen = useCallback(() => {
    navigation.navigate('ChooseOccurrenceType');
  }, [navigation]);

  const goToViewOccurrenceScreen = useCallback((id: string) => {
    navigation.navigate('ViewOccurrence', { id });
  }, [navigation]);

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
            onPress={goToChooseOccurrenceTypeScreen}
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
            <OccurrenceItem
              code="#003"
              status="Registro do auto de infração - AI"
              infraction_notice="003"
              onPress={() => goToViewOccurrenceScreen('2')}
            />

            <OccurrenceItem
              code="#002"
              status="Registro do auto de infração - AI"
              infraction_notice="002"
              onPress={() => goToViewOccurrenceScreen('1')}
            />

            <OccurrenceItem
              code="#001"
              status="Registro do auto de infração - AI"
              infraction_notice="001"
              onPress={() => goToViewOccurrenceScreen('0')}
            />
          </OccurrencesTable>
        </OccurrencesTableArea>
      </Content>
    </Container>
  );
};

export default Home;
