import React from "react";
import { View,Text,Image,Pressable,StyleSheet } from "react-native";

import imgxbox from '../../assets/logo.png'
import jogos from'../../assets/jogo-1.png'
import xcloud from '../../assets/xcloud-1.png'
import console from '../../assets/console.jpeg'

import estilos from './estilos.js'


export default function Inicio(props){
    return(
        <View style={estilos.container}>
            <Image style={estilos.img} source={imgxbox} />
            <Text style={estilos.titulo} >Xbox</Text>

            <Text style={estilos.texto}>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

            <Pressable 
                style={estilos.card}
                onPress={() => props.navigation.navigate('Console') }
            >   
                <Image source={console} style={estilos.imgcard}/>
                <Text style={estilos.textoCard}>Conheça os consoles</Text>
            </Pressable>

            <Pressable 
                style={estilos.card}
                onPress={() => props.navigation.navigate('Jogos')}
            >
                <Image style={estilos.imgcard} source={jogos}/>
                <Text style={estilos.textoCard}>Conheça os jogos</Text>
            </Pressable>

            <Pressable 
                style={estilos.card}
                onPress={() => props.navigation.navigate('xcloud') }
            >
                <Image source={xcloud} style={estilos.imgcard} />
                <Text style={estilos.textoCard}>Conheça o xCloud</Text>
            </Pressable>
        </View>
    )
} 