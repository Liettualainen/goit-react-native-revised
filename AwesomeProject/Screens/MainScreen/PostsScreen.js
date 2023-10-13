import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
      <NestedScreen.Navigator initialRouteName="DefaultScreenPosts">
        <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPosts}
        options={{
          // headerShown: false,
          }}
        />
        <NestedScreen.Screen name="Map" component={MapScreen}
        options={{
          // headerShown: false,
            }}
          />
            <NestedScreen.Screen name="Comments" component={CommentsScreen}
        options={{
          // headerShown: false,
        }} />
       </NestedScreen.Navigator>
  );
};

export default PostsScreen;


































// // AIzaSyCNLypI7RkphJskEHQhIw5dp12vj3vwGJ4
// import React, { useState, useEffect } from "react";
// import { View, FlatList, Image, Button, Text, StyleSheet, Dimensions } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import { styles } from '../../StyleSheet.js';
// import { useFonts } from 'expo-font';
// import { Roboto_500Medium } from '@expo-google-fonts/roboto';

// import MapScreen from '../nestedScreens/MapScreen.js'

// function Postsscreen({ route }, {navigation}) {
//   const [location, setLocation] = useState();
//   const [posts, setPosts] = useState([]);



//   useEffect(() => {
//     if(route.params) {
//        setPosts((prevState) => [...prevState, route.params])
//     }
//     return;
//   },[route.params])

//   const [fontsLoaded] = useFonts({
//     Roboto_500Medium,});
//   if (!fontsLoaded) {return null;}

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         keyExtractor={(item, indx) => indx.toString()}
//         renderItem={({ item }) => (
//           <View>
//             <Image
//               source={{ uri: item.photo }}
//               style={styles.imageGellerty}
//             />
//             <Button
//               title="Go to Map"
//               onPress={() => navigation.navigate("MapScreen")}
//             />
//           </View>)}
        
//       />   
//     </View>
//   )
// }

// export default Postsscreen