import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "./componentes/Inicio/index.js";
import Restaurantes from "./componentes/restaurantes/index.js";
import Passeios from "./componentes/passeios/index.js";
import Hospedagem from "./componentes/Hospedagem/index.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicio' component={Inicio}/>
        <Stack.Screen name='Restaurantes' component={Restaurantes}/>
        <Stack.Screen name='Passeios' component={Passeios}/>
        <Stack.Screen name='Hospedagem' component={Hospedagem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

