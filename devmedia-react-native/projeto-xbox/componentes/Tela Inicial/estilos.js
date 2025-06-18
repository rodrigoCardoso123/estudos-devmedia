import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C2E2D'
    },
    img:{
        height: 80,
        width: 80,
        borderRadius: 45,
        marginBottom: 10,
    },
    titulo:{
        color:'#107C0F',
        fontWeight: '900',
        fontSize: 26,
        marginBottom: 10,
    },
    texto:{
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    card:{
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 100,
        maxWidth: 210,
        height: '100%',
        width: '100%',
        backgroundColor: '#107C0F',
        flexDirection: 'row',
        marginBottom: 25,
        borderRadius: 5,
        paddingVertical: 10,
    },
    imgcard:{
        width: 80,
        height: 80,
        marginRight: 10,
    },
    textoCard:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        width: 75,
    }
})
export default estilos;