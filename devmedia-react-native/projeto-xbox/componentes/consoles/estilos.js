import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
       
    },
    img:{
        height: 250,
        width: 250 ,
        marginTop: 25,
        marginBottom: 15,
    },
    h1:{
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#107C0F',
        marginBottom: 10,
    },
    h2:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    texto:{
        textAlign: 'center',
        width: 340,
    },
    texto2:{
        textAlign: 'center',
        width: 340,
    }
}) 
export default estilos;