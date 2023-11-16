import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from './styles'
import iconReload from '../../assets/reagendar/icon.png'
        
        
        
export const Reagendar = () => {
    return (
        <TouchableOpacity style={styles.reagendar}>
            <Image source={iconReload} style={styles.imagem}></Image>
            {/* <Ionicons name="reload" size={16} color="black" style={{marginRight: 8}}/> */}
            <Text style={{fontSize: 14, letterSpacing: -0.5}}>Reagendar</Text>

        </TouchableOpacity>
    )
}      
        
        