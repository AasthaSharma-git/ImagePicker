import React from 'react';
import { Button, Image, View, Platform, ToastAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';

export default class PickImage extends React.Component{
    constructor(){
        super();
        this.state={
            image:null,
           
        }
    }
    pickImage=async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            this.setState({
                image:result.uri
            })
          }
    }
    upload = async() => {
        const uri=this.state.image;
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref('/0UploadedImages/').child(new Date().toString());
        return ref.put(blob);
      }

    render(){
            return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Button 
                    title="Pick an image from camera roll" 
                    onPress={this.pickImage} 
                    />

                   
                     {this.state.image?
                      <View>
                     <Image source={{ uri: this.state.image }} 
                     style={{ width: 200, height: 200 }} />
                     <Button title='Upload' color='green' onPress={this.upload}/>
                     </View>
                     :undefined}
                     
    </View>
            )
    }
}