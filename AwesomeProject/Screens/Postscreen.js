// AIzaSyCNLypI7RkphJskEHQhIw5dp12vj3vwGJ4

import React, { useState, useEffect } from "react";
import { View, Image,Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from '../StyleSheet.js';
import { useFonts } from 'expo-font';

import {  Roboto_500Medium}
  from '@expo-google-fonts/roboto';

  const photoImage = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };


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
         <Image style={styles.usersPhoto}
        source={photoImage} />
      
    </View>
  )
}

export default Postsscreen