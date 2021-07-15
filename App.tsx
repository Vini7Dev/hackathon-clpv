import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import RecoverPassword from './src/screens/RecoverPassword';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <RecoverPassword />
    </SafeAreaView>
  );
};

export default App;
