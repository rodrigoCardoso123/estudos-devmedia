import React from "react";
import { View,Text,Image,StyleSheet} from "react-native";

import Passeios01 from '../../assets/passeio01.png'
import Passeios02 from '../../assets/passeio02.png'
import Passeios03 from '../../assets/passeio03.png'

import estilos from "./estilos.js";

export default function Passeios(){
    return(
        <View style={estilos.container}>
         
            <Text style={estilos.titulo}>Passeios em Paraty</Text>

            <Text style={estilos.texto}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:</Text>

            <View style={estilos.card} >
                <Text style={estilos.boxtitulo}>Tirolesa</Text>
                <Image source={Passeios01} style={estilos.img}/>
            </View>

            <View style={estilos.card}>
                <Text style={estilos.boxtitulo}>Rafting</Text>
                <Image source={Passeios02} style={estilos.img}/>
            </View>

            <View style={estilos.card}>
                <Text style={estilos.boxtitulo}>Canoagem no mangue</Text>
                <Image source={Passeios03} style={estilos.img}/>
            </View>
         
        </View>
    );
}; 