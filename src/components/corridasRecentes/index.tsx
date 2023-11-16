import { FlatList, Text, View } from "react-native"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export const CorridasRecentes = () => {

    const [corridaRecente, setCorridaRecente] = useState([

        {
            destino: "Praça Ginda Bloch - Alto",
            endereco: "- Alto - Teresópolis - RJ, 25953-235"
        },
  
        {
            destino: "Localiza", 
            endereco: "Avenida Feliciano Sodré, 138 - Varzea - Teresópolis - RJ,25963-081"
        },
        
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
                                {item.endereco.length > 38
                                ? item.endereco.replace(/(.*?-.*?)-\s*(.*)/, '$1-\n$2')
                                : item.endereco}
                            </Text>
                        </View>	
                    </View>
                )
            }}
        />
    )
}