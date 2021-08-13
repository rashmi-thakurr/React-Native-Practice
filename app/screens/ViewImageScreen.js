import React from 'react'
import { View, Image ,StyleSheet} from 'react-native'

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.DeleteIcon}></View>
             <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },
    closeIcon:{
        width: 50,
        height: 50,
        backgroundColor: '#fc5c65',
        position:'absolute',
        top: 44,
        left: 15,
    },
    DeleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: '#4ecdc4',
        position:'absolute',
        top: 44,
        right: 15,
    },
    image:{
        width: '100%',
        height: '100%',
    }
})
export default ViewImageScreen
