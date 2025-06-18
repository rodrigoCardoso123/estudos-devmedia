import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';

import Amazonia from './assets/floresta-amazonica.png'
import Congo from './assets/floresta-congo.png'
import Taiga from './assets/floresta-taiga.png'

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={ estilos.titulo }>Florestas pelo mundo</Text>

      <Image source={Amazonia}
            style={estilos.img} />
      <Text style={estilos.margim}>Floresta Amazônica (América do Sul)</Text>

      <Image source={Congo}
            style={estilos.img} />
      <Text style={estilos.margim}>Floresta do congo (África)</Text>

      <Image source={Taiga}
            style={estilos.img} />
      <Text style={estilos.margim}>Floresta (Hemisfério Norte)</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 32,
  },
  titulo:{
    fontSize: 20,
    marginBottom: 25,
  },
  img:{
    width: 300,
    height: 150,
  },
  margim:{
    marginBottom: 15,
    marginTop:10,
  }
});
