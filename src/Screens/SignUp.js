
import { Image, Switch, Alert, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/firestore';




const Signup = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupAuth = () => {
        if (!email.includes('@') || !email.includes('.com')) {
            Alert.alert('Invalid Email Address');
        } else if (password.length < 8) {
            Alert.alert('Password less than 8 characters');
        } else {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    navigation.navigate('Login')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }
        
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
        
                    console.error(error);
                });
        }
    }        


    return (
        <ScrollView style={styles.container}>
        <Text style={styles.heading}>SignUp</Text>
            <View style={styles.logoBox}>
                <Image source={require('../assets/images/logo1.png')} />
            </View>
            <View style={styles.form}>
                <Text style={styles.heading1}>SignUp Details</Text>
                <TextInput
                 placeholder='Email ' 
                 style={styles.inputtext} 
                 placeholderTextColor={'#635C5C'}
                 onChangeText={(txt) => setEmail(txt)}
                 value={email}
                
                 />
                <TextInput
                 placeholder='Password'
                  secureTextEntry={true} 
                  style={styles.inputtext} 
                  placeholderTextColor={'#635C5C'}
                  onChangeText={(txt) => setPassword(txt)}
                  value={password}
               
                  />
                {/* <TouchableOpacity onPress={() => { console.log('ForgetPressed====>') }}><Text style={styles.forgetText} >Forget Password ?</Text></TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={signupAuth} >
                    <Text style={styles.buttonText}>Sign Up </Text>
                </TouchableOpacity>
                <View style={styles.signUp}>
                    <Image source={require('../assets/images/rec1.png')} style={styles.imgrec} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signupText}>    Sign In     </Text>
                        </TouchableOpacity>
                    <Image source={require('../assets/images/rec2.png')} style={styles.imgrec} />
                </View>
            </View>
         
            <View>


            </View>

        </ScrollView>
    )
}

export default Signup
const styles = StyleSheet.create({
    container: {
        flex: 1,
       paddingTop:30,
    //    alignItems:'center'
    },
    logoBox: {

        alignItems: 'center',
        padding: 20,
        paddingTop: 30,
        //backgroundColor:'red'
    },
    form: {

        padding: 20,
        //alignItems:'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
        fontFamily: 'Outfit-Medium',
        paddingBottom: 20,
        textAlign:'center'
    },
    heading1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        fontFamily: 'Outfit-Medium',
        paddingBottom: 20,
    },
    inputtext: {
        paddingLeft: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#635C5C',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'Outfit-Medium',
    },

    forgetText: {
        color: '#635C5C',
        alignSelf: 'flex-end',
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: 'Outfit-Medium',
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#0B6EFE',
        height: 50,
        justifyContent: 'center',
        borderRadius: 4,
        fontFamily: 'Outfit-Medium',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Outfit-Medium',
    },
    signUp: {
        flexDirection: 'row',
        paddingTop: 25,
        justifyContent: 'center',
    },
    imgrec: {
        marginTop: 7,
    },
    signupText: {
        alignSelf: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000000',
        fontFamily: 'Outfit-Medium',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor:'red'
    },
    img: {

        width: 45,
        height: 45,
        margin: 4,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end'
    }

})

