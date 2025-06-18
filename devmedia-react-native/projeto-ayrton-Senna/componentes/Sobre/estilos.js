import { StyleSheet} from "react-native";

const estilos= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    imgCapa:{
        width:320,
        height:150,
        marginVertical: 10,
        alignItems: 'center',
    },
    containerTexto:{
        padding: 15,
    },
    tituloCapa:{
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'left',
    },
    textoCapa:{
        textAlign:'left',
        color: '#757575',
    },
    imgDescricao:{
        width: 100,
        height: 'auto',
    },
    card:{
        borderColor: '#black',
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 13,
    },
    containerCardTexto:{
        width: 250,
        padding: 10,
    },
    tituloCard:{
        fontSize: 17,
        fontWeight: 'bold',
    },
})

export default estilos;