import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/HomeScreen/home';
import {DetailsScreen} from '../screen/DetailsScreen/details';
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'BLACK',
          headerTitleAlign: 'center', //moved this from headerStyle property
          headerStyle: {
            backgroundColor: '#3c0f69',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
