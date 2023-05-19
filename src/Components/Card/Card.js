import React from "react";
import { View,Text, Image,TouchableWithoutFeedback} from "react-native";
import Styles from './Card.style'

const Card = ({Products,OnSelect}) => {
return(
    <TouchableWithoutFeedback onPress={OnSelect}>
    <View style={Styles.container}>
        <Image style={Styles.image} source={{uri: Products.image}}></Image>
        <View style={Styles.body_container}>
        <Text style={Styles.title}>{Products.title}</Text>
        <Text style={Styles.price}>{Products.price}</Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
);
};

export default Card;