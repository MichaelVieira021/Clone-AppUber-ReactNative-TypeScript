import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerCorridaRecente: {
        flexDirection: "row",
        // justifyContent: "start",
        // alignSelf: "center",
        alignItems: "center",
        marginTop: 32,
        
    },

    iconClockRecentes: {
        color: "#4b4b4b",
    },
    
    enderecoRecente: {
        paddingLeft: 20,
    },

    linhaDivisao:{
        height: 1, 
        width: "100%", 
        backgroundColor: '#eeeeee', 
        marginBottom: 12,
        marginTop: -12
    },

    destino:{
        fontSize: 16,
        fontWeight: "500",
    },

    endereco:{
        fontSize: 14,
        color: "#4b4b4b",
    },

})