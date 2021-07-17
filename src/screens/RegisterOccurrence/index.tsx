import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from 'react-native-maps';

import { fetchLocalMapBox } from '../../scripts/apiMapBox';
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
import SelectOptions, { IOptionData } from '../../components/SelectOptions';
import DateTimeInput from '../../components/DateTimeInput';
// import PhotoItem from '../../components/PhotoItem';

const {
  text_dark,
} = theme.colors;

const RegisterOccurrence: React.FC = () => {
  const [addressSuggestionsIsOpen, setAddressSuggestionsIsOpen] = useState(false);
  const [locationOptions, setLocationOptions] = useState<IOptionData[]>([]);
  const [startMapPosition, setStartMapPosition] = useState<Region>({
    latitude: -20.5393727,
    longitude: -47.4018742,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [selectedAddress, setSelectedAddress] = useState<IOptionData>();

  const handleOnSelectAddress = useCallback((address: IOptionData) => {
    setSelectedAddress(address);

    setAddressSuggestionsIsOpen(false);

    setStartMapPosition({
      latitude: address.coords.lat,
      longitude: address.coords.long,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  }, []);

  const handleSearchStreet = useCallback(async (text: string) => {
    if (text.length <= 5) return;

    const result = await fetchLocalMapBox(text);

    if (result.type === 'error') {
      console.log(result.error);
      return;
    }

    const resultAddressType = result.features.filter(
      (address: { place_type: string; }) => address.place_type[0] === 'address',
    );

    const cityAddress = resultAddressType.filter(
      (address: { place_name: string }) => address.place_name.indexOf('Franca - São Paulo,') !== -1,
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addressSuggestions = cityAddress.map((address: any) => ({
      id: address.id,
      label: address.text,
      value: address.place_name,
      coords: {
        lat: address.geometry.coordinates[1],
        long: address.geometry.coordinates[0],
      },
    }));

    setLocationOptions(addressSuggestions);
  }, []);

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
                <Input
                  iconName="map-pin"
                  placeholder="Informe a localização do ocorrido"
                  onChangeText={handleSearchStreet}
                  onFocus={() => setAddressSuggestionsIsOpen(true)}
                />

                { addressSuggestionsIsOpen && (
                  <SelectOptions
                    options={locationOptions}
                    onSelectOption={handleOnSelectAddress}
                    onClose={() => setAddressSuggestionsIsOpen(false)}
                  />
                )}
              </InputMargin>

              <InputMargin>
                <Input iconName="home" placeholder="Informe o número do local" keyboardType="numeric" />
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

              <MapArea>
                <MapView
                  style={{
                    width: '95%',
                    height: '95%',
                    borderRadius: 8,
                  }}
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitude: startMapPosition.latitude,
                    longitude: startMapPosition.longitude,
                    latitudeDelta: startMapPosition.latitudeDelta,
                    longitudeDelta: startMapPosition.longitudeDelta,
                  }}
                  initialRegion={startMapPosition}
                >
                  {
                    selectedAddress
                    && (
                    <Marker
                      coordinate={{
                        latitude: selectedAddress.coords.lat,
                        longitude: selectedAddress.coords.long,
                      }}
                    />
                    )
                  }
                </MapView>
              </MapArea>
            </InputGroupMargin>
          </Section>

          <Button text="Registrar Ocorrência" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default RegisterOccurrence;
