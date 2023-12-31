import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles";

export const ButtonBuscar = () => {

    return (

        <View style={styles.inputBuscar}>
        
            <View style={{flexDirection: 'row', gap: 12}}>
                <Entypo name="magnifying-glass" size={22} color="black" style={styles.iconGlass}/>
                <TextInput style={styles.textBuscar} placeholder="Para onde?" placeholderTextColor='#4c4c4c'></TextInput>
            </View>
        
            <TouchableOpacity activeOpacity={0.6} style={styles.containerAgora}>
                <AntDesign name="clockcircle" size={16} color="black" style={styles.iconClock}/>
                <Text style={styles.textAgora}>Agora</Text>
                <FontAwesome5 name="angle-down" size={16} color="black" style={styles.seta}/>
            </TouchableOpacity>
        
        </View>
    )
}