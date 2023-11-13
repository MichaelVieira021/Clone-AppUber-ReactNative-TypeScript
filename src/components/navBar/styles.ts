import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    barraNav: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 62,
      borderTopWidth: 1,
      borderTopColor: '#DCDCDC', 
    },

    tab: {
      flex: 1,
      alignItems: 'center',
      textAlign: "center",
      justifyContent: "space-between",
    },

    label: {
    // color: '#3d3d3d',
    fontSize: 12,
    fontWeight: "400",
    marginTop: 5,
    marginBottom: 0,
    position: "relative"
  },
})