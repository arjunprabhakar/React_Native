import React,{Component} from "react";
import{View,Text,StyleSheet,ScrollView,TouchableHighlight} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
export default class Cart extends Component{
    constructor(){
        console.log('Cunstructor called')
        super();
        this.state={
            headerText: 'Welcome'
        }
    }
    static getDerivedStateFromProps(){
        console.log('getDreivedStateFromProps Called')
        return null
    }
 updateState(){
    this.setState({headerText:'Hii Arjun'})
 }

    componentDidMount(){
        console.log('Componenet Called')
    }
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate Called')
    //     return null
    // }
    render(){
        console.log('Render Called')
        return(
            <View style={Styles.container}>
                <ScrollView style={Styles.scrollContainer}>
                    <View style={Styles.scrollChildView}>
                        <View style={Styles.headerCard}> 
                        <Text style={{fontSize: 20, fontWeight: 'bold',marginTop: 10}}>{this.state.headerText}</Text>
                        </View>
                        <View style={Styles.baseLineCard}>
                            <View style={Styles.textHolder}>
                                <Icon name='edit' size={20}/>
                                <Text style={{fontSize:20, marginLeft: 20}}>Mounting</Text>
                            </View>
                            <View style={Styles.textHolder}>
                                <Icon name='edit' size={20}/>
                                <Text style={{fontSize:20, marginLeft: 20}}>Updating</Text>
                            </View>
                            <View style={Styles.textHolder}>
                                <Icon name='edit' size={20}/>
                                <Text style={{fontSize:20, marginLeft: 20}}>Un Mounting</Text>
                            </View>
                            <TouchableHighlight 
                            style={{width: '50%', height :55, backgroundColor: '#360', alignItems:'center',
                             justifyContent:'center',marginTop:20,underlayColor:'transparent',borderRadius:25 }}
                             onPress={()=> this.updateState()}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Updating</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eeeeee'
    },
   scrollContainer:{
    width:'100%',
    height:'100%'
   },
   scrollChildView:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
   // backgroundColor:'#000'
   },
   headerCard:{
    width:'95%',
    height:200,
    alignItems:'center',
    backgroundColor:'#fff',
    marginTop:10,
    elivation:4
   },
   baseLineCard:{
    width:'95%',
    padding:15,
    backgroundColor:'#fff',
    elivation:4,
    marginTop:20
   },
   textHolder:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center'
   }
})