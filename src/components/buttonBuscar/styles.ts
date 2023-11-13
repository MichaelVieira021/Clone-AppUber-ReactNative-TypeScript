import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    inputBuscar:{
        backgroundColor: '#e8e8e8',
        width: '92%',
        height: 53,
        borderRadius: 100,
        paddingLeft: 15,
        paddingRight: 8,
        marginTop: 49,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    textBuscar:{
        fontSize: 20,
        color: '#4c4c4c',
        fontWeight: '600', 
        letterSpacing: -1.5,
    },

    containerAgora: {
        width: '39%',
        height: 38,
        backgroundColor: '#ffff',
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 100,
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15
    },

    textAgora: {
        fontSize: 16,
        fontWeight: "600",
        marginRight:8
    },

    iconGlass: {
        color: "#030303",
    },

    iconClock: {
        color: "#030303",
    },

    seta: {
        color: "#030303",
    },
})