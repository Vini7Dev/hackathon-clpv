import React, { useCallback, useState } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from 'react-native-maps';
import * as Yup from 'yup';

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

import { formatDate, formatTime, IDatePickerEvent } from '../../utils/formatDateTime';

interface IRouteParams {
  problem_type_id: number;
}

const {
  text_dark,
} = theme.colors;

const RegisterOccurrence: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { problem_type_id } = route.params as IRouteParams;
  console.log(problem_type_id);

  const [addressSuggestionsIsOpen, setAddressSuggestionsIsOpen] = useState(false);
  const [locationOptions, setLocationOptions] = useState<IOptionData[]>([]);
  const [startMapPosition, setStartMapPosition] = useState<Region>({
    latitude: -20.5393727,
    longitude: -47.4018742,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const [problemTypeId, setProblemTypeId] = useState(problem_type_id);
  const [observations, setObservations] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phoneForPurchase, setPhoneForPurchase] = useState('');
  const [date, setDate] = useState(formatDate(new Date()));
  const [time, setTime] = useState(formatTime(new Date()));
  const [selectedAddress, setSelectedAddress] = useState<IOptionData>();
  const [number, setNumber] = useState<number>();
  const [referencePoint, setReferencePoint] = useState('');

  const goToHomeScreen = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'Home' }],
      index: 0,
    });
  }, [navigation]);

  const handleSubmitForm = useCallback(async () => {
    try {
      Alert.alert('VALIDAR IMAGENS!!!');

      const shape = Yup.object().shape({
        problemTypeId: Yup.number().required('O tipo de problema não foi encontrado!'),
        observations: Yup.string().required('Informe a suas observações!'),
        ownerName: Yup.string().when('problemTypeId', {
          is: 2,
          then: Yup.string().required('Informe o nome do proprietário!'),
          otherwise: Yup.string(),
        }),
        phoneForPurchase: Yup.string().when('problemTypeId', {
          is: 2,
          then: Yup.string().required('Informe o telefone para compra de lotes!'),
          otherwise: Yup.string(),
        }),
        date: Yup.string().required('Informe a data do ocorrido!'),
        time: Yup.string().required('Informe o horário do ocorrido!'),
        selectedAddress: Yup.string().required('Informe o endereço do ocorrido!'),
        number: Yup.number().required('Informe o número do local!'),
      });

      await shape.validate({
        problemTypeId,
        observations,
        ownerName,
        phoneForPurchase,
        date,
        time,
        selectedAddress: JSON.stringify(selectedAddress),
        number,
      });

      // ENVIAR O PONTO DE REFERÊNCIA

      Alert.alert('PASSOU!!!');

      // goToHomeScreen();
    } catch (error) {
      Alert.alert(error.errors[0]);
    }
  }, [
    problemTypeId,
    observations,
    ownerName,
    phoneForPurchase,
    date,
    time,
    selectedAddress,
    number,
  ]);

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

  const handleSetDate = useCallback((e) => {
    const { type, nativeEvent } = e as IDatePickerEvent;

    if (type !== 'set') return;

    const formatedDate = formatDate(nativeEvent.timestamp);

    setDate(formatedDate);
  }, []);

  const handleSetTime = useCallback((e) => {
    const { type, nativeEvent } = e as IDatePickerEvent;

    if (type !== 'set') return;

    const formatedTime = formatTime(nativeEvent.timestamp);

    setTime(formatedTime);
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
              onChangeText={setObservations}
              multiline
            />
          </Section>

          {
            problemTypeId === 2 && (
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
                    <Input
                      iconName="user"
                      placeholder="Nome do proprietário"
                      onChangeText={setOwnerName}
                    />
                  </InputMargin>
                  <InputMargin>
                    <Input
                      iconName="phone"
                      placeholder="Telefone para compra de lotes"
                      onChangeText={setPhoneForPurchase}
                    />
                  </InputMargin>
                </InputGroupMargin>
              </Section>
            )
          }

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
                  valueText={date}
                  onChangeValue={handleSetDate}
                />

                <DateTimeInput
                  value={new Date()}
                  iconName="clock"
                  valueText={time}
                  mode="time"
                  onChangeValue={handleSetTime}
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
                <Input
                  iconName="home"
                  placeholder="Informe o número do local"
                  onChangeText={(text) => setNumber(Number(text))}
                  keyboardType="numeric"
                />
              </InputMargin>

              <InputMargin>
                <Input
                  iconName="info"
                  placeholder="Informe um ponto de referência"
                  onChangeText={setReferencePoint}
                />
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

          <Button text="Registrar Ocorrência" onPress={handleSubmitForm} />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default RegisterOccurrence;
