import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';


export const inputBusca = () => {

    <View style={ styles.container }>
        <Entypo name="magnifying-glass" size={26} color="black" style={styles.iconGlass}/>
        <View style={styles.inputDentro}>
          <AntDesign name="clockcircle" size={16} color="black" style={styles.iconClock}/>
          <Text style={styles.textAgora}>Agora</Text>
          <FontAwesome5 name="angle-down" size={16} color="black" style={styles.seta}/>
        </View>
        <TextInput style={styles.input} placeholder='Para onde?'/>
      </View>
}