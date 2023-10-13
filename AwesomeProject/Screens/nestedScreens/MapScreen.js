import React from "react";
import { View, Text, StyleSheet } from "react-native";
import  MapView, { Marker } from "react-native-maps";


const  MapScreen = ({route, navigation})  => {

  return (
      <View>
    <Text>
    Map
    </Text>
    {/* <MapView
      style={{ flex: 1 }}
      initialRegion={{
        longtitude: 30.630592,
        latitude: 50.405066,
        longtitudeDelta: 0.001,
        latitudeDelta: 0.006,
      }}
    >
        <Marker
          title="travel photo"
        coordinate={{ longtitude: 30.630592, latitude: 50.405066, }}
      />
    </MapView> */}
  </View>
  )
}


export default MapScreen;




// if (route.params.location) {
    //     const location = route.params.location;
    //     return (
    //       <View style={{flex: 1,}}>
    //            {location && <MapView style={{flex: 1,}} showsUserLocation={true}         
    //              region={{
    //            latitude: location.latitude,
    //            longitude: location.longitude,
    //            latitudeDelta: 0.0922,
    //            longitudeDelta: 0.0421,
    //          }}>
    //             <Marker 
    //          coordinate={{ latitude: location.latitude, longitude: location.longitude}}
    //          title={route.params.locationName}/>
    //          </MapView>}
    //          </View>
    //          )
    // }

    // return (
    //    <View style={{flex: 1,}}>
    //     <MapView
    //     style={{flex: 1,}}
    //     region={{
    //       latitude: 37.78825,
    //       longitude: -122.4324,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421,
    //     }}
    //     mapType="standard"
    //     minZoomLevel={15}
    //     onMapReady={() => console.log("Map is ready")}
    //     onRegionChange={() => console.log("Region change")}
    //   >
    //     <Marker
    //       title="I am here"
    //       coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
    //       description='Hello'
    //     />
    //   </MapView>
    // </View>
    // )