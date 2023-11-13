import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export const CorridasRecentes = () => {

    const [corridaRecente, setCorridaRecente] = useState([

        {
          destino: "Upa 24h Teresópolis",
          endereco: "R. Tenente Luiz Meirelles - Bom Retiro - Teresópolis - RJ,25954-000"
        },

        {
          destino: "Dom Atacadista", 
          endereco: "Av. Almirante Lúcio Meira, 1095 - Várzea - Teresópolis - RJ,25953-008"
        }
        
    ]);

    return (
        <FlatList
            data={corridaRecente}
            scrollEnabled={false}
            renderItem={({item, index})=>{
            
                return ( 
                    <View style={styles.containerCorridaRecente}>
                        <AntDesign name="clockcircle" size={22} color="black" style={styles.iconClockRecentes}/>
                        <View style={styles.enderecoRecente}>
                            {index > 0 && <View style={styles.linhaDivisao} />}
                            <Text style={styles.destino} numberOfLines={1}>{item.destino}</Text>
                            <Text style={styles.endereco} numberOfLines={2}>
                            {item.endereco.replace(/(.*?-.*?)-\s*(.*)/, '$1-\n$2')}
                            </Text>
                        </View>	
                    </View>
                )
            }}
        />
    )
}