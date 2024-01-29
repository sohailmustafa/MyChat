import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/ml1.png')} resizeMode='contain' style={styles.logo}/>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>Chat App</Text>
      <Text style={{fontSize:13, fontWeight:'bold', color:'#fff',marginTop:10, textAlign:'center', paddingHorizontal:20}}>Where Every Message Unveils a {'\n'}New Story</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4B90F8',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:200,
        height:200
    }
})