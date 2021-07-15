import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

const {
  text,
  text_dark,
  secondary,
} = theme.colors;

const {
  ubuntu_medium,
  ubuntu_regular,
  inter_regular,
} = theme.fonts;

export const Container = styled.View`
  width: 100%;
  margin: 25px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppLogo = styled.View`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 8px;
  background-color: #C4C4C4;
`;

export const GreetingsArea = styled.View`
  flex: 1;
`;

export const HelloArea = styled.View`
  flex-direction: row;
`;

export const HelloMessage = styled.Text`
  color: ${text_dark};
  font-size: 22px;
  font-family: ${ubuntu_regular};
`;

export const UserName = styled.Text`
  color: ${text_dark};
  font-size: 22px;
  font-family: ${ubuntu_medium};
`;

export const Greetings = styled.Text`
  color: ${text};
  font-size: 16px;
  font-family: ${inter_regular};
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 25px;
  background-color: ${secondary};
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
