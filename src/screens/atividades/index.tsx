import { Image, ScrollView, Text, View } from 'react-native'
import {styles} from './styles'

import map from "../../assets/atividades/map.png"
import { Reagendar } from '../../components/reagendar';
import { AtividadesRecentes } from '../../components/atividadesRecentes';
import { Ionicons } from '@expo/vector-icons';
import iconFilter from '../../assets/atividades/icon.png'

export const Atividades = () =>{

    return (
        <ScrollView style={styles.container}>

            <View style={ styles.containerTituloAtividades }>
                <Text style={styles.textTitulo}>Atividade</Text>
                <View style={styles.containerAnteriores}>
                    <Text style={styles.textAnteriores}>Anteriores</Text>
                    <View style={styles.containerIcon}>
                    <Image source={iconFilter} style={{width: "60%", height: "60%"}}></Image>
                    </View>
                </View>
            </View>

            <View style={styles.containerMap}>
                <Image source={map} style={styles.imgMap}/>

                <View>
                    <Text style={styles.tituloDestino}>Praça Ginda Bloch - Alto</Text>
                    <Text style={styles.dataValor}>14 de mai. • 1:47 PM</Text>
                    <Text style={styles.dataValor}>R$10,05</Text>
                </View>

                <View style={{width: "37%"}}>
                    <Reagendar/>
                </View>
            </View>

            <View style={{width: "93%", alignSelf: 'center'}}>
                <AtividadesRecentes/>
            </View>

        </ScrollView>
    )

}