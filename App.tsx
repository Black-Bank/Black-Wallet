import * as React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/component/client/provider/clientprovider';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/component/routes/routes';
import AuthProvider from './src/contexts/auth';
import Toast from 'react-native-toast-message';
import {SplashScreen} from './src/screen/SplashScreen/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

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
