import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#107C0F',
        marginBottom: 10,
    },
    subtitulo:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
        color: '#fff'
    },
    texto:{
        textAlign: 'center',
        width: 340,
        color: '#fff',
        marginBottom: 10,
    },
    imgbanner:{
        width: 290,
        height: 150,
        borderRadius: 5,
    },
})
export default estilos;