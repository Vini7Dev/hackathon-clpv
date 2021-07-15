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

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};

export default App;
