import 'react-native-gesture-handler';
import React, {useState} from "react";
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold }
  from '@expo-google-fonts/roboto';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch } from "react-redux";
import { store,persistor } from './redux/store';
import { useRoute } from './router';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(null);

  const [fontsLoaded] = useFonts({
     Roboto_400Regular, Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  
  if (isReady) {
    return (
        <AppLoading
      onFinish={() => setIsReady(true)}
      ofError={console.warn}
    />
    )
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer >
          {routing}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )

}


// import { styles } from './StyleSheet';  
// import LoginScreen from './Screens/auth/LoginScreen';
// import RegistrationScreen from './Screens/auth/RegistrationScreen';
// import Home from './Screens/Home';
// import { createStackNavigator } from "@react-navigation/stack";

// const useRoute = (isAuth) => {
//     const MainStack = createStackNavigator();
//   if (!isAuth) {
//       return (
//               <MainStack.Navigator  initialRouteName="Login">
//         <MainStack.Screen name="Registration" component={RegistrationScreen}
//           options={{headerShown: false,
//           }}
//         />
//         <MainStack.Screen name="Login" component={LoginScreen}
//            options={{headerShown: false,
//             }}
//           />
//             <MainStack.Screen name="Home" component={Home}
//           options={{ headerShown: false,}} />
//        </MainStack.Navigator>
//     );
//      }
//   return (
//       <MainStack.Navigator >
//           <MainStack.Screen name="Home" component={Home}
//           options={{ headerShown: false,}} />
//        </MainStack.Navigator>
//     )
// }

// import { Roboto_400Regular } from '@expo-google-fonts/inter';
// import Mountains from './Images/photoBG.png'
// const photoImage = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };
