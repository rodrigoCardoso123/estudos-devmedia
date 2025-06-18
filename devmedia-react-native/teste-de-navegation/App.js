import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from './componentes/TelaInicio/index'
import TrioLogia1 from './componentes/TrioLogia1/index'
import TrioLogia2 from './componentes/TrioLogia2/index';
import TrioLogia3 from './componentes/TrioLogia3/index';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component = { TelaInicio } />
        <Stack.Screen name="Trilogia 1" component = { TrioLogia1 } />
        <Stack.Screen name="Trilogia 2" component = { TrioLogia2 } />
        <Stack.Screen name="Trilogia 3" component = { TrioLogia3 } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

