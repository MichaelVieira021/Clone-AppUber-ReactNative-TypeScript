import React from 'react';
import { FlatList, Image, SafeAreaView, View } from "react-native"
import styles from './styles';

import img1Slide from '../../assets/slide/1.png'
import img2Slide from '../../assets/slide/2.png'
import img3Slide from '../../assets/slide/3.png'
import img4Slide from '../../assets/slide/4.png'
import img5Slide from '../../assets/slide/5.png'

interface SlideItem {
    id: number;
    image: any;
}

export const Slide = () => {

    const data: SlideItem[] = [
        { id: 1, image: img1Slide },
        { id: 2, image: img2Slide },
        { id: 3, image: img3Slide },
        { id: 4, image: img4Slide },
        { id: 5, image: img5Slide },
    ];
    
    const renderItem = ({ item }: {item: SlideItem}) => (
        <View style={styles.slideItem}>
            <Image source={item.image} style={styles.slideImage} />
        </View>
    );

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}