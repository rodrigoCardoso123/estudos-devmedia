import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        paddingHorizontal: 13,
    },
    titulo:{
        fontSize: 25,
        color: '#3F0002',
        fontWeight: 'bold',
        marginBottom: 15 ,
        marginTop: 15,
    },
    subtitulo:{
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 15,
    },
    cardVinho:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AA867C',
        borderRadius: 5,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    vinhoImg:{
        width: 60,
        height: 120,
        marginRight: 10,
    },
    cardTitulo:{
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    cardBoxDescricao:{
        flex: 1
    },
    cardDescricao:{
        color: '#fff'
    }
})
export default estilos ;