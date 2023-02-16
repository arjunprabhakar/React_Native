import React,{Component} from "react";
import{View,Text,StyleSheet} from 'react-native'
export default class Profile extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <Text style={Styles.profileText}>Profile Page</Text>
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
    profileText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000'
    }
})