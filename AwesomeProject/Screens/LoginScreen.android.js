import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground,  } from 'react-native';
import { Pressable, Alert, TextInput, Image, } from 'react-native';
import { styles } from '../StyleSheet.js';
import { useEffect, useState } from 'react';

import Mountains from '../Images/photoBG.png'

function LoginScreen() {

    const [notSwich, setnotSwich] = useState(false);
    useEffect(() => {
        if (notSwich === false) {
            return;
        }
        setnotSwich(true);
    }, [notSwich]);

  
  return (
    <View style={styles.fontFamilyProject}>
      <ImageBackground source={Mountains}
        resizeMode="cover"
        style={styles.image}>
        <StatusBar style="auto" />
        <View style={styles.loginmenu}>
          <Text style={[styles.headertextLogin, styles.fontFamilyProject]}>Увійти</Text>

          <TextInput style={[styles.inputForm, styles.fontFamilyProject]} placeholder="Адреса електронної пошти" />
          <TextInput style={[styles.inputForm, styles.fontFamilyProject]} placeholder="Пароль" />
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert('Button pressed')}>
            <Text style={[styles.buttontext, styles.fontFamilyProject]}>{"Зареєструватись"}</Text>
          </Pressable>
               <Pressable
                        onPress={notSwich}
                    >
          <Text style={[styles.bottomtext, styles.fontFamilyProject]}>Немає акаунту? Зареєструватися</Text>
              </Pressable>
          <View style={styles.homeIndicatorLogin} />
        </View>
        {/* <View  style={styles.usersPhotoplace}>  
                 <Image 
         style={styles.usersPhoto}
          source={photoImage}   
      />
        </View> */}
      </ImageBackground>
    </View>
  )
 
}
export default LoginScreen