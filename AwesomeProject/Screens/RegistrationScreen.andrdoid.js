import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, SwitchComponent,  } from 'react-native';
import { Pressable, Alert, TextInput, Image, } from 'react-native';
import { styles } from '../StyleSheet.js';
import { useEffect, useState } from 'react';

import Mountains from '../Images/photoBG.png'
const photoImage = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };

function RegistrationScreen () {

    const [isSwich, setisSwich] = useState(false);
    useEffect(() => {
        if (isSwich === false) {
            return;
        }
        setisSwich(true);
    }, [isSwich]);

    return (
        <View style={styles.fontFamilyProject}>
            <ImageBackground source={Mountains}
                resizeMode="cover"
                style={styles.image}>
                <StatusBar style="auto" />
                <View style={styles.registrationmenu}>
                    <Text style={[styles.headertext, styles.fontFamilyProject]}>Реєстрація</Text>
                    <TextInput style={[styles.inputForm, styles.fontFamilyProject]} placeholder="Логін" />
                    <TextInput style={[styles.inputForm, styles.fontFamilyProject]} placeholder="Адреса електронної пошти" />
                    <TextInput style={[styles.inputForm, styles.fontFamilyProject]} placeholder="Пароль" />

                    <Pressable
                        style={styles.button}
                        onPress={() => Alert.alert('Button pressed')}>
                        <Text style={[styles.buttontext, styles.fontFamilyProject]}>{"Зареєструватись"}</Text>
                    </Pressable>
                    <Pressable
                        onPress={isSwich}
                    >
                        <Text style={[styles.bottomtext, styles.fontFamilyProject]}>Вже є акаунт? Увійти</Text>
                    </Pressable>
              
                
                    <View style={styles.homeIndicator} />
                
                </View>
                <View style={styles.usersPhotoplace}>
                    <Image
                        style={styles.usersPhoto}
                        source={photoImage}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default RegistrationScreen