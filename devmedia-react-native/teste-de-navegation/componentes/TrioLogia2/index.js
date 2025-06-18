import React from "react";
import { View,Text,Image, StyleSheet} from "react-native";

import Logo from '../../assets/lucas-skywalker.jpg'
import estilo from "./estilos.js";

export default function TrioLogia2(){
    return(
        <View style={estilo.container} >
            <Text style={estilo.titulo}>
            A história de Luke Skywalker
            </Text>
            <Image style={estilo.img}  source={Logo}/>

            <Text style={estilo.texto}>
            Trilogia original. Episódios IV, V e VI
            </Text>

            <Text style={estilo.texto}>
            Essa foi primeira trilogia a surgir porém sua história se passa após a trilogia prequela. 
            </Text>

            <Text style={estilo.texto}>
            Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Leia e se batalha com o grande vilão Darth Vader.
            </Text>
        </View>
    );
}  