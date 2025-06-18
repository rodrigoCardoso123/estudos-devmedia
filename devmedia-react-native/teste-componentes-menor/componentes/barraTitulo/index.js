import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import estilos from './estilo';

export default function barra() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>ATOR FAMOSO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

