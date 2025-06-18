import React from "react";
import { View,Text,Image, StyleSheet} from "react-native";

import Logo from '../../assets/darth-vader.jpeg'
import estilo from "./estilos.js";

export default function TrioLogia1(){
    return(
        <View style={estilo.container} >
            <Text style={estilo.titulo}>
              A história do Darth Vader
            </Text>
            <Image style={estilo.img}  source={Logo}/>

            <Text style={estilo.texto}>
            Trilogia prequela. Episódios I, II e III
            </Text>

            <Text style={estilo.texto}>
            Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem crinológica da série Star Wars. Nela é contada a história do grande vilão Darth Vader.
            </Text>

            <Text style={estilo.texto}>
            Através dessa trilogia você vai saber de onde ele veio e quem ele é.
            </Text>
        </View>
    );
}  