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

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ChooseOccurrenceType />
    </SafeAreaView>
  );
};

export default App;
