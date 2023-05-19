import React from "react";
import { Image, Text, View } from "react-native";
import Styles from './ProductsDetail.style'


const ProductsDetail = ({route}) => {
    const data = route.params.item;
    return(
        <View style={Styles.container}>
            <Image style={Styles.image} source={{uri:data.image}}></Image>
        <View style={Styles.innerContainer}>
            <Text  style={Styles.title}>{data.title}</Text>
            <Text  style={Styles.desc}>{data.description}</Text>
            <Text  style={Styles.price}>{data.price}</Text>
        </View>
        </View>
    );
}

export default ProductsDetail;