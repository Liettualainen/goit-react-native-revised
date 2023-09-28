import { StatusBar } from 'expo-status-bar';
import {
  Text, View, ImageBackground, KeyboardAvoidingView,
  Keyboard,  Pressable, Alert, TextInput, Platform, TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import { styles } from '../StyleSheet.js';
import { useState, useEffect} from 'react';

import Mountains from '../Images/photoBG.png'

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/auth/authOperations";
import { selectIsLoggedIn } from "../redux/auth/selectors";


const initialData = {
  email: '',
  password: ''
}

function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
const [formData, setFormData] = useState(initialData);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
       navigation.navigate("Home");
    } 
  }, [isLoggedIn])


    const FormSubmit = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regEx.test(formData.email)) {

        setFormData(initialData);
        dispatch(logIn({
        email: formData.email,
        password: formData.password}));     
        navigation.navigate("Home");

        } else if (!regEx.test(formData.email) && formData.email !== "") {
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
                value={formData.email}
                onChangeText={(value) =>setFormData((prevState) => ({...prevState, email: value}))}
                placeholder="Адреса електронної пошти" />
            
              <View style={styles.passwordInputStyle}>
                <TextInput placeholderTextColor={'#BDBDBD'} 
                  secureTextEntry={true}
                  value={formData.password}
                  onChangeText={(value) =>setFormData((prevState) => ({...prevState, password: value}))}
                  style={[styles.inputForm, styles.fontFamilyProject]}
                  placeholder="Пароль" />
              </View>

              <TouchableOpacity
                style={styles.button}
               onPress={FormSubmit}>
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