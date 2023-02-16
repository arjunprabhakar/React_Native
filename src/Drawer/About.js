import React,{Component} from "react";
import{View,Text,StyleSheet} from 'react-native'
export default class About extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.aboutText}>About</Text>
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
    aboutText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000'
    }
})