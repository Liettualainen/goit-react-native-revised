import LoginScreen from '../Screens/LoginScreen.android';
import RegistrationScreen from '../Screens/RegistrationScreen.andrdoid';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

// import { useEffect, useState } from 'react';
// import { styles } from '../StyleSheet.js';
// import { Roboto_400Regular } from '@expo-google-fonts/roboto'; 

function Postsscreen() {

  return (
    <View style={{ fontFamily: 'Roboto' }}>
      <LoginScreen />
      {/* <RegistrationScreen /> */}

  </View>
  )
}

export default Postsscreen