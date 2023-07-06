import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, KeyboardAvoidingView, Keyboard} from 'react-native';
import { Pressable, TextInput, Platform, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { styles } from '../StyleSheet.js';
import { useState} from 'react';

import Mountains from '../Images/photoBG.png'

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
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
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}>
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