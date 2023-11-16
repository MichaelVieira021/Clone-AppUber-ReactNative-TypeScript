import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        // flex: 1,
        backgroundColor: "#ffff"
    },


    //Titulo-----------------------------------------------------------
    containerTituloAtividades: {
        marginTop: 25,
        marginBottom: 15,
        width: '91%',
        alignSelf: "center"
    },

    textTitulo: {
        fontSize: 38,
        fontWeight: "700",
        letterSpacing: -1.3,
        // marginTop: 15,
        marginBottom: 28
    },

    containerAnteriores: {
        width: "100%", 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBotton: 20
        
    },

    textAnteriores:{
        fontSize: 21,
        fontWeight: "600",
        letterSpacing: -0.8,
    },

    containerIcon: {
        backgroundColor: "#e8e8e8",
        width: 35,
        height: 35,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },



    //Map----------------------------------------------------

    containerMap: {
        width: "91%",
        height: 325,
        borderWidth: 2,
        borderColor: "#e8e8e8",
        borderRadius: 12,
        padding: 14,
        alignSelf: "center",
        justifyContent: "space-between"

    },
    
    imgMap: {
        width: "100%", 
        height: 150, 
        resizeMode: "cover",
        borderRadius: 12,
        // marginBottom: 20
    },

    tituloDestino: {
        fontSize: 22,
        fontWeight: "600",
        letterSpacing: -1.3
    },

    dataValor: {
        marginTop: 6,
        color: '#5b5b5b',
        fontSize: 15
    },

    reagendar: {
        backgroundColor: '#DCDCDC',
        width: "40%",
        height: 35,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
})