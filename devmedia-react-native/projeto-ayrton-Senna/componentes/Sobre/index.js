import react from "react";
import { View,ScrollView,Image,ImageBackground,StyleSheet,Text } from "react-native";
import Capa from '../../assets/foto-capa.jpg'
import chuva from '../../assets/rei-da-chuva.png'
import monaco from '../../assets/rei-de-monaco.png'
import silva from '../../assets/silvastone.png'
import preparacao from '../../assets/preparacao.png'

import estilos from "./estilos.js";

export default function sobre(){
    return(
        <View style={estilos.container}>
            <View style={estilos.containerTexto}>
                <Text style={estilos.tituloCapa}>Ayrton Senna</Text>
                <Image 
                source={Capa}
                style={estilos.imgCapa} />
                <Text style={estilos.textoCapa}>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
            </View>
            
            <ScrollView>
                <View style={estilos.card}>
                    <Image source={chuva} style={estilos.imgDescricao}/>
                    <View style={estilos.containerCardTexto}>
                        <Text style={estilos.tituloCard}>Rei da chuva</Text>
                        <Text>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                    </View>
                </View>
                <View style={estilos.card}>
                    <Image source={monaco} style={estilos.imgDescricao}/>
                 <View style={estilos.containerCardTexto}>
                    <Text style={estilos.tituloCard}>Rei da Mônaco</Text>
                    <Text>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
                 </View>
                </View>
                <View style={estilos.card}>
                    <Image source={silva} style={estilos.imgDescricao}/>
                  <View style={estilos.containerCardTexto}>
                    <Text style={estilos.tituloCard}>Silvastone</Text>
                    <Text>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
                  </View>
                </View>
                <View style={estilos.card}>
                    <Image source={preparacao} style={estilos.imgDescricao}/>
                  <View style={estilos.containerCardTexto}>
                    <Text style={estilos.tituloCard}>Preparação</Text>
                    <Text>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
                  </View>
                </View>
            </ScrollView>
        </View>
    )
}

