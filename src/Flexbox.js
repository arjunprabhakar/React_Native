import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    TouchableHighlight
}from 'react-native'
class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text  style={styles.contentstyle}>My name is {this.props.name}</Text>
            </View>
        )
    }
}
export default class Flexbox extends Component{
    constructor(){
        super();
        this.state={
            main_text:'Hello',
            sub_text:'React'
        }
    }
    componentDidMount(){
        console.log('the user name is',this.props.route.params.username)
    }
    updatetext(){
        this.setState({
            main_text:'hii(Helo updated)',
            sub_text:'Framework(react Updated)'
        })
    }
   render(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{this.state.main_text}</Text>
            <Text style={styles.text}>{this.state.sub_text}</Text>
            <Text style={styles.text}>Native</Text>
            <TouchableHighlight style={styles.button}
            underlayColor='yellow'
            onPress={()=>this.updatetext()}>
                <Text style={styles.buttontext}>
                 update
                </Text>
            </TouchableHighlight >
            <TouchableHighlight style={styles.button}
            underlayColor='#fff'
            onPress={()=>this.props.navigation.navigate('Drawer')} >
            <Text  style={styles.buttontext}>
                 Click Here
                </Text>  
            </TouchableHighlight>

            <FlexContent name={this.props.route.params.username}> </FlexContent>
        </View>
    )
   } 
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        //flexDirection:'row'
    },
    text:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold'
    },
    button:{
        width:'50%',
        height:55,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginTop:20
    },
    buttontext:{
        color:'#fff',
        fontSize:26

    },
    contentstyle:{
        fontSize:24,
        fontWeight:'bold',
        color:'#369',
        marginTop:20
    }
})