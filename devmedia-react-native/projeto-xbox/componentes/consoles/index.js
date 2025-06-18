import React from "react";
import { Text,Image,ImageBackground,View,StyleSheet,ScrollView } from "react-native";

import console from '../../assets/console.jpeg'
import console2 from '../../assets/console2.jpeg'

import estilos from "./estilos";

export default function consoles(){
    return(
    <ScrollView>
        <View style={estilos.container} >
            <View style={estilos.card}>
                <Image source={console} style={estilos.img} />
                <Text style={estilos.h1}>XBOX SERIES S</Text>

                <Text style={estilos.h2}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>

                <Text style={estilos.texto}>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.</Text>
            </View>

            <View style={estilos.card}>
                <Image source={console2} style={estilos.img}/>
                <Text style={estilos.h1}>XBOX SERIES X</Text>

                <Text style={estilos.h2}>O Xbox mais rápido e poderoso de todos os tempos.</Text>

                <Text style={estilos.texto2}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
            </View>
        </View>
    </ScrollView>
    )
}; 