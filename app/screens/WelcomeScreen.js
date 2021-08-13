import React from 'react';

import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
}
from 'react-native';


export default function WelcomeScreen(){
    return(
       
            <ImageBackground
                style={styles.background}
                source={require("../assets/background.jpg")}>
                    <Image style={styles.logo} source={require("../assets/logo-red.png")} />
                    <Text style={styles.textUnderLogo}>Sell What You Don't Need</Text>
                    <View style={styles.loginButton}>

                    </View>

                    <View style={styles.registerButton}>

                    </View>
            </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    logo:{
        position:"absolute",
        top:'10%',
        width: 100,
        height: 100,
    },
    textUnderLogo:{
        position:'absolute',
        top:'25%',
        fontWeight: 'bold',
    },
    loginButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4',
    }
})