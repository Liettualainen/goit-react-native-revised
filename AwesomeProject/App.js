import 'react-native-gesture-handler';
import React from "react";
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold }
  from '@expo-google-fonts/roboto';

import { styles } from './StyleSheet';  
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import Home from './Screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
     Roboto_400Regular, Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer >
      <MainStack.Navigator  initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen}
          options={{headerShown: false,
          }}
        />
        <MainStack.Screen name="Login" component={LoginScreen}
           options={{headerShown: false,
            }}
        />
        <MainStack.Screen name="Home" component={Home}
          options={{ headerShown: false,}} />
       </MainStack.Navigator>
     </NavigationContainer>
  );
}

// import { Roboto_400Regular } from '@expo-google-fonts/inter';
// import Mountains from './Images/photoBG.png'
// const photoImage = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };
