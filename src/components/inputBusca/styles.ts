import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ffff',
        height: 88,
        width: '100%',
        alignItems: "center",
        marginBottom: 0
    },

    textAgora: {
        fontWeight: "600",
        paddingLeft: 22,
        
    },

    input:{
        backgroundColor: '#e8e8e8',
        width: '90%',
        height: 60,
        borderRadius: 100,
        paddingLeft: 55,
        marginTop: 25,
        fontSize: 22,
        color: '#4c4c4c',
        fontWeight: 'bold',
        justifyContent: "center",
        letterSpacing: -1,
    },

    inputDentro: {
        width: '29%',
        height: 38,
        backgroundColor: '#ffff',
        position: 'absolute',
        right: 38,
        top: 37,
        padding: 16,
        borderRadius: 100,
        justifyContent: "center"
    },

    // ICONS ---------------------------------------
    iconGlass: {
        position: 'absolute',
        left: 36,
        top: 40,
        color: "#030303",
    },

    iconClock: {
        position: 'absolute',
        left: 12,
        top: 12,
        color: "#030303",
    },

    iconClockRecentes: {
        color: "#4b4b4b",
    },

    seta: {
        position: 'absolute',
        right: 14,
        top: 13,
        color: "#030303",
    },

})

export default styles;