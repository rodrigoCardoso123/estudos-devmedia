import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import Filme from '../../assets/Filme.png'

export default function Conteudo() {
  return (
    <View style={estilos.container}>
      <Text style={ estilos.titulo }>Sobre o Ator</Text>

      <Text style={ estilos.subtitulo }>Sua vida</Text>
      <Text style={ estilos.paragrafo }>Nascido em Washington, DC, 21 de dezembro de 1948</Text>
      <Text style={ estilos.paragrafo }>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>
    
      <Text style={ estilos.subtitulo }>Início da carreira</Text>
      <Text style={ estilos.paragrafo }>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>
      <Image source={ Filme } style={ estilos.imagem }/>
    </View>
  );
}
const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  imagem:{
    width: 250,
    height:100,
    marginBottom: 15,
    marginTop: 15,
  },
  titulo:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 8,
  },
  subtitulo:{
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  paragrafo:{
    marginBottom: 5,
  }
});