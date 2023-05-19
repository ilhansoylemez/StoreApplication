import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        flexDirection:'row'
    },
    image:{
        backgroundColor:'white',    
        width:100,
        resizeMode:'contain',
        minHeight:100,
        minHeight:100
    },
    body_container:{
        flex:1,
        justifyContent:'space-between',
        padding:5

    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    price:{
        textAlign:'right',
        fontSize:16,
        fontStyle:'italic'
    }

});