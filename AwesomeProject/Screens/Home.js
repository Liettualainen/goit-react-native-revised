import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, AntDesign, Octicons,MaterialIcons } from '@expo/vector-icons';
import { Pressable} from 'react-native';
import { styles } from '../StyleSheet.js';
import Postscreen from '../Screens/Postscreen.js'
import CreatePostsScreen from '../Screens/CreatePostsScreen.js'
import ProfileScreen from '../Screens/ProfileScreen.js'

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {

    return (
        <Tabs.Navigator
        screenOptions={{tabBarStyle: {borderBottomWidth: 0, marginBottom: 0,
                height: 83, paddingBottom: 34},}}
        >
            <Tabs.Screen
                name="Postscreen"
                component={Postscreen}
                options={{
                    title: "Публікації",
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: '#FFFFFF',
                        borderColor: '#212121',
                        borderBottomWidth: 0.2,},
                    headerTitleStyle: {color: "#212121",
                        fontFamily: 'Roboto_500Medium',
                        fontWeight: '500',
                        fontSize: 17},
                    headerRight: () => (<Pressable style={styles.postscreenicon}
                        onPress={() => navigation.navigate("Login")}>
                        <MaterialIcons name="logout" size={24} color="#BDBDBD" />
                    </Pressable>),
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="grid" size={24} color="black" />),
                             tabBarIconStyle: {
                        marginLeft: 90,},
                        }}
            />
            <Tabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                options={{
                     title: "Створити публікацію",
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#FFFFFF',
                        borderColor: '#212121',
                        borderBottomWidth: 0.2,},
                headerTitleStyle: {color: "#212121",
                        fontFamily: 'Roboto_500Medium',
                        fontWeight: '500',
                        fontSize: 17},
                tabBarItemStyle: {
                    position: "relative",
                     marginTop: 71,            
                    backgroundColor: "#212121",
                    width: 134, height: 5, 
                    borderRadius: 6,},
                tabBarIcon: ({ color, size }) => (
                    <Pressable  style={styles.bottomMenuButton}
                    title="Go to CreatePostsScreen"
                    onPress={() => navigation.navigate("CreatePostsScreen")}>
                    <AntDesign name="plus" size={13} color="white" />
                    </Pressable>),
                tabBarIconStyle: {
                    position: "relative", marginBottom: 48,},
                tabBarShowLabel: false,}}
            />
            <Tabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                title: "Профіль",
                headerTitleAlign: 'center',
                tabBarIcon: ({ color, size }) => (
                    <Octicons name="person" size={24} color="black" />),
                tabBarIconStyle: {
                    marginRight: 90,},
                tabBarShowLabel: false,}}
              />
    </Tabs.Navigator >
  );
};

export default Home;
