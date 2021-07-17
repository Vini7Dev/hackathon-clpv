import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import RecoverPassword from '../screens/RecoverPassword';
import ResetPassword from '../screens/ResetPassword';

import Home from '../screens/Home';
import ChooseOccurrenceType from '../screens/ChooseOccurrenceType';
import RegisterOccurrence from '../screens/RegisterOccurrence';
import ViewOccurrence from '../screens/ViewOccurrence';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
    >
      <Screen name="Login" component={Login} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="RecoverPassword" component={RecoverPassword} />
      <Screen name="ResetPassword" component={ResetPassword} />

      <Screen name="Home" component={Home} />
      <Screen name="ChooseOccurrenceType" component={ChooseOccurrenceType} />
      <Screen name="RegisterOccurrence" component={RegisterOccurrence} />
      <Screen name="ViewOccurrence" component={ViewOccurrence} />
    </Navigator>
  );
};

export default AuthRoutes;
