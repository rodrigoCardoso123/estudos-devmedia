import React from "react";
import { View,Text,Image,StyleSheet} from "react-native";

import Hospedagem01 from '../../assets/hospedagem01.png'
import Hospedagem02 from '../../assets/hospedagem02.png'
import Hospedagem03 from '../../assets/hospedagem03.png'

import estilos from "./estilos.js";

export default function Hospedagem(){
    return(
        <View style={estilos.container}>
         
            <Text style={estilos.titulo}>Pousadas e Hotéis em Paraty</Text>

            <Text style={estilos.texto}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>

            <View style={estilos.card} >
                <Image source={Hospedagem01} style={estilos.img}/>
                <Text style={estilos.boxtitulo}>Pousada Missanga</Text>
                <Text>Valor médio: R$ 350,00</Text>
                <Text>Localização: Próx. à Av. Roberto Silveira</Text>
            </View>

            <View style={estilos.card}>
                <Image source={Hospedagem02} style={estilos.img}/>
                <Text style={estilos.boxtitulo}>Pousada Morro do Forte</Text>
                <Text>Valor médio: R$ 450,00</Text>
                <Text>Localização: Próximo à Praia - Pontal</Text>
            </View>

            <View style={estilos.card}>
                <Image source={Hospedagem03} style={estilos.img}/>
                <Text style={estilos.boxtitulo}>Pousada Porto Imperial</Text>
                <Text>Valor médio: R$ 550,00</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>
         
        </View>
    );
}; 