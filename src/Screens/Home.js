import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';


const Home = () => {

  useEffect(() => {
    getData();
  }, [])
  const [data, setData] = useState([])
  const [input, setIput] = useState('')
  const [imageUri, setImageUri] = useState(null);
  const getData = async () => {
    try {
      const usersCollection = await firestore().collection('users').get();
   
      const fdata = usersCollection.data();
      setData(fdata)
      // console.log('FireStore Data=>>>>>>>>>>>>', fdata)
    } catch (error) {
      console.log('datra=====', error)
    }
  }
  // const [id,setId]= useState(0)
  // const setDataFR = () => {
  // try {
  //   firestore()
  //   .collection('Store')
  //   .doc(`User0`)
  //   .set({
  //     Email: input,
  //   })
  //   .then(() => {
  //     console.log('User added!');
  //     setId(id+1)
  //   });
  // } catch (error) {
  //   console.log(error)
  // }
  // }

  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <Text style={styles.heading}>{data.title}</Text>

        
        <Text style={styles.price}>${data.email}</Text>
        <Text style={styles.des}>{data.Email}</Text>
      



      </View>
      {/* <TextInput
        value={input}
        onChangeText={(val) => setIput(val)}
        style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
      />
      <Button onPress={setDataFR} title='Save Data' />
      
      <Text>{data.Email}</Text> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  box:{
    width:150,
    height:200,
    borderColor:'gray',
    borderRadius:10,
    borderWidth:1,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    padding:5


  },
  heading:{
    fontSize:15,
    fontWeight:'600',
    color:'black',
    marginBottom:10

  },
  price:{
    fontSize:15,
    fontWeight:'400',
    color:'black',
  },
  des:{
    fontSize:15,
    fontWeight:'400',
    color:'black',
    
   
  }
})