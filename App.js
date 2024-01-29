import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Splash from './src/Screens/Splash';
import '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import Home from './src/Screens/Home';


const Stack = createStackNavigator();
//Login feature done
const App = () => {
  const [splash, showSplash] = useState(true)
useEffect(() => {
  setTimeout(() => {
    showSplash(false)
  }, 2000)
}, [])

  return (

 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        {splash ?
          <Stack.Screen name='Splash' component={Splash} />
          :
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Home' component={Home} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;