import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';

import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#f29433" />
    <AppProvider>
      <View style={{flex: 1, backgroundColor: '#f29433'}}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
