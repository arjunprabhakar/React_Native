import React,{Component} from "react"
import DropDownPicker from 'react-native-dropdown-picker';
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
        

        <Text style={{fontSize:20, color:'#000',fontWeight:'bold'}}>Student Details</Text>
    
        <View style={styles.childView}>

          <View>
            <TextInput style={styles.inputview} placeholder="Full Name">
            </TextInput>
            <TextInput style={styles.inputview} placeholder="Email">
            </TextInput>
            <TextInput style={styles.inputview} placeholder="State">
            </TextInput>
            <TextInput style={styles.inputview} placeholder="Pin Code">
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
          onPress={()=>this.props.navigation.navigate('SchoolBoard')}>
            <Text style={styles.buttonText}>Register</Text>
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
    height:'55%',
    marginTop:40,
    borderRadius:30
  },
  inputview:{
    width:'90%',
    height:55,
    borderWidth:1,
    backgroundColor:'#545366',
    borderColor:'transparent',
    marginTop:15,
    paddingLeft:20,
    marginLeft:20,
    borderRadius:10
  },
  Button:{
    backgroundColor:'#57C046',
    height:55,
    width:'88%',
    marginTop:25,
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
    marginTop:100,
    marginBottom:200
  }


})