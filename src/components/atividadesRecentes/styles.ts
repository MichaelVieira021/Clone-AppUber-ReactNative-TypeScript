import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flexDirection: "row", 
        width: "100%", 
        justifyContent: "space-between", 
        marginTop: 20
    },
    
    containerImagem: {
        width:47, 
        height: 47, 
        overflow: 'hidden'
    },

    textContainerImagem: {
        padding: 5, 
        fontWeight: '500'
    },

    imagem: {
        width:"100%", 
        height: "100%", 
        resizeMode: 'contain'
    },

    divOpcao:{
        width: "18%",
        height: 60,
        backgroundColor: "#e8e8e8",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center",

    },

    titulo:{
        fontSize: 16,
        color: "black",
        fontWeight: "600",
        letterSpacing: -0.5
    },

    dataValor: {
        marginTop: 4,
        color: "#5b5b5b",
        fontSize: 15,
        letterSpacing: -1
    },

    linhaDivisao:{
        height: 1, 
        width: "100%", 
        backgroundColor: "#e8e8e8", 
        marginTop: 16
    },

})