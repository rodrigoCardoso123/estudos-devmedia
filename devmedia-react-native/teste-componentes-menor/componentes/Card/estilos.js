import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
      backgroundColor: '#0A1B35',
      alignItems: "center",
      justifyContent: "center",
      height: 280,
    },
    img:{
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
    },
    container_Texto:{
      backgroundColor: '#FFF',
      width: 282,
      height:70,
      borderBottomRightRadius:5,
      borderBottomLeftRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    Titulo:{
      fontSize: 20,
      marginBottom:10,
    },
    Paragrafo:{
      fontSize: 12,
    }
  });
export default estilos;