import { Text, TouchableOpacity, View } from "react-native"
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Fontisto } from "@expo/vector-icons"
import { styles } from "./styles"
import { useNavigation } from '@react-navigation/native';

export const NavBar = () => {

    const navigation = useNavigation<any>();

    return (
        <View style={styles.barraNav}>
            <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Principal')}>
                <MaterialIcons name="home-filled" size={20} color="#a5a5a5" />
                <Text style={styles.label}>Página inicial</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Servicos')}>
                <View style={{width: 20, height: 20, alignSelf: "center", alignItems: "center", justifyContent: "center"}}>
                    <Fontisto name="nav-icon-grid" size={16} color="#a5a5a5" style={{ }}/>
                </View>
                <Text style={styles.label}>Serviços</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <MaterialCommunityIcons name="bookmark" size={20} color="#a5a5a5" />
                <Text style={styles.label}>Atividades</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <Ionicons name="person-sharp" size={20} color="#a5a5a5" />
                <Text style={styles.label}>Conta</Text>
            </TouchableOpacity>
        </View>
    )
}