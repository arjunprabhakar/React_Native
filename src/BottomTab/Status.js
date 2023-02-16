import React,{Component} from "react";
import{View,Text,StyleSheet} from 'react-native'
export default class Status extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.homeText}>Status Page</Text>
            </View>
        )
    }
}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    homeText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000'
    }
})