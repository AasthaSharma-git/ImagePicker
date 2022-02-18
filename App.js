import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PickImage from './screens/ImagePicker';
import { firebaseConfig } from './config';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from './screens/Gallery';
import Home from './screens/Home';

const Stack=createStackNavigator()
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)  
 }
 else{
   firebase.app()
 }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Picker' component={PickImage} />
        <Stack.Screen name='Gallery' component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

