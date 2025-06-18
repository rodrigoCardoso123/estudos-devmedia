import React from "react";
import { View,Text,Image, StyleSheet} from "react-native";

import Logo from '../../assets/sith.jpg'
import estilo from "./estilos.js";

export default function TrioLogia3(){
    return(
        <View style={estilo.container} >
            <Text style={estilo.titulo}>
            A história de Rey
            </Text>
            <Image style={estilo.img}  source={Logo}/>

            <Text style={estilo.texto}>
            Trilogia sequela. Episódios VII, VIII e IX
            </Text>

            <Text style={estilo.texto}>
            Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia. 
            </Text>

        </View>
    );
}  