import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
    sugestoes:{
        alignSelf: "center",
        width: "92%",
        height: "16%",
        marginTop: 45,
        marginBottom: -4
    },
    
    sugestoesText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 19,
        marginRight: 20,
        marginLeft:6
    },
    
    sugestoesOpcoes: {
        width: undefined,
        flexDirection: 'row', 
        justifyContent: "space-between"
    },
    
    divOpcao:{
        width: "30%",
        height: 90,
        backgroundColor: "#e8e8e8",
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: 4,
        paddingTop:14
    },

    containerImagem: {
        width:45, 
        height: 45, 
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
})