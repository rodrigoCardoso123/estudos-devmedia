import react from "react";
import { View,Text,StyleSheet,Image,ImageBackground } from "react-native";
import Capa from '../../assets/capa.jpg'
import estilos from "./estilos.js";

export default function home(){
    return(
        <ImageBackground 
        source={Capa} 
        style={estilos.img}
        blurRadius={15}
        resizeMode="cover"
        >
            <Text style={ estilos.titulo }>Adega Preferida</Text>  
            <Text style={ estilos.subtitulo }>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
    );
};
