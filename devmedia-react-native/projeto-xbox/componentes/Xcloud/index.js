import React from "react";
import { Text,Image,ImageBackground,View,StyleSheet} from "react-native";

import nuvem from '../../assets/fundo-xcloud.png'
import xcloud2 from '../../assets/xcloud-2.png'

import estilos from "./estilos.js";

export default function xcloud(){
    return(
     <View style={estilos.container} >
            <ImageBackground source={nuvem} style={estilos.img} >
                <Text style={estilos.titulo}>Xbox Cloud Gaming</Text>

                <Text style={estilos.subtitulo}>Serviço de streaming de jogos</Text>

                <Text style={estilos.texto}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>

                <Text style={estilos.texto}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>

                <Text style={estilos.texto}>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>

                <Image source={xcloud2}  style={estilos.imgbanner} />
            </ImageBackground>
     </View>
    )
}; 