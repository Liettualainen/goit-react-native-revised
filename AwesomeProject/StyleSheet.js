import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({

  // fontFamilyProject: {
  //   fontFamily: 'Roboto-Regular',
  // },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center', 
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
    color: "#BDBDBD",
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
    width: 120,
    height: 120,
    top: 203,
     alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: "#F6F6F6",
      borderRadius: 6,
    
  },
  usersPhoto: {
     width: 100,
    height: 100,
  },


});
