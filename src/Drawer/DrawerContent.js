import React,{Component} from "react";
import { View,Text,StyleSheet,Image} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.profilecontainer}>
                    <View style={styles.firstView}>   
                        <View style={styles.profileicon}>
                            <Image style={styles.profileImage}source={require('../../assets/logo.png')}></Image>
                        </View>
                        <TouchableHighlight style={styles.invitebtn}>
                            <Text>Invite</Text>
                        </TouchableHighlight>
                     </View>


                    <View style={styles.infoView}>
                        <Text style={styles.nameText}>Arjun</Text>
                        <TouchableHighlight style={styles.goldbtn}>
                            <Text >Gold</Text>
                        </TouchableHighlight>
                        <Text style={styles.nameText}>Total Coin</Text>
                        <Text style={styles.name2Text}>Coin:30000</Text>
                    </View> 

                   

                </View>
                    <View style={styles.sideclick}> 
                        <Text style={styles.menu} 
                        onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                    </View> 

                    <View style={styles.sideclick}> 
                        <Text style={styles.menu}
                        onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                    </View>

                    <View style={styles.sideclick}> 
                        <Text style={styles.menu}
                        onPress={()=>this.props.navigation.navigate('About')}>Wallet Balance</Text>
                    </View>

                    <View style={styles.sideclick}>
                        <Text style={styles.menu}
                        onPress={()=>this.props.navigation.navigate('Settings')}>Records</Text>
                    </View>
                    <View style={styles.sideclick}>
                        <Text style={styles.menu} 
                        onPress={()=>this.props.navigation.navigate('Home')}>Refund & Policies</Text>
                    </View>
                    <View style={styles.sideclick}>
                        <Text style={styles.menu} 
                        onPress={()=>this.props.navigation.navigate('Home')}>Settings</Text>
                    </View>
                    <View style={styles.sideclick}>
                        <Text style={styles.menu} 
                        onPress={()=>this.props.navigation.navigate('About')}>About Us</Text>
                    </View>
                    <View style={styles.sideclick}>
                        <Text style={styles.menu} 
                        onPress={()=>this.props.navigation.navigate('About')}>Help</Text>
                    </View>
                    <Text style={styles.logout} 
                        onPress={()=>this.props.navigation.navigate('About')}>Logout</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'fff' 
    },
    menu:{
        fontSize:18,
        marginTop:10,
        marginLeft:20,
        color:'#000',
        fontWeight:'bold'
    },
    profilecontainer:{
        height:'25%',
        width:'100%',
        flexDirection:'row',
        // alignItems:'center',
        backgroundColor:'#000'
    },
    profileicon:{
        height:100,
        width:100,
        backgroundColor:'#bbbbbb',
        borderRadius:50,
        marginTop:10,
        marginLeft:20
    },
    infoView:{
        //backgroundColor:'green',
       // width:'50%',
        marginLeft:50,
        
    },
    profileImage:{
        height:'100%',
        width:'100%',
        borderRadius:50

    },
    nameText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#fff',
        marginTop:60
    },
    name2Text:{
        fontSize:15,
        fontWeight:'bold',
        color:'#fff',
       
    },
    emailtext:{
        fontSize:14,
        color:'#fff',
        marginBottom:2
    },
    invitebtn:{
        backgroundColor:'#fff',
        borderRadius:5,
        marginTop:60,
        justifyContent:'center',
        alignItems:'center',
        width:60,
        marginLeft:30
        
    },
    goldbtn:{
        backgroundColor:'gray',
        width:45,
        borderRadius:5

    },
    cointext:{
        marginTop:30
    },
    firstView:{
        //backgroundColor:'green',
        width:'50%'
    },
    sideclick:{
        height:60,
        //backgroundColor:'%',
        borderWidth:0.2,      
    },
    logout:{
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        marginTop:80,
        marginLeft:90
    }
})