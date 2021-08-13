//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
   Text, 
     View,
    Image,
    TouchableWithoutFeedback ,
    TouchableOpacity , 
    TouchableHighlight ,
    TouchableNativeFeedback,
    Button,
    Alert,
  Platform,
StatusBar,
Dimensions} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

//import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function App() {
 
  return (
  

    // < WelcomeScreen />
    <ViewImageScreen/>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
