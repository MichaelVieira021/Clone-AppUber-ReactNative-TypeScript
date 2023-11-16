import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
    
import imgCar from '../../assets/sugestoes/car2.png'
import imgEnvios from '../../assets/sugestoes/envios.png'
import imgRoteiro from '../../assets/sugestoes/bags.png'

// interface SugestoesParaVoce{
//     titulo: string,
//     image: any,
// }

export const Sugestoes = () => {

    // const sugestoes = [
    //     {
    //         titulo: "Viagem",
    //         image: imgCar
    //     },
    //     {
    //         titulo: "Envios",
    //         image: imgEnvios
    //     },
    //     {
    //         titulo: "Roteiro",
    //         image: imgRoteiro
    //     }
    // ]

    // const renderItem = ({item}: {item: SugestoesParaVoce}) => (

    //     <TouchableOpacity activeOpacity={0.5} style={styles.divOpcao}>
    //         <View style={styles.containerImagem}>
    //             <Image source={item.image} style={styles.imagem}></Image>
    //         </View>
    //         <Text style={styles.textContainerImagem}>{item.titulo}</Text>
    //     </TouchableOpacity>
    // )

    return (
        <View style={styles.sugestoesOpcoes}>

            <TouchableOpacity activeOpacity={0.5} style={styles.divOpcao}>
                <View style={styles.containerImagem}>
                    <Image source={imgCar} style={styles.imagem}></Image>
                </View>
                <Text style={styles.textContainerImagem}>Viagem</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.divOpcao}>
                <View style={styles.containerImagem}>
                    <Image source={imgRoteiro} style={styles.imagem}></Image>
                </View>
                <Text style={styles.textContainerImagem}>Roteiro</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.divOpcao}>
                <View style={styles.containerImagem}>
                    <Image source={imgEnvios} style={styles.imagem}></Image>
                </View>
                <Text style={styles.textContainerImagem}>Envios</Text>
            </TouchableOpacity>

        </View>
    )
}