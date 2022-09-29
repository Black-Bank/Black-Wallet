import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screen/HomeScreen/home';
import {DetailsScreen} from '../../screen/DetailsScreen/details';
import {Header} from '../header/header';
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
