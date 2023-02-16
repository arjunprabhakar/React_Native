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
import Icon from "react-native-vector-icons/MaterialIcons"
export default class OtpPage extends Component {

  render(){
    return (
      <View style= {styles.container}>
         <Image source={require('./image/inmakes.png')} style={styles.logo}> 
          </Image>
        <Text style={{fontSize:20, color:'#000',fontWeight:'bold'}}>Inmakes</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:25, color:'#000',fontWeight:'bold'}}>Learning</Text>
          <Text style={{fontSize:25, color:'#57C046',fontWeight:'bold',marginLeft:10,marginBottom:200}}>Hub</Text>
        </View>

        <Text style={{fontSize:20, color:'#000',fontWeight:'bold'}}>Verification Code</Text>
        <Text style={{fontSize:15, color:'#7F827F',marginTop:10}}>Please type the verification code send to</Text>
        <Text style={{fontSize:15, color:'#000',marginTop:10}}>+918301014276</Text>
        <View style={styles.childView}>

          <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center"}}>
          <TextInput  style={styles.codeView}
            placeholderTextColor='#fff' secureTextEntry={true} maxLength={10}>
            </TextInput>
            <TextInput  style={styles.codeView}
            placeholderTextColor='#fff' secureTextEntry={true} maxLength={10}>
            </TextInput>
            <TextInput  style={styles.codeView}
            placeholderTextColor='#fff' secureTextEntry={true} maxLength={10}>
            </TextInput>
            <TextInput  style={styles.codeView}
            placeholderTextColor='#fff' secureTextEntry={true} maxLength={10}>
            </TextInput>
            <TextInput  style={styles.codeView}
            placeholderTextColor='#fff' secureTextEntry={true} maxLength={10}>
            </TextInput>
          </View>

          <TouchableHighlight style={styles.Button}
           onPress={()=>this.props.navigation.navigate('Registration')}>
            <Text style={styles.buttonText}>Resend OTP</Text>
          </TouchableHighlight>
          <Text style={{fontSize:15, color:'#7F827F',marginTop:15,marginLeft:'35%'}}>Resend after 28s</Text>
          <View style={{flexDirection:'row', marginTop:24,justifyContent:'center', alignItems:'center'}}>
            <Icon name='call' size={18} color='#57C046'/>
             <Text style={{fontSize:18, marginLeft: 10,color:'#57C046'}}>Contact Us</Text>
          </View>

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
    height:'50%',
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
    borderWidth:1,
    marginTop:50,
    backgroundColor:'#545366',
    borderColor:'transparent',
    borderRadius:10,
    marginLeft:10
  },
  Button:{
    backgroundColor:'#57C046',
    height:55,
    width:'85%',
    marginTop:40,
    marginLeft:35,
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
    marginTop:150
  }

})