import * as React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/component/client/provider/clientprovider';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/component/routes/routes';
import AuthProvider from './src/contexts/auth';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </AuthProvider>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
