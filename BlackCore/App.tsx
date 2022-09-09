import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/component/client/provider/clientprovider';
import {Home} from './src/component/screen/HomeScreen/home';

const App = () => {
  return (
    <SafeAreaView>
      <ApolloProvider client={client}>
        <Home />
        <Button
          title="Enviar"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
