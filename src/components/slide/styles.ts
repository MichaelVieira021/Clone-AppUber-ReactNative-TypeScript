import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container:{
    marginTop: 0,
    marginBottom: 10,
  },
  
  slideItem: {
    width: Dimensions.get('window').width,
  },

  slideImage: {
    borderRadius: 16,
    marginHorizontal: 15.5,
    width: "92%",
    height: 138,
    resizeMode: 'cover',
  },
});
  
  export default styles;
