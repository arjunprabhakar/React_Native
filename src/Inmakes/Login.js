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

  render(){
    return (
      <View style= {styles.container}>
        <Image source={require('./image/inmakes.png')} style={styles.logo}> 
          </Image>
        <Text style={{fontSize:20, color:'#000',fontWeight:'bold',marginTop:10}}>Inmakes</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:25, color:'#000',fontWeight:'bold'}}>Learning</Text>
          <Text style={{fontSize:25, color:'#57C046',fontWeight:'bold',marginLeft:10,marginBottom:250}}>Hub</Text>
        </View>

        <Text style={{fontSize:20, color:'#000',fontWeight:'bold'}}>Enter Your Mobile Number</Text>
        <Text style={{fontSize:15, color:'#7F827F',marginTop:10}}>We Will send you nn OTP to Verify.</Text>
        <View style={styles.childView}>

          <View style={{flexDirection:"row"}}>
          <TextInput  style={styles.codeView} placeholder="+91"
            placeholderTextColor='#fff' secureTextEntry={true} maxLength={10}>
            </TextInput>

            <TextInput style={styles.inputview} placeholder="Mobile Number"
             secureTextEntry={true} maxLength={10}>
            </TextInput>
          </View>

          <TouchableHighlight style={styles.Button}
          onPress={()=>this.props.navigation.navigate('OtpPage')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableHighlight>

        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container : {
    height:'100%',
    width:'100%',
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center'
  },
  childView:{
    backgroundColor:'#262542',
    width:'100%',
    height:'30%',
    marginTop:40,
    borderRadius:30
  },
  inputview:{
    width:'70%',
    height:55,
    borderWidth:1,
    backgroundColor:'#545366',
    borderColor:'transparent',
    marginTop:50,
    paddingLeft:50,
    marginLeft:10,
    borderRadius:10
  },
  codeView:{
    width:'15%',
    height:55,
    paddingLeft:15,
    borderWidth:1,
    marginTop:50,
    backgroundColor:'#545366',
    borderColor:'transparent',
    borderRadius:10,
    marginLeft:18
  },
  Button:{
    backgroundColor:'#57C046',
    height:55,
    width:'88%',
    marginTop:40,
    marginLeft:20,
    borderRadius:10,
    justifyContent:"center",
    alignItems:'center'
  },
  buttonText:{
    fontSize:15,
    fontWeight:'bold',
    color:'#fff'
  },
  logo:{
    width:100,
    height:100,
    marginTop:100
  }


})