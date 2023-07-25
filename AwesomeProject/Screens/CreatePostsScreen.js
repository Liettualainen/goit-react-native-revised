import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

 function Postsscreen () {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>

      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
       </View>

  );
}

export default Postsscreen

const styles = StyleSheet.create({

  container: {
    flex: 0.5 ,
       marginTop: 32,
    alignItems: 'center',
    margin: 24,
    backgroundColor: "white",
    borderWidth: 1,
      borderColor: "#E8E8E8",
    borderRadius: 16,
    overflow: "hidden",

  },
  camera: {
    flex: 1,
    width: 343,
    height: 240,
      alignItems: 'center',
    justifyContent: 'center',
  

  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    marginBottom: 10,
  },

  flipContainer: {
    flex: 0.2,
    alignSelf: "center",  
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});


// import { styles } from '../StyleSheet.js';
// import { View} from 'react-native';
// import { useFonts } from 'expo-font';
// import { Pressable, Alert, TextInput, Text} from 'react-native';

// import {  Roboto_500Medium}
//   from '@expo-google-fonts/roboto';

// function Postsscreen() {
//       const [fontsLoaded] = useFonts({
//      Roboto_500Medium,
//   });
//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
   
//             <View style={styles.passwordInputStyle}>
//               <TextInput placeholderTextColor={'#BDBDBD'} 
//                   style={[styles.inputForm, styles.fontFamilyProject]}
                    
//                  autoComplete="password"  
//                   placeholder="Пароль" />
//               <Pressable style={[styles.passwordShow, styles.fontFamilyProject]} onPress={() => Alert.alert('Показати пароль')}>
//                   <Text style={[styles.passwordShowText, styles.fontFamilyProject]} >Показати</Text>
//                         </Pressable>
//                     </View>

//   )
// }

// export default Postsscreen