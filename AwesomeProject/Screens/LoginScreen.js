import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, KeyboardAvoidingView, Keyboard} from 'react-native';
import { Pressable, Alert, TextInput, Platform, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { styles } from '../StyleSheet.js';
import { useEffect, useState } from 'react';

import Mountains from '../Images/photoBG.png'

function LoginScreen() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const logIn = () => {
    console.debug('You are logedin! Welcome!');
      console.debug({ email });
       console.debug({ password });
  };

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.fontFamilyProject}>
        <ImageBackground source={Mountains}
          resizeMode="cover"
          style={styles.image}>
          <StatusBar style="auto" />
          <View style={styles.loginmenu}>

            <Text style={[styles.headertextLogin, styles.fontFamilyProject]}
            >Увійти</Text>
          
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <TextInput
                style={[styles.inputForm, styles.fontFamilyProject]}
                value={email}
                onChangeText={setEmail}
                placeholder="Адреса електронної пошти" />
            
              <View style={styles.passwordInputStyle}>
                <TextInput
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                  style={[styles.inputForm, styles.fontFamilyProject]}
                  placeholder="Пароль" />
            
                <Pressable style={[styles.passwordShow, styles.fontFamilyProject]}
                  onPress={() => Alert.alert('Показати пароль')}>
                  <Text style={[styles.passwordShowText, styles.fontFamilyProject]}>
                    Показати</Text>
                </Pressable>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={logIn}>
                <Text style={[styles.buttontext, styles.fontFamilyProject]}>{"Увійти"}</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>

            <Pressable
              onPress={() => Alert.alert('Реєструємось')}
            >
              <Text style={[styles.bottomtext, styles.fontFamilyProject]}>Немає акаунту? Зареєструватися</Text>
            </Pressable>
            <View style={styles.homeIndicatorLogin} /></View>
        
        </ImageBackground>
      </View>

    </TouchableWithoutFeedback>
  );
}

export default LoginScreen