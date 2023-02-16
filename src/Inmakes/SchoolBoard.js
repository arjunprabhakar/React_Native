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
  ScrollView
} from 'react-native'

export default class Login extends Component {

  render(){
    return (
       
      <View style= {styles.container}>
        <Image source={require('./image/inmakes.png')} style={styles.logo}> 
          </Image>
        

        <Text style={{fontSize:20, color:'#000',fontWeight:'bold'}}>Select Your School Board</Text>
    
        <View style={styles.childView}>

          <View>
            <TextInput style={styles.inputview} placeholder="Full Name">
            </TextInput>
            <TextInput style={styles.inputview} placeholder="Email">
            </TextInput>
            {/* <DropDownPicker
                items={[
                {label: 'Item 1', value: 'item1', selected: true},
                {label: 'Item 2', value: 'item2'},
                ]}
                defaultIndex={0}
                containerStyle={{height: 55,width: '90%',marginLeft:20,marginTop:20,backgroundColor:'#545366'}}
                onChangeItem={item => console.log(item.label, item.value)}
            /> */}
          </View>
          <TouchableHighlight style={styles.Button}
          onPress={()=>this.props.navigation.navigate('AppDesc1')}>
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
    height:'40%',
    marginTop:40,
    borderRadius:30
  },
  inputview:{
    width:'90%',
    height:55,
    borderWidth:1,
    backgroundColor:'#545366',
    borderColor:'transparent',
    marginTop:40,
    paddingLeft:20,
    marginLeft:20,
    borderRadius:10
  },
  Button:{
    backgroundColor:'#57C046',
    height:55,
    width:'88%',
    marginTop:35,
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
    marginTop:300,
    marginBottom:90
  }


})