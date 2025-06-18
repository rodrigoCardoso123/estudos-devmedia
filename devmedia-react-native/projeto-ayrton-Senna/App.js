import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

import inicio from './componentes/Tela inicio/index';
import sobre from './componentes/Sobre/index';
import vitoria from './componentes/Vitoria/index';

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor:'red',
          tabBarInactiveBackgroundColor: '#EECB01',
          tabBarInactiveTintColor: 'black',
          headerStyle:{
            backgroundColor: '#EECB01',
          },

        }}
        >
          <Tabs.Screen 
          name='Home' 
          component={inicio}
          options={{
            tabBarIcon: ({color}) =>(
              <Entypo name="home" size={24} color={color} />
            )
          }}
          />
          <Tabs.Screen 
          name='Sobre' 
          component={sobre}
          options={{
            tabBarIcon: ({color}) =>(
              <AntDesign name="questioncircleo" size={24} color={color} />
            )
          }}
          />
          <Tabs.Screen 
          name='Vitorias' 
          component={vitoria}
          options={{
            tabBarIcon: ({color}) =>(
              <AntDesign name="Trophy" size={24} color={color} />
            )
          }}
          />
        </Tabs.Navigator>
    </NavigationContainer>
  );
}

