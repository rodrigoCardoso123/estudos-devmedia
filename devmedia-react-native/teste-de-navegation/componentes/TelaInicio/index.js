import React from "react";
import { View,Text,Image,Button, StyleSheet } from "react-native";

import Logo from '../../assets/logo.jpg'
import estilo from "./estilos.js";

export default function Inicio(props){
    return(
        <View style={estilo.container}>
            <Image style={estilo.img} source={Logo}/>

            <Text style={estilo.titulo}>
            Você sabe qual é a ordem cronológica da franquia Star Wars?
            </Text>

            <Text style={estilo.texto}>
            Os principais filmes da franquia estão divididos em e trilogias. Clique no botão a seguir para conferir.
            </Text>

            <Button title="Ver 1ª Trilogia" onPress={() => props.navigation.navigate("Trilogia 1")} color="#372d00"/>

            <Button title="Ver 2ª Trilogia" onPress={() => props.navigation.navigate("Trilogia 2")} color="#372d00"/>
            
            <Button title="Ver 3ª Trilogia" onPress={() => props.navigation.navigate("Trilogia 3")} color="#372d00"/>
        </View>
    );
}  