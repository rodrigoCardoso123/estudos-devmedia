import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Barra from './componentes/barraTitulo';
import Card from './componentes/Card';
import Conteudo from './componentes/conteudo';

export default function App() {
  return (
    <View style={estilos.container}>
      <Barra/>
      <Card/>
      <Conteudo/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c4491',
  },
});
