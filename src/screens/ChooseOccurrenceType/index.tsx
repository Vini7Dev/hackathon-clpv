import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  TitleArea,
  ProblemTypeArea,
  ProblemTypeList,
} from './styles';

import DescarteResiduosPNG from '../../assets/TiposDeProblemas/descarte_irregular_de_residuos.png';
import DesmatamentoPNG from '../../assets/TiposDeProblemas/desmatamento.png';
import LoteamentoIrregularPNG from '../../assets/TiposDeProblemas/loteamento_irregular.png';
import UsoIndevidoAreaPublicaPNG from '../../assets/TiposDeProblemas/uso_andevido_de_area_publica.png';
import MausTratosPNG from '../../assets/TiposDeProblemas/maus_tratos_contra_animais.png';
import AbandonoAnimaisPNG from '../../assets/TiposDeProblemas/abandono_de_animas.png';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Description from '../../components/Description';
import ProblemTypeItem from '../../components/ProblemTypeItem';

const ChooseOccurrenceType: React.FC = () => {
  const navigation = useNavigation();

  const goToRegisterOccurrenceScreen = useCallback((problem_type_id: number) => {
    navigation.navigate('RegisterOccurrence', { problem_type_id });
  }, [navigation]);

  return (
    <Container>
      <Header />

      <Content>
        <TitleArea>
          <Title textAlign="center">
            Registrar
            {'\n'}
            Ocorrência
          </Title>

          <Description
            color="alert_dark"
            textAlign="center"
            fontSize={15}
          >
            Não se preocupe! Somente pessoas autorizadas vão ter acesso às suas ocorrências 😉
          </Description>
        </TitleArea>

        <ProblemTypeArea>
          <Title
            textAlign="center"
            fontSize={30}
          >
            Selecione o Tipo de Problema
          </Title>

          <ProblemTypeList>
            <ProblemTypeItem
              image={DescarteResiduosPNG}
              description={'Descarte irregular\nde resíduos'}
              onPress={() => goToRegisterOccurrenceScreen(0)}
            />
            <ProblemTypeItem
              image={DesmatamentoPNG}
              description="Desmatamento"
              onPress={() => goToRegisterOccurrenceScreen(1)}
            />
            <ProblemTypeItem
              image={LoteamentoIrregularPNG}
              description={'Loteamento\nIrregular'}
              onPress={() => goToRegisterOccurrenceScreen(2)}
            />
            <ProblemTypeItem
              image={UsoIndevidoAreaPublicaPNG}
              description={'Uso Indevido de\nÁrea Pública'}
              onPress={() => goToRegisterOccurrenceScreen(3)}
            />
            <ProblemTypeItem
              image={MausTratosPNG}
              description={'Maus Tratos Contra\nAnimais'}
              onPress={() => goToRegisterOccurrenceScreen(4)}
            />
            <ProblemTypeItem
              image={AbandonoAnimaisPNG}
              description={'Abandono de\nAnimas'}
              onPress={() => goToRegisterOccurrenceScreen(5)}
            />
          </ProblemTypeList>
        </ProblemTypeArea>
      </Content>
    </Container>
  );
};

export default ChooseOccurrenceType;
