import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    img:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto:{
        width: 230,
        height: 230,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 150,
        marginBottom: 15,
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0, 0, 0, 0.79)',
        padding: 5,
        borderRadius: 5,
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    texto:{
        color: '#fff',
        textAlign: 'center',
        width: 260,
        marginBottom: 10,
        marginHorizontal: 15,
    }

})
export default estilos;