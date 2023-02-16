import React,{Component} from "react"
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native'

export default class Login extends Component {

  constructor(){
    super();
    this.state={name:null}
  }
  updatevalue(username){
  // console.log(username);
  this.setState({name:username})
  }
  render(){
    return (
      <View style= {styles.container}>
        <ImageBackground source={require('./image/bg.png')}
          style={styles.backgroundimage}>
          <Image source={require('./image/logo.png')} style={styles.logo}> 
          </Image>
          <Text style={styles.textview}>Login Page</Text>
          <TextInput style={styles.inputview} placeholder="Enter Username"
          placeholderTextColor='green' maxLength={10}
          onChangeText={(username)=>this.updatevalue(username)}>
          </TextInput>
          <TextInput style={styles.inputview} placeholder="Enter Password"
          placeholderTextColor='green' secureTextEntry={true} maxLength={10}>
          </TextInput>
          <TouchableHighlight style={styles.button}
          underlayColor='transparent'
          onPress={()=>this.props.navigation.navigate('Tab',{username:this.state.name})}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container : {
    height:'100%',
    width:'100%',
    backgroundColor:'#ffffff'
  },
  backgroundimage:  {
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'

  },
  logo:{
    height:100,
    width:100,
  },
  textview:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  },
  inputview:{
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'green',
    marginTop:50,
    paddingLeft:20
  },
  button:{
    width:'60%',
    height:55,
    backgroundColor:'green',
    marginTop:20,
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center'
  },
  buttontext:{
    fontSize:22,
    fontWeight:'bold',
    color:"#ffffff"

  }
})