import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./styles"
import imgCar from '../../assets/sugestoes/car2.png'
import { Double } from "react-native/Libraries/Types/CodegenTypes"
import { Reagendar } from "../reagendar"

interface atividadesRec {
    destino: string,
    dataHora: string,
    valor: string
}


export const AtividadesRecentes = () => {

    const atividades: atividadesRec[] = [

        {
            destino: "R. Dr. Oliveira, 237",
            dataHora: "9 de jan. • 2:58 PM",
            valor: "9,90",
        },

        {
            destino: "Centro Educacional Beatriz Silva",
            dataHora: "4 de jan. • 5:58 PM",
            valor: "8,98",
        },

        {
            destino: "Localiza",
            dataHora: "13 de dez. • 4:44 PM",
            valor: "5,59",
        }
    ];


    const renderItem = ({item}: {item: atividadesRec}) => {
        return (
            
            <View style={styles.container}>
                <View style={styles.divOpcao}>
                    <View style={styles.containerImagem}>
                        <Image source={imgCar} style={styles.imagem}></Image>
                    </View>
                </View>
    
                <View style={{width: "79%"}}>

                    <View style={{width: "97%", flexDirection: "row", justifyContent: "space-between"}}>

                        <View style={{width: "50%"}}>
                            <Text style={styles.titulo} numberOfLines={2}>{item.destino}</Text>
                            <Text style={styles.dataValor}>{item.dataHora}</Text>
                            <Text style={styles.dataValor}>R${item.valor}</Text>
                        </View>

                        <View style={{width: "40%", marginTop: 9}}>
                            <Reagendar/>
                        </View>
                    </View>
                    <View style={styles.linhaDivisao} />
                </View>
            </View>
        )
    }

    return (

        <View style= {{width: "100%"}}>

        <FlatList
            data={atividades}
            renderItem={renderItem}
            scrollEnabled={false}
            />
        </View>
    )
}