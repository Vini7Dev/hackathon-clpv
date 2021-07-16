import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Content,
  TitleArea,
  ProblemTypeArea,
  ProblemTypeLabel,
  Section,
  PhotosArea,
  EmptyListMessageArea,
  EmptyListMessage,
  AddPhotoButtonView,
  DescriptionInput,
  InputGroupMargin,
  InputMargin,
  DateView,
  MapArea,
} from './styles';

import theme from '../../global/styles/theme';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';
import Input from '../../components/Input';
import DateTimeInput from '../../components/DateTimeInput';
// import PhotoItem from '../../components/PhotoItem';

const {
  text_dark,
} = theme.colors;

const RegisterOccurrence: React.FC = () => {
  return (
    <Container>
      <KeyboardAvoidingView>
        <Header />

        <Content>
          <ProblemTypeArea>
            <ProblemTypeLabel>
              Tipo de problema:
            </ProblemTypeLabel>

            <Title
              color="alert_light"
              fontSize={35}
            >
              Loteamento Irregular
            </Title>
          </ProblemTypeArea>

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

          <Section>
            <Title
              fontSize={30}
              textAlign="center"
            >
              Nos envie Fotos
              {'\n'}
              do Ocorrido
            </Title>

            <PhotosArea>
              <EmptyListMessageArea>
                <Icon
                  name="alert-triangle"
                  size={24}
                  color={text_dark}
                />

                <EmptyListMessage>
                  Nenhuma foto
                  {'\n'}
                  adicionada
                </EmptyListMessage>
              </EmptyListMessageArea>
            </PhotosArea>

            <AddPhotoButtonView>
              <Button text="Adicionar" icon="camera" />
            </AddPhotoButtonView>
          </Section>

          <Section>
            <Title
              fontSize={30}
              textAlign="center"
            >
              Observações
            </Title>

            <Description
              fontSize={15}
              color="primary2"
            >
              Nos conte melhor sobre o acontecimento,
              quanto mais informações você passar, mais
              rápido vamos conseguir solucionar seu caso 😃
            </Description>

            <DescriptionInput
              style={{ textAlignVertical: 'top' }}
              placeholder="Descreva aqui o acontecimento..."
              multiline
            />
          </Section>

          <Section>
            <Title
              fontSize={30}
              textAlign="center"
            >
              Sobre o Proprietário
            </Title>

            <InputGroupMargin>
              <Description
                fontSize={15}
                color="primary2"
              >
                Nos conte mais sobre o proprietário...
              </Description>

              <InputMargin>
                <Input iconName="user" placeholder="Nome do proprietário" />
              </InputMargin>
              <InputMargin>
                <Input iconName="phone" placeholder="Telefone para compra de lotes" />
              </InputMargin>
            </InputGroupMargin>
          </Section>

          <Section>
            <Title
              fontSize={30}
              textAlign="center"
            >
              Data do Ocorrido
            </Title>

            <InputGroupMargin>
              <DateView>
                <DateTimeInput
                  value={new Date()}
                  iconName="calendar"
                  valueText="16/07/2021"
                />

                <DateTimeInput
                  value={new Date()}
                  iconName="clock"
                  valueText="10:50"
                  mode="time"
                />
              </DateView>
            </InputGroupMargin>
          </Section>

          <Section>
            <Title
              fontSize={30}
              textAlign="center"
            >
              Localização
            </Title>

            <InputGroupMargin>
              <InputMargin>
                <Input iconName="map-pin" placeholder="Informe a localização do ocorrido" />
              </InputMargin>
              <InputMargin>
                <Input iconName="info" placeholder="Informe um ponto de referência" />
              </InputMargin>

              <Description
                fontSize={15}
                color="primary2"
              >
                Veja no mapa o local selecionado
              </Description>

              <MapArea />
            </InputGroupMargin>
          </Section>

          <Button text="Registrar Ocorrência" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default RegisterOccurrence;
