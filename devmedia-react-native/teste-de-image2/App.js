import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';
import Capa from './assets/capa.png'

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={ estilos.titulo }>Guerra do Amanhã</Text>
      <Text style={ estilos.descricao }>Gêneros: Ação e ficção</Text>

      <Image
        source={ Capa }
        style={ estilos.img }
      />
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
  },
  img:{
    margin: 15,
    width: 290,
    height: 290,
  },
  titulo: {
    marginBottom: 10,
  }

});
