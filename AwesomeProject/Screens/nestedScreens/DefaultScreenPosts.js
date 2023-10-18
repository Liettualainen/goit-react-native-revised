// AIzaSyCNLypI7RkphJskEHQhIw5dp12vj3vwGJ4
import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Button, Text, StyleSheet, Dimensions } from "react-native";
// import MapView, { Marker } from "react-native-maps";
import { styles } from '../../StyleSheet.js';
import { useFonts } from 'expo-font';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';


function DefaultScreenPosts({ route , navigation}) {
  const [location, setLocation] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(route.params) {
       setPosts((prevState) => [...prevState, route.params])
    }
    return;
  },[route.params])

  const [fontsLoaded] = useFonts({
    Roboto_500Medium,});
  if (!fontsLoaded) {return null;}

  return (
      <View style={styles.container}>
             {/* <Button
              title="Go to Map"
              onPress={() => navigation.navigate("Map")}
          />
                  <Button
              title="Go to Comments"
              onPress={() => navigation.navigate("Comments")}
            /> */}

      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.photo }}
              style={styles.imageGellerty}
            />
            <Button
              title="Go to Map"
                    onPress={() => navigation.navigate("Map")}
                />
            <Button
              title="Go to Comments"
                    onPress={() => navigation.navigate("Comments")}
                />
          </View>)}
      />   
    </View>
  )
}

export default DefaultScreenPosts;