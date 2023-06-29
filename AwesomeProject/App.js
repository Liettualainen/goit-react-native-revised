import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './StyleSheet';
import Postsscreen from './Screens/Postscreen.android';

// import { Roboto_400Regular } from '@expo-google-fonts/inter';
// import Mountains from './Images/photoBG.png'
// const photoImage = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  //  let [fontsLoaded] = useFonts({
  //  Roboto_400Regular,
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }
  
  return (
    <View style={[styles.container, { fontFamily: 'Roboto' }]}>
        <Postsscreen />
    </View>
  );
}

