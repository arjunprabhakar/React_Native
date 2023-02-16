import React,{Component} from "react";
import axios from "axios";
import{View,Text,StyleSheet,ActivityIndicator,FlatList } from 'react-native'
export default class Category extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }
    getData(){
        this.setState({loader:true})
        fetch('https://gorest.co.in/public/v2/users')
        .then((response)=>response.json())
        .then((response)=> {
            if(response.length>0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
            console.log('Your Response Is:',response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log('Error is:',error)
        })  
        
    }

// getAxiosData(){
//     this.setState({loader:true})
//     axios.get('https://api.sampleapis.com/coffee/hot')
//     .then((response)=>{
//         this.setState({loader:false})
//         console.log('Axios Response:',response)
//     })
//     .catch((error)=>{
//         this.setState({loader:false})
//         console.log('Axios Error:',error)
//     })
// }

componentDidMount(){
    this.getData()
}

    render(){
        const renderItem=({item})=> (
            <View style={Styles.itemContainer}>
                
             <Text style={Styles.itemText}>Name : {item.name}</Text>   
             <Text style={Styles.descText}>id : {item.id}</Text>   
             <Text style={Styles.descText}>Email : {item.email}</Text>   
             <Text style={Styles.descText}>Gender : {item.gender}</Text>   
             <Text style={Styles.descText}>Status : {item.status}</Text>   
            </View>
        )
        return(
            <View style={Styles.container}>
                <ActivityIndicator size={40} color='gray' animating={this.state.loader}/>
                <Text style={Styles.homeText}>User List</Text>
                <FlatList style={{width:'95%',margintop:10}}
                data={this.state.DATA}
                renderItem={renderItem}/>
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
    homeText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000',
        marginBottom:15
    },
    itemContainer:{
        width:'100%',
        padding:10,
        backgroundColor:'#fff',
        elevation:4,
        marginBottom:10

    },
    itemText:{
        fontSize:16,
        fontWeight:'bold',
        color:'green'
    },
    descText:{
        fontSize:14,
        color:'#369',
        margintop:10,
        fontWeight:'bold'
    }

})