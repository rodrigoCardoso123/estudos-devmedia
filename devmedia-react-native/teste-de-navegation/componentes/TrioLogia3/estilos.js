import { StyleSheet} from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    img:{
        width: 200,
        height: 200,
        marginBottom: 30,
        
    },
    texto:{
        color:'#f3e344',
        textAlign: 'center',
        marginBottom: 19,
        paddingHorizontal: 10,
    },
    titulo:{
        fontSize: 19,
        color:'#f3e344',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 15,
        fontWeight: '700',
    }
});
export default estilo;