import styled from 'styled-components/native';

import theme from '../../global/styles/theme';

const {
  danger,
} = theme.colors;

export const Container = styled.View`
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
