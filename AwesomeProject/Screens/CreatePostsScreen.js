import React, { useState, useEffect,} from "react";
import { Alert, Text, TextInput, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

const CreatePostsscreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState('');
  const [type, setType] = useState(Camera.Constants.Type.back);
  
 
  const [location, setLocation] = useState(null);

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      // await MediaLibrary.createAssetAsync(photo);
      setPhoto(photo.uri);
      console.log("uri:", photo.uri);
              }
  };
  const CameraType = async () => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
  }
  const Publication = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);

    if (location) {navigation.navigate("Postscreen", {photo})
    }
    else {
            Alert.alert("There is no geolocation");
     }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
}, []);
  
    if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  
   return (
     <View style={styles.containerBackground}>
           <View style={styles.container}>
      <View style={styles.cameracontainer}>
        <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
           >
             {photo &&  <View style={styles.takePhotoContainer}>
               <Image source={{ uri: photo }}  style={styles.takePhotoContainerImage}/>
        </View>}
      
        <View style={styles.photoView}>
          <TouchableOpacity
                 style={styles.flipContainer}
                 onPress={CameraType}
            // onPress={ () => {
            //   setType(
            //     type === Camera.Constants.Type.back
            //       ? Camera.Constants.Type.front
            //       : Camera.Constants.Type.back
            //   );
            // }
            // }
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={takePhoto}
          >
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      </View>
      <View><Text style={styles.cameratext}>Завантажте фото</Text></View>
      
          <KeyboardAvoidingView
                         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.NameLocationInputStyle}>
                        <TextInput placeholderTextColor={'#BDBDBD'} 
                         style={[styles.inputText, styles.fontFamilyProject]}
                        // value={email}
                        // onChangeText={setEmail}
                        placeholder="Назва..." />
      </View>
           <View style={styles.PlaceLocationInputStyle}>
             <SimpleLineIcons style={styles.iconNameLocationInputStyle} size={24} name="location-pin" color="black" />
                {/* <Icon name='SlLocationPin' color='#000' size={14}/> */}
             <TextInput placeholderTextColor={'#BDBDBD'}
         
                         style={[styles.inputText, styles.fontFamilyProject]}
                        // value={email}
                        // onChangeText={setEmail}<h3> Lets go for a <FaBeer />? </h3>
                        placeholder="Місцевість..." />
      </View>          
        
                    <TouchableOpacity
          style={styles.publicButton}
          // onPress={() => Alert.alert('Показати пароль')}>
             onPress={Publication}> 
               {/* onPress={() => navigation.navigate("Postscreen")}>  */}
                        <Text style={[styles.buttontext, styles.fontFamilyProject]}>{"Опублікувати"}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
      
       </View>
    </View>


  );
}

export default CreatePostsscreen;

const styles = StyleSheet.create({

  containerBackground: {
      flex: 1 ,
      backgroundColor: "white",
  },

  container: {
      flex: 1 ,
    marginTop: 32,
    marginLeft: 24,
  },

    cameracontainer: {
      flex: 1,
      width: 343,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 16,
      overflow: "hidden",
      backgroundColor: "#F6F6F6",
  },

  camera: {
    flex: 1,
   width: 343,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
   
  },

  flipContainer: {
    alignSelf: "center",  
  },

  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
     borderColor: "red",
    borderWidth: 1,
    // height: 100,
    // width: 100
  },
  takePhotoContainerImage: {
   height: 80,
    width: 80
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
  cameratext: {
  fontFamily: 'Roboto_400Regular',
    fontWeight: "regular",
  textAlign: 'left',
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputText: {
  fontFamily: 'Roboto_400Regular',
    fontWeight: "regular",
  textAlign: 'left',
    fontSize: 16,
    color: "#212121",
  },

  NameLocationInputStyle: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    width: 343,
    height: 50,
    marginTop: 32,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
     color: "#212121",
    fontSize: 16,
    fontWeight: "regular"
  },
    PlaceLocationInputStyle: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    width: 343,
    height: 50,
    marginTop: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
     color: "#212121",
    fontSize: 16,
    fontWeight: "regular"
  },
  iconNameLocationInputStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: "#BDBDBD",
       paddingRight: 4,
  },

  publicButton: {
    width: 343,
    marginTop: 32,
    marginBottom: 111,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: "#F6F6F6",
    textAlign: "center",
  },
    buttontext: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    fontWeight: 'regular',
      color: "#BDBDBD",
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