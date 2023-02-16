import React,{Component} from "react"
import DropDownPicker from 'react-native-dropdown-picker';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Login extends Component {

  render(){
    return (
       
      <View style= {styles.container}>
        <View style={styles.firstView}>
        <Image source={require('./image/aa.jpg')}
        style={styles.backgroundimage}/>
        </View>
        <View style={styles.secondView}>
            <Text style={{fontSize: 20,fontWeight: 'bold', color: '#000',marginBottom:5}}>Learn as you go</Text>
            <Text style={{fontSize: 17,fontWeight: 'bold'}}>Download the Stockpile app and master the</Text>
            <Text style={{fontSize: 17,fontWeight: 'bold'}}>market with our mini-lesson</Text>
            <TouchableHighlight style={{marginTop:30,marginLeft:250}}>
                <Icon name='forward' size={50} color='#1AF31D'/>
            </TouchableHighlight>
            <Text style={{marginLeft:250,color:'#1AF31D',fontStyle:'italic'}}>Next</Text>
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
  firstView:{
    width:'100%',
    height:'60%',
    marginBottom:2,
    marginTop:70,
    justifyContent:'center',
    alignItems:'center'
  },
  secondView:{
    width:'100%',
    height:'20%',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  backgroundimage:{
    width:'90%',
    height:'100%',
    borderRadius:10
  } 

})