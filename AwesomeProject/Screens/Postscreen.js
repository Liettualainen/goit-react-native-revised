// AIzaSyCNLypI7RkphJskEHQhIw5dp12vj3vwGJ4

import React, { useState, useEffect } from "react";
import { View, Image,Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from '../StyleSheet.js';
import { useFonts } from 'expo-font';

import {  Roboto_500Medium}
  from '@expo-google-fonts/roboto';



function Postsscreen({ uri }) {
  
 const [location, setLocation] = useState();

      const [fontsLoaded] = useFonts({
     Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      
      
    </View>
  )
}

export default Postsscreen