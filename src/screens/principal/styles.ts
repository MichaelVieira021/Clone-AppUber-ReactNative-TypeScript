import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    //BUSCADOR-----------------------------------------------------------
    containerBuscar: {
        backgroundColor: '#ffff',
        height: 88,
        width: '100%',
        alignItems: "center",
        marginBottom: 0
    },

    //CORRIDAS RECENTES----------------------------------------------------

    containerRecentes:{
        width: "92%",
        marginLeft: "6%",
        alignSelf: Platform.OS === 'ios'? "center" : "auto",
    },

    //SUGESTOES ------------------------------------------------------------

    sugestoes:{
        alignSelf: "center",
        width: "92%",
        marginTop: 39,
        marginBottom: 15
    },

    sugestoesText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        marginRight: 20,
        marginLeft:6
    },

    //SLIDE MODEL 2-----------------------------------------------------------

    containerSlideModel2: {
        marginBottom: 30
    },

    tituloSlideModel2: {
        fontWeight: 'bold', 
        fontSize: 20, 
        marginBottom: 12, 
        marginLeft: "5%"
    },
})

export default styles;