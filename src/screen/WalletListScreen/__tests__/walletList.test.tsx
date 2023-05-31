import React from 'react';
import {render} from '@testing-library/react-native';
import {WalletListScreen} from '../../WalletListScreen/WalletListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {client} from '../../../component/client/provider/clientprovider';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({
      name: mockedNavigate,
    }),
  };
});
describe('WalletListScreen', () => {
  const component = (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <WalletListScreen />
      </NavigationContainer>
    </ApolloProvider>
  );
  it('should render wallet list screen', async () => {
    render(component);
  });
});
