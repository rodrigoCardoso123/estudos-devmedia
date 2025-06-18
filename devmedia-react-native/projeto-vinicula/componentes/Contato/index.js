import react from "react";
import { View,Text,StyleSheet,Image,ScrollView } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import estilos from "./estilos";

export default function Contato(){
    return(
            <ScrollView>
                <View style={estilos.container}>
                <View style={estilos.card}>
                    <MaterialIcons name="phone-in-talk" style={estilos.icones}/>
                    <Text style={estilos.h1}>Telefone:</Text>
                    <Text style={estilos.h2}>+55 21 000000000</Text>
                </View>
                <View style={estilos.card}>
                <MaterialCommunityIcons name="home-variant-outline" style={estilos.icones} />
                    <Text style={estilos.h1}>Endereço:</Text>
                    <Text style={estilos.h2}>Av. 123, 222 - Rio de Janeiro RJ</Text>
                </View>
                <View style={estilos.card}>
                    <MaterialCommunityIcons name="gmail" style={estilos.icones}/>
                    <Text style={estilos.h1}>Email:</Text>
                    <Text style={estilos.h2}>preferida@adega.com.br</Text>
                </View>
                <View style={estilos.card}>
                    <AntDesign name="instagram" style={estilos.icones}/>
                    <Text style={estilos.h1}>Instagram:</Text>
                    <Text style={estilos.h2}>@adegapreferida</Text>
                </View>
                </View>
            </ScrollView>
    );
};

