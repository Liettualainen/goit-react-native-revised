import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,  } from 'react-native';
import {Pressable, Alert,  TextInput, Image, } from 'react-native';



import Mountains from './Images/photoBG.png'
const photoImage = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };

export default function App() {
  return (
    <View style={styles.container}>
         <ImageBackground source={Mountains}
        resizeMode="cover"
        style={styles.image}>        
        <StatusBar style="auto" />



        
        <View style={styles.registrationmenu}>
          
          <Text style={styles.headertext}>Реєстрація</Text>
          
          <TextInput style={styles.inputForm} placeholder="Логін" />
          
          <TextInput style={styles.inputForm} placeholder="Адреса електронної пошти" />
          
        <TextInput style={styles.inputForm} placeholder="Пароль" />

               <Pressable
          style={styles.button}
          onPress={() => Alert.alert('Button pressed')}>
          <Text style={styles.buttontext}>{"Зареєструватись"}</Text>
          </Pressable>
          <Text style={styles.bottomtext}>Вже є акаунт? Увійти</Text>
          <View style={styles.homeIndicator} />          
      
        </View>
   
                <View  style={styles.usersPhotoplace}>  
                 <Image 
         style={styles.usersPhoto}
          source={photoImage}   
      />
        </View>

           </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center', 
  },
      image: {
      justifyContent: 'center',
        alignItems: 'center',
        width: 375,
        height: 812,
  },
      
  registrationmenu: {
    height: 549,
    width: 375,
    marginTop: 263,
    alignItems: 'center', 
    backgroundColor: "white",
    borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
  },     
      
  headertext: {
    marginTop: 92,
    marginBottom:16,
    fontSize: 30,
    fontWeight: 'medium',
    color: "#212121",
      },

  inputForm: {
    width: 343,
    height: 50,
    marginTop: 16,
    paddingLeft: 16,
    textAlign: "left",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",      
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "regular",
  },

  button: {
    width: 343,
    marginTop: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: "#FF6C00",
    textAlign: "center",
  },
    buttontext: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    fontWeight: 'regular',
    color: "#FFFFFF",
  },
    
  bottomtext: {
    paddingTop: 16,
    color: "#1B4371",
    fontWeight: "regular",
     fontSize: 16,
  },

  homeIndicator: {
    width: 134,
    height: 5,
    marginTop: 57,
    backgroundColor: "#212121",
        borderRadius: 6,
  },


  usersPhotoplace: {
    position: "absolute",
    width: 120,
    height: 120,
    top: 203,
     alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: "#F6F6F6",
      borderRadius: 6,
    
  },
  usersPhoto: {
     width: 100,
    height: 100,
  },


});
