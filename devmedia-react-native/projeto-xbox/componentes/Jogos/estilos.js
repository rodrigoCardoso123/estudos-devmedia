import { StyleSheet } from "react-native";
const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
       
    },
    h1:{
        fontSize: 25,
        color: '#107C0F',
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 15,
    },
    texto:{
        textAlign: 'center',
        color: '#fff',
        marginBottom: 25,
    },
    img:{
        height: 180,
        width: 300,
        marginBottom: 5,
    },
    textocard:{
        textAlign: 'left',
        color: '#fff', 
        fontSize: 18,
        fontWeight: 'bold',
        width: '100%',
    },
    boxtexto:{
        height: 35,
        backgroundColor:'rgba(0, 0, 0, 0.45)',
        paddingHorizontal: 10,
        paddingTop: 5,
    },
    textojogo:{
        textAlign: 'justify',
        color: '#fff',
        marginBottom: 35,
        width: 300,
    },
})
export default estilos;