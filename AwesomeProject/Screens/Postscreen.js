// AIzaSyCNLypI7RkphJskEHQhIw5dp12vj3vwGJ4


import { styles } from '../StyleSheet.js';
import { View} from 'react-native';
import { useFonts } from 'expo-font';

import {  Roboto_500Medium}
  from '@expo-google-fonts/roboto';

function Postsscreen() {
      const [fontsLoaded] = useFonts({
     Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.postsscreenHeader}>
    
  </View>
  )
}

export default Postsscreen