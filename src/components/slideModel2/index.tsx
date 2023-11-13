import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

import img1Slide from '../../assets/slideModel2/1.png'
import img2Slide from '../../assets/slideModel2/2.png'
import img3Slide from '../../assets/slideModel2/3.png'
import img4Slide from '../../assets/slideModel2/4.png'
import img5Slide from '../../assets/slideModel2/5.png'
import img6Slide from '../../assets/slideModel2/6.png'
import img7Slide from '../../assets/slideModel2/7.png'
import img8Slide from '../../assets/slideModel2/8.png'
import img9Slide from '../../assets/slideModel2/9.png'

interface InterfaceSlideModel2 {
  image: any,
  titulo: string,
  descricao: string
}

interface SlideParams {
  startIndex: number;
  endIndex: number;
}

export const SlideModel2: React.FC<SlideParams> = ({ startIndex, endIndex }) => {

  const [economize, setEconomize] = useState<InterfaceSlideModel2[]>([

    {
      image: img1Slide,
      titulo: "Viagens com o app Uber...",
      descricao: "Viagens econômicas de moto"
    },

    {
      image: img2Slide,
      titulo: "Adicione ate 5 paradas ",
      descricao: "Aproveite para retirar itens no caminho"
    },

    //----------------------------------------------------------
    {
      image: img3Slide,
      titulo: "Viaje com conforto  ",
      descricao: "Os motoriastas parceiros mais bem avaliados e os carros mais novos"
    },

    {
      image: img4Slide,
      titulo: "Envie um item ",
      descricao: "Entrega sob demanda em toda a cidade"
    },

    {
      image: img5Slide,
      titulo: "Recursos de segurança ",
      descricao: "Recursos de segurança durante a viagem"
    },

    //----------------------------------------------------------
    {
      image: img6Slide,
      titulo: "Esqueceu de algo em algum lugar",
      descricao: "Recebe a entrega do seu objeto onde você estiver"
    },

    {
      image: img7Slide,
      titulo: "Envie um presente ",
      descricao: "Entregue no mesmo dia suas surpresas especiais"
    },

    {
      image: img8Slide,
      titulo: "Entregue itens com tranquilidade",
      descricao: "Acompanhe e receba notificações de envios e entregas"
    },

    {
      image: img9Slide,
      titulo: "Surpreenda seus clientes",
      descricao: "Envie itens para eles"
    }

  ]);

  const renderItem = ({item, index}: {item: InterfaceSlideModel2, index: number}) => (
    <View style={{ width: 235, marginRight: 16, marginLeft: index === 0 ? 16 : 0}}>
      <Image source={item.image} style={styles.imgsEconomize}></Image>

      <View style={{flexDirection: "row", alignItems: 'flex-end'}}>
        <Text style={{fontWeight: '500', marginLeft: 0, marginTop: 10, marginRight: 3,fontSize: 16}} numberOfLines={1}>{item.titulo}</Text>
        <AntDesign name="arrowright" size={16} color="black" />
      </View>

      <Text style={{fontWeight: '300', marginLeft: 0, marginTop: 2,fontSize: 14, marginRight: 8}}  numberOfLines={2}>{item.descricao}</Text>
    </View>
  )
    

  return (
    <SafeAreaView>
      <FlatList
        data={economize.slice(startIndex, endIndex + 1)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}