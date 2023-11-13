import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

import { Slide } from '../../components/slide/index';
import { Sugestoes } from '../../components/sugestoes';
import { SlideModel2 } from '../../components/slideModel2/index';
import { CorridasRecentes } from '../../components/corridasRecentes';
import { ButtonBuscar } from '../../components/buttonBuscar';
import { NavBar } from '../../components/navBar';
import { StatusBar } from 'expo-status-bar';

export const Principal = () =>{

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor="#ffff" translucent={false}/>
            <ScrollView>

                <View style={ styles.containerBuscar }>
                    <ButtonBuscar/>
                </View>

                <View style={styles.containerRecentes}>
                    <CorridasRecentes/>
                </View>
                
                <View style={styles.sugestoes}>
                    <View style={styles.sugestoesText}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Sugestões</Text>

                        <TouchableOpacity>
                            <Text style={{fontWeight: '500', fontSize: 14}}>Ver todas</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <Sugestoes/>
                </View>

                <View style={styles.containerSlideModel2}>
                    <Text style={styles.tituloSlideModel2}>Economize todos os dias</Text>
                    <SlideModel2 startIndex={0} endIndex={1}/>
                </View>

                <Slide/>

                <View style={styles.containerSlideModel2}>
                    <Text style={styles.tituloSlideModel2}>Mais formas de usar o app</Text>
                    <SlideModel2 startIndex={2} endIndex={4}/>
                </View>

                <View style={styles.containerSlideModel2}>
                    <Text style={styles.tituloSlideModel2}>Envie itens</Text>
                    <SlideModel2 startIndex={5} endIndex={8}/>
                </View>

            </ScrollView>
        </View>
    )

}