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

export default class Registration extends Component {
  render(){
    return (
      <View style= {styles.container}>
        <ImageBackground source={require('./image/bg.jpg')}
          style={styles.backgroundimage}>
          <Image source={require('./image/reg.jpg')} style={styles.logo}> 
          </Image>
          <Text style={styles.textview}>Registration</Text>
          <TextInput style={styles.inputview} placeholder="Enter User Name"
          placeholderTextColor='black' maxLength={10}>
          </TextInput>
          <TextInput style={styles.inputview} placeholder="Enter Email"
          placeholderTextColor='black'  maxLength={10}>
          </TextInput>
          
          <View style={{flexDirection:"row"}}>
          <TextInput style={styles.cview} placeholder="C-Code"
          placeholderTextColor='black' maxLength={10}>
          </TextInput>
          <TextInput style={styles.nview} placeholder="Mobile Number"
          placeholderTextColor='black' maxLength={10}>
          </TextInput>
          </View>

          <TextInput style={styles.inputview} secureTextEntry={true} placeholder="Enter User Password"
          placeholderTextColor='black' maxLength={10}>
          </TextInput>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttontext}>Register</Text>
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
    color:'red',
    fontWeight:'bold',
    marginTop:20
  },
  inputview:{
    width:'80%',
    height:55,
    borderWidth:2,
    borderColor:'black',
    marginTop:50,
    paddingLeft:20
  },
  cview:{
    width:'20%',
    height:55,
    borderWidth:2,
    borderColor:'black',
    marginTop:50,
    paddingLeft:20
},
nview:{
  width:'60%',
  height:55,
  borderWidth:2,
  borderColor:'black',
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