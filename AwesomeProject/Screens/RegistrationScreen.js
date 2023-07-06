import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView,Keyboard} from 'react-native';
import { Pressable, Alert, TextInput, Image, Platform, TouchableWithoutFeedback} from 'react-native';
import { styles } from '../StyleSheet.js';
import { useState } from 'react';
import React from 'react';

import Mountains from '../Images/photoBG.png'
const photoImage = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };

function RegistrationScreen ({ navigation }) {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View  style={[styles.container, { fontFamily: 'Roboto_400Regular' }]}>
            <ImageBackground source={Mountains}
                resizeMode="cover"
                style={styles.image}>
                <StatusBar style="auto" />
                <View style={styles.registrationmenu}>
                        <Text style={[styles.headertext, styles.fontFamilyProject]}>
                            Реєстрація</Text>
                        
                <KeyboardAvoidingView
                         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                           <TextInput
                        style={[styles.inputForm, styles.fontFamilyProject]}
                        value={login}
                         onChangeText={setLogin}
                        placeholder="Логін" />
                        <TextInput                             
                        style={[styles.inputForm, styles.fontFamilyProject]}
                        value={email}
                        onChangeText={setEmail}
                        autoComplete="email"
                        placeholder="Адреса електронної пошти" />
                    <View style={styles.passwordInputStyle}>
                        <TextInput
                        style={[styles.inputForm, styles.fontFamilyProject]}
                        value={password}
                        onChangeText={setPassword}
                        autoComplete="password"           
                        placeholder="Пароль" />
                        <Pressable style={[styles.passwordShow, styles.fontFamilyProject]} onPress={() => Alert.alert('Показати пароль')}>
                          <Text style={[styles.passwordShowText, styles.fontFamilyProject]} >Показати</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Home")}>
                        <Text style={[styles.buttontext, styles.fontFamilyProject]}>{"Зареєструватись"}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                        
                    <Pressable title="Go to Loginscreen"
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={[styles.bottomtext, styles.fontFamilyProject]}>Вже є акаунт? Увійти</Text>
                    </Pressable>
                    <View style={styles.homeIndicator} /></View>
                    <View style={styles.usersPhotoplace}>
                    <Image style={styles.usersPhoto}
                        source={photoImage} />
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