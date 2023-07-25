import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, KeyboardAvoidingView, Keyboard} from 'react-native';
import { Pressable, Alert, TextInput, Platform, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { styles } from '../StyleSheet.js';
import { useState} from 'react';

import Mountains from '../Images/photoBG.png'

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
        navigation.navigate("Home");
        } else if (!regEx.test(email) && email !== "") {
            Alert.alert("Invalid email");
        } else {
            Alert.alert("Input email please");
     }
}
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { fontFamily: 'Roboto_400Regular' }]}>
        <ImageBackground source={Mountains}
          resizeMode="cover"
          style={styles.image}>
          <StatusBar />
          <View style={styles.loginmenu}>
            <Text style={[styles.headertextLogin, styles.fontFamilyProject]}
            >Увійти</Text>
          
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <TextInput placeholderTextColor={'#BDBDBD'} 
                style={[styles.inputForm, styles.fontFamilyProject]}
                value={email}
                onChangeText={setEmail}
                placeholder="Адреса електронної пошти" />
            
              <View style={styles.passwordInputStyle}>
                <TextInput placeholderTextColor={'#BDBDBD'} 
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                  style={[styles.inputForm, styles.fontFamilyProject]}
                  placeholder="Пароль" />
              </View>

              <TouchableOpacity
                style={styles.button}
               onPress={emailValidation}>
                <Text style={[styles.buttontext, styles.fontFamilyProject]}>{"Увійти"}</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>

            <Pressable
              title="Go to Registrationscreen"
              onPress={() => navigation.navigate("Registration")}>
            <Text style={[styles.bottomtext, styles.fontFamilyProject]}>Немає акаунту? Зареєструватися</Text>
            </Pressable>
            <View style={styles.homeIndicatorLogin} /></View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen