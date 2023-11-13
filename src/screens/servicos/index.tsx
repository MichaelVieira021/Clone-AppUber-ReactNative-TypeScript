import { Text, View } from 'react-native'
import { styles } from './styles';
import { Sugestoes } from '../../components/sugestoes';



export const Servicos = () =>{

    return(

        <View style={styles.container}>
            <Text style={styles.titulo}>Serviços</Text>
            <Text style={styles.descricao} numberOfLines={1}>Vá para onde quiser, peça o que precisar</Text>
            <Sugestoes/>
        </View>
        
    )
}