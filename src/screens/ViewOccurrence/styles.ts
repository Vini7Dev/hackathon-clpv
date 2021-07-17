import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  alert_dark,
  danger,
  input_border,
  text,
} = theme.colors;

const {
  poppins_regular,
  inter_regular,
} = theme.fonts;

export const Container = styled.ScrollView`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0 15px 60px;
`;

export const ProblemTypeArea = styled.View`
  margin-bottom: 26px;
  width: 100%;
`;

export const ProblemTypeLabel = styled.Text`
  color: ${alert_dark};
  font-size: 15px;
  font-family: ${poppins_regular};
`;

export const Section = styled.View`
  margin-top: 26px;
  width: 100%;
  align-items: center;
`;

export const PhotoItem = styled.View`
  position: relative;
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 10px;
  width: 125px;
  height: 125px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.Image`
  width: 100%;
`;

export const RemoveButton = styled.TouchableOpacity`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${danger};
  align-items: center;
  justify-content: center;
`;

export const DescriptionInput = styled.TextInput`
  height: 158px;
  width: 100%;
  margin-top: 12px;
  padding: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${input_border};
  color: ${text};
  font-size: 15px;
  font-family: ${inter_regular};
`;

export const InputGroupMargin = styled.View`
  margin-top: 6px;
  width: 100%;
`;

export const InputMargin = styled.View`
  margin-bottom: 10px;
  width: 100%;
`;

export const DateView = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const MapArea = styled.View`
  width: 100%;
  height: 325px;
  margin: 5px 0 25px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${input_border};
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;
