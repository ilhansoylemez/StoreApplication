import Reac, { useState, useEffect } from "react";
import { FlatList, SafeAreaView,ActivityIndicator, Text } from "react-native";
import Config from 'react-native-config'
import Card from '../../Components/Card'
import UseFetch from "../../Hooks/UseFetch";
import Loading from '../../Components/Loading'

const Products = ({navigation}) => {
    const {Data,loading,ErrorMessage} = UseFetch(Config.API_KEY);
    const handleProductSelect = item => {
        navigation.navigate("ProductsDetails",{item});
    }
    if(loading)
    {
        return <Loading/>
    }
    else if(ErrorMessage)
    {
        return<Text>{ErrorMessage}</Text>
    }
    return (
        <SafeAreaView>
          <FlatList data={Data} renderItem={({item})=> <Card Products={item} OnSelect={()=> handleProductSelect(item)}/>}/>
        </SafeAreaView>
    );
};

export default Products;