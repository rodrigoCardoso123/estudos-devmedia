import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Capa from './assets/capa.png'
import Foto from './assets/foto.png'
export default function App() {
  return (
  <View style={estilos.container}>
    <View style={estilos.containerIMG}>
      <Image style={estilos.img} source={Capa}/>
    </View>

    <View style={estilos.containerTexto}>
    <Image style={estilos.Foto} source={Foto}/>

    <Text style={estilos.titulo} >Rodrigo Cardoso De Albuquerque</Text>

    <Text>Estudando React-native pela Devmedia</Text>
    </View>
    <StatusBar style="auto" />
  </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   alignItems: 'center'
  },
  containerIMG:{
    display: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  containerTexto:{
    display: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 360,
    maxHeight: 350,
  },
  Foto:{
    width:100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  titulo:{
    fontSize: 18,
    marginBottom: 10,
  }
});
