import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Login />
    </SafeAreaView>
  );
};

export default App;
