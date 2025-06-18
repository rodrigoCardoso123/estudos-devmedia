import React from "react";
import { Text,Image,ImageBackground,View,StyleSheet,ScrollView } from "react-native";

import jogo1 from '../../assets/jogo-2.png'
import forza from '../../assets/forza.jpeg'
import halo from '../../assets/halo.webp'

import estilos from "./estilos.js";

export default function jogos(){
    return(
    <ScrollView  backgroundColor='#1E1E1E'>
     <View style={estilos.container} >
            <Text style={estilos.h1} >Jogos em 4k</Text>

            <Text style={estilos.texto}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

        <ImageBackground style={estilos.img} source={forza} resizeMode="cover">
            <View style={estilos.boxtexto}>
                <Text style={estilos.textocard}>Forza Horizon 5</Text>
            </View>   
        </ImageBackground>
        <Text style={estilos.textojogo}>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.</Text>

        <ImageBackground style={estilos.img} source={jogo1} resizeMode="cover">
            <View style={estilos.boxtexto}>
                <Text style={estilos.textocard}>Cyberpunk 2077</Text>
            </View>   
        </ImageBackground>
        <Text style={estilos.textojogo}>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>

        <ImageBackground style={estilos.img} source={halo} resizeMode="cover">
            <View style={estilos.boxtexto}>
                <Text style={estilos.textocard}>Halo 5</Text>
            </View>   
        </ImageBackground>
        <Text style={estilos.textojogo}>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>

     </View>
    </ScrollView>
    )
}; 