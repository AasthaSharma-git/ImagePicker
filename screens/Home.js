import React from 'react';
import { Button, Image,Text, View, Platform, ToastAndroid,FlatList,TouchableOpacity } from 'react-native';

export default class Home extends React.Component{
   
  
    render(){
            return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <TouchableOpacity style={{marginTop:50,borderWidth:2}} onPress={()=>
        this.props.navigation.navigate('Picker')}>
             <Text>Upload Image</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{marginTop:50,borderWidth:2}}
         onPress={()=>
            this.props.navigation.navigate('Gallery')}>
             <Text>Gallery</Text>
         </TouchableOpacity>

                   
                     
    </View>
            )
    }
}