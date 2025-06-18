import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './componentes/Tela Inicial/index';
import console from './componentes/consoles/index'
import jogos from './componentes/Jogos/index';
import xcloud from './componentes/Xcloud/index';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={Inicio}/>
        <Stack.Screen name='Console' component={console}/>
        <Stack.Screen name='Jogos' component={jogos}/>
        <Stack.Screen name='xcloud' component={xcloud}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
