import React from "react";
import { View,Text,Image,StyleSheet} from "react-native";

import Restaurante01 from '../../assets/restaurante01.png'
import Restaurante02 from '../../assets/restaurante02.png'
import Restaurante03 from '../../assets/restaurante03.png'

import estilos from "./estilos.js";

export default function Restaurantes(){
    return(
        <View style={estilos.container}>
         
            <Text style={estilos.titulo}>Bares e Restaurantes</Text>

            <Text style={estilos.texto}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
            Armazén Mar</Text>

            <View style={estilos.card} >
                <Image source={Restaurante01} style={estilos.img}/>
                <Text style={estilos.boxtitulo}>Armazén Mar</Text>
                <Text>Localização: Rod Rio-Santos</Text>
            </View>

            <View style={estilos.card}>
                <Image source={Restaurante02} style={estilos.img}/>
                <Text style={estilos.boxtitulo}>Bendita's Restaurante</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>

            <View style={estilos.card}>
                <Image source={Restaurante03} style={estilos.img}/>
                <Text style={estilos.boxtitulo}>SEREIA DO MAR PIZZA-BAR</Text>
                <Text>Localização: Praia do Jabaquara</Text>
            </View>
         
        </View>
    );
}; 