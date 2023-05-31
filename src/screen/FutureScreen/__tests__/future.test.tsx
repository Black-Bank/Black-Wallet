/* eslint-disable jest/valid-expect */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FutureScreen} from '../FutureScreen';
import {render} from '@testing-library/react-native';

describe('Future Screen', () => {
  it('should', () => {
    const component = (
      <NavigationContainer>
        <FutureScreen route={route} />
      </NavigationContainer>
    );

    const {getByText} = render(component);

    expect(getByText('Lançamentos Futuros')).toBeTruthy();
  });
});

const route = {
  params: [],
};
