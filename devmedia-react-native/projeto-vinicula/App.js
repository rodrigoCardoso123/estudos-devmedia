import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import Inicio from './componentes/Inicio/index.js'
import Catalogo from './componentes/Catalogo/index.js'
import Contato from './componentes/Contato/index.js'

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#3F0002',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#AA867C',
          headerStyle:{
            backgroundColor: '#3F0002',
            height: 90,
          },
          headerTitleStyle:{
            color: '#fff',
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
      >
        <Tabs.Screen 
          name='inicio' 
          component={Inicio}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={24} color={color} />
            )
          }}
        />

        <Tabs.Screen 
          name='Catalogo' 
          component={Catalogo}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="wine-bottle" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name='Contato' 
          component={Contato}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="user" size={23} color={color} />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

