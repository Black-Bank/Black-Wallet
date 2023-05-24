/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {render} from '@testing-library/react-native';
import {WalletListScreen} from '../../WalletListScreen/WalletListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {client} from '../../../component/client/provider/clientprovider';
import {MockedProvider} from '@apollo/client/testing';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('it should render wallet list screen', () => {
  it('render wallet list screen', async () => {
    render(
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MockedProvider>
            <WalletListScreen />
          </MockedProvider>
        </NavigationContainer>
      </ApolloProvider>,
    );
  });
});
