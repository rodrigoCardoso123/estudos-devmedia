import React from "react";
import { View,Text,Image,StyleSheet,Button } from "react-native";

import IMG from '../../assets/01.png'
import estilos from "./estilos";

export default function Inicio(props){
    return(
        <View style={estilos.container}>
          <View style={estilos.box}>
            <Text style={estilos.titulo} >Paraty</Text>

            <Text style={estilos.texto}>Saiba o que visitar em paraty.</Text>

            <Image style={estilos.img} source={IMG}/>

            <View style={estilos.boxbotao} >
               <Button title="Ver Restaurantes" onPress={() => props.navigation.navigate('Restaurantes')} color='#372d00'/>
            </View>
            <View style={estilos.boxbotao}>
                <Button title="Ver Passeios" onPress={() => props.navigation.navigate('Passeios')} color='#372d00' />
            </View>
            <View style={estilos.boxbotao}>
                <Button title="Ver Hospedagem" onPress={() => props.navigation.navigate('Hospedagem')} color='#372d00' />
            </View>
          </View>
        </View>
    );
};
