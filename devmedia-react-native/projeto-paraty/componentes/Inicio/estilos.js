import { StyleSheet} from "react-native";

const estilos = StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#e1e3e4'
    },
    box:{
        maxHeight: 500,
        backgroundColor: '#FDFDFD',
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },
    img:{
        height: 150,
        width:280,
        marginBottom: 10,
        marginTop: 10,
    },
    titulo:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto:{
        textAlign: 'center',
        marginBottom: 10,
    },
    boxbotao:{
        marginBottom: 10,
    },
})
export default estilos;