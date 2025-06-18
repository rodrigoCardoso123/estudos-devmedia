import react from "react";
import { View,ScrollView,Image,ImageBackground,StyleSheet,Text } from "react-native";
import Fundo from '../../assets/fundo.jpg'
import Capa from '../../assets/foto-capa.jpg'

import estilos from "./estilos";

export default function inicio(){
    return(
        <ImageBackground 
        source={Fundo}
        style={estilos.img}
        blurRadius={3}
        resizeMode="cover"
        >
                <Image source={Capa} style={estilos.foto}/>
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Ayrton Senna</Text>
                <Text style={estilos.texto}>Atráves desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
            </View>
        </ImageBackground>
    )
}
