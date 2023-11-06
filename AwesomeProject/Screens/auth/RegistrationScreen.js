import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from 'expo-status-bar';
import {Text, View, ImageBackground, TouchableOpacity,
    KeyboardAvoidingView, Keyboard, Pressable, Alert,
    TextInput, Image, Platform, TouchableWithoutFeedback
} from 'react-native';

import { register } from "../../redux/auth/authOperations.js";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { styles } from '../../StyleSheet.js';
import Mountains from '../../Images/photoBG.png'
import avatar from '../../Images/avatar.png';

const initialData = {
  nickName: '',
  email: '',
  password: ''
}

function RegistrationScreen ({ navigation }) {
    // const [login, setLogin] = useState("");
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
        dispatch(register({
        nickName: formData.nickName,
        email: formData.email,
        password: formData.password}));     
        navigation.navigate("Home");
        console.log(formData);
        } else if (!regEx.test(formData.email) && formData.email !== "") {
            Alert.alert("Invalid email");
        } else {
            Alert.alert("Input email please");
     }
  }

  const [showPass, setShowPass] = useState(true);
  const showPas = () => {
    setShowPass(!showPass);
  }
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <View style={[styles.container, { fontFamily: 'Roboto_400Regular' }, {marginTop: isShowKeyBoard ? -80 : 0}]}>
          <ImageBackground source={Mountains}
            resizeMode="cover"
            style={styles.image}>
                <StatusBar style="auto" />
            <View style={styles.registrationmenu}>
                        <Text style={[styles.headertext, styles.fontFamilyProject, ]}>
                Реєстрація</Text>
              
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >     
                        <TextInput placeholderTextColor={'#BDBDBD'} 
                        style={[styles.inputForm, styles.fontFamilyProject]}
                        value={formData.nickName}
                        onChangeText={(value) => setFormData((prevState) => ({...prevState, nickName: value}))}
                        placeholder="Логін"
                        onFocus={() => setIsShowKeyBoard(true)}
                  />
                        <TextInput placeholderTextColor={'#BDBDBD'}                              
                        style={[styles.inputForm, styles.fontFamilyProject]}
                        value={formData.email}
                        onChangeText={(value) => setFormData((prevState) => ({...prevState, email: value}))}
                        autoComplete="email"
                        placeholder="Адреса електронної пошти"
                        onFocus={() => setIsShowKeyBoard(true)}
                  />
                <View style={styles.passwordInputStyle}>
                        <TextInput placeholderTextColor={'#BDBDBD'} 
                        style={[styles.inputForm, styles.fontFamilyProject]}
                        secureTextEntry={showPass}
                        value={formData.password}
                        onChangeText={(value) => setFormData((prevState) => ({...prevState, password: value}))}
                        autoComplete="password"  
                        placeholder="Пароль"
                        onFocus={() => setIsShowKeyBoard(true)}
                    />
                <Pressable style={[styles.passwordShow, styles.fontFamilyProject]} onPress={showPas}>
                          <Text style={[styles.passwordShowText, styles.fontFamilyProject]} >Показати</Text>
                        </Pressable>
                </View>
                
                    <TouchableOpacity
                                style={styles.button}
                        onPress={FormSubmit}>
                        {/* // onPress={() => navigation.navigate("Home")}> */}
                        <Text style={[styles.buttontext, styles.fontFamilyProject]}>{"Зареєструватись"}</Text>
                  </TouchableOpacity>
                  
                </KeyboardAvoidingView>
                        
                    <Pressable title="Go to Loginscreen"
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={[styles.bottomtext, styles.fontFamilyProject]}>Вже є акаунт? Увійти</Text>
                    </Pressable>
                    <View style={styles.homeIndicator} /></View>
            <View style={styles.usersPhotoplace }>
                    <Image style={styles.usersPhoto}
                        source={avatar} />
                    <Pressable style={styles.buttonPhoto}
                        onPress={() => Alert.alert('Завантажте ваше фото')}>
                        <Text style={styles.buttonPhotocross}>+</Text>
                    </Pressable>
        </View>
        
            </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RegistrationScreen