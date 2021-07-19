import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

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
import ModalView from '../../components/ModalView';

interface IRoutes {
  showTnkdModal?: boolean;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const [showThanksModal, setShowThanksModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setShowThanksModal(false);
  }, []);

  const goToChooseOccurrenceTypeScreen = useCallback(() => {
    navigation.navigate('ChooseOccurrenceType');
  }, [navigation]);

  const goToViewOccurrenceScreen = useCallback((id: string) => {
    navigation.navigate('ViewOccurrence', { id });
  }, [navigation]);

  useEffect(() => {
    const params = routes.params as IRoutes;

    if (params && params.showTnkdModal) {
      setShowThanksModal(true);
    }
  }, [routes]);

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
            text={'Registrar\nOcorrência'}
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

      {
        showThanksModal && (
          <ModalView
            title="Muito obrigado! Nro da ocorrência: XXXX"
            message={'Você está colaborando com uma cidade melhor 😀.\nPara acompanhar o andamento do seu caso acesse a tela inicial.\nLembre-se que a falta de informações pode dificultar a análise do ocorrido 😉'}
            visible={showThanksModal}
            onCloseModal={onCloseModal}
          />
        )
      }
    </Container>
  );
};

export default Home;
