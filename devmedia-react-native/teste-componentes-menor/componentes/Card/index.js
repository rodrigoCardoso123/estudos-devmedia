import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import Ator from '../../assets/Foto.png'
import estilos from "./estilos";

export default function Card() {
  return (
    <View style={estilos.container}>
        <Image source={Ator} style={estilos.img} />
      <View style={estilos.container_Texto}>
        <Text style={estilos.Titulo}>Samuel L. Jackson</Text>
        <Text style={estilos.Paragrafo}>Ator Produtor Norte-Americano</Text>
      </View>
    </View>
  );
}
