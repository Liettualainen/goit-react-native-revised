import { StyleSheet } from 'react-native';

 
export const styles = StyleSheet.create({

  fontFamilyProject: {
    fontFamily: 'Roboto_400Regular',

  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    marginHorizontal: 10,
  },

  image: {

    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 812,
  },
      
  registrationmenu: {
    height: 549,
    width: 375,
    marginTop: 263,
    alignItems: 'center',
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  loginmenu: {
    height: 489,
    width: 375,
    marginTop: 323,
    alignItems: 'center',
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },


  headertext: {
    marginTop: 92,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 'medium',
    color: "#212121",
  },
  headertextLogin: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 30,
    fontWeight: 'medium',
    color: "#212121",
  },

  inputForm: {
    width: 343,
    height: 50,
    marginTop: 16,
    paddingLeft: 16,
    textAlign: "left",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 16,
    fontWeight: "regular",
  },


  
  passwordInputStyle: {
    // flexDirections: 'row',
    justifyContents: 'center',
    alignItems: 'flex-end',

  },
    passwordShow: {
      position: "absolute",
      color: "#1B4371",
  
      marginTop: 30,   
       width: 100,
      height: 30,
    
      // backgroundColor: "red",
      fontSize: 16,
      fontWeight: "regular",
  },

  passwordShowText: {
    // position: "absolute",
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "regular",

  },



  button: {
    width: 343,
    marginTop: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: "#FF6C00",
    textAlign: "center",
  },
    buttontext: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    fontWeight: 'regular',
      color: "#FFFFFF",
  },
    
  bottomtext: {
    paddingTop: 16,
    color: "#1B4371",
    fontWeight: "regular",
     fontSize: 16,
  },

  homeIndicator: {
    width: 134,
    height: 5,
    marginTop: 57,
    backgroundColor: "#212121",
        borderRadius: 6,
  },

  homeIndicatorLogin: {
    width: 134,
    height: 5,
    marginTop: 123,
    backgroundColor: "#212121",
        borderRadius: 6,
  },


  usersPhotoplace: {
    position: "absolute",
    width: 110,
    height: 110,
    top: 203,
     alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: "#F6F6F6",
      borderRadius: 6,
    
  },
  usersPhoto: {
      position: "absolute",
     width: 120,
    height: 120,
    borderRadius: 20,
    overflow: "hidden"

  },

  buttonPhoto: {
 
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 25,
    height: 25,
    marginLeft: 120,
    marginTop: 70,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 50,
  },

  buttonPhotocross: {
    // position: "relative",
        marginTop: -8, 
    color: "rgba(232, 232, 232, 1)",
       fontWeight: 300,
    fontSize: 26,
    //  lineHeight: "inherit",
},
  home: {
   
 },

  postsscreenHeader: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginTop: 44,
    // marginBottom: 530,
    height: 44,
    paddingTop: 11,
    paddingBottom: 11,
    borderColor: '#212121',
    borderBottomWidth: 0.2,
   
  },

  postscreenHeaderText: {  
    textAlign: 'center',
    alignSelf: 'center',
     fontSize: 17,
    fontWeight: '500',
    color: "#212121",
       fontFamily: 'Roboto_500Medium',
    
  },
  postscreenicon: {
    position: "absolute",
    alignSelf: 'flex-end',
      paddingTop: -51,
       paddingRight: 10,
  },
  
  postsscreenBody: {
    height: 400,
    width: 372,
     backgroundColor: "red",
  },
  
  homeHeader: {

    width: 100,
    height: 100,
     backgroundColor: "#1212",
  },
  
  bottomMenuButton: {
  
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: "#FF6C00",
    textAlign: "center",
  },
  

  profileContainer: {

    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  BGimage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 745,
    marginTop: 20
  
  },

    imageAvatar: {
        width: 120,
        height: 120,
        position: 'absolute',
        alignSelf: 'center',
        top: 90,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
      },

    logOutBtn: {
        marginRight: 15, 
        // position: 'absolute',
        left: 180,
        top: 200,
    },
     
     
});


