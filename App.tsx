import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(0, 0, 0, 0)"
      />

      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
