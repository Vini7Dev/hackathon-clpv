import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import RecoverPassword from './src/screens/RecoverPassword';
import ResetPassword from './src/screens/ResetPassword';

import Home from './src/screens/Home';
import ChooseOccurrenceType from './src/screens/ChooseOccurrenceType';
import RegisterOccurrence from './src/screens/RegisterOccurrence';
import ViewOccurrence from './src/screens/ViewOccurrence';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(0, 0, 0, 0)"
      />

      <ViewOccurrence />
    </SafeAreaView>
  );
};

export default App;
