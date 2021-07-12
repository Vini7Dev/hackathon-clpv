import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Login from './src/screens/Login';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Login />
    </SafeAreaView>
  );
};

export default App;
