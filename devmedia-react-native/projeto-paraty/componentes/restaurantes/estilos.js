import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#FECDA5',
        paddingHorizontal: 10,
    },
    img:{
        width: 280,
        height: 60,
        marginBottom: 8,
    },
    card:{
        maxHeight: 500,
        backgroundColor: '#FDFDFD',
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
        marginBottom: 10,
    },
    titulo:{
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    texto:{
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 10,
       
    },
    boxtitulo:{
        fontSize: 15,
        fontWeight: 'bold'
    }

})

export default estilos;