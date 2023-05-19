import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
    width:Dimensions.get("window").width,
    height:300,
    resizeMode:'contain',
    backgroundColor:'white',
   },
   title:{
    fontWeight:'bold',
    fontSize:25
   },
   desc:{
    fontSize:15,
   },
   price:{
    margin:15,
    textAlign:'right',
    fontWeight:'bold',
    fontSize:25
   },
   innerContainer:{
    margin:10
   }
});