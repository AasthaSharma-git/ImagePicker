import React from 'react';
import { Button, Image, Text,View, Platform, ToastAndroid,FlatList } from 'react-native';

import firebase from 'firebase';
export default class Gallery extends React.Component{
    constructor(){
        super();
         this.state={
             images:[]
         }
    }
    componentDidMount(){
        this.fetchImages()
    }
  
    fetchImages(){
      var images=[]
let imageRef = firebase.storage().ref('/UploadedImages/');

imageRef
.listAll()
.then((result)=>{
  result.items.forEach((imageRef)=>{
      imageRef.getDownloadURL().then((url)=>{
        this.setState({
            images:[...this.state.images,url]
        })
          
      })
    
      .catch(function(error){})
      
  })
})
.catch((e)=>
console.log(e))
  
  
      }
      renderItem=({item})=>{
         return( <View>
          <Image source={{uri:item}} 
          style={{marginTop:150,width:300,height:300}}>

          </Image>
          </View>)
      }
      keyExtractor=(index,item)=>index.toString()
  

    render(){
            return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

{
    !this.state.images[0]?
    <Text>No images available</Text>
    :
    <FlatList
    data={this.state.images}
    renderItem={this.renderItem}
    keyExtractor={this.keyExtractor}
    />
}

                  
                       

                   
                     
    </View>
            )
    }
}