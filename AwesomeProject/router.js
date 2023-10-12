import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import Home from './Screens/MainScreen/Home';

const MainStack = createStackNavigator();

export const useRoute = (isAuth) => {
  
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Login">
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
    );
     }
  return (
    // <MainStack.Navigator >
      <MainStack.Screen name="Home" component={Home}
        options={{ headerShown: false, }} />
    // </MainStack.Navigator>
    )
}