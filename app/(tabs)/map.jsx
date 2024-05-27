import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  Image,
  Keyboard,
} from "react-native";
import * as Location from "expo-location";
import SearchInp from "../../components/SearchInp";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import { focus } from "../../values/atom/myAtoms";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

const Map = () => {
  const { t, i18 } = useTranslation();
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [currentRegion, setCurrentRegion] = useState(null);
  const mapRef = useRef(null);
  const [isFocused, setIsFocused] = useAtom(focus);

  const initialRegion = {
    latitude: 41.2995,
    longitude: 69.2401,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const requestLocationPermission = async () => {
    // try {
    //   const agree = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //     {
    //       title: "Разрешение на доступ к местоположению",
    //       message:
    //         "Нам необходимо разрешение для определения вашего текущего местоположения.",
    //       buttonNeutral: "Спросить позже",
    //       buttonNegative: "Отмена",
    //       buttonPositive: "OK",
    //     }
    //   );
    //   const { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status === "granted" && agree) {
    //     console.log("Разрешение получено");
    //     setLocationPermissionGranted(true);
    //   } else {
    //     console.log("Разрешение отклонено");
    //   }
    // } catch (error) {
    //   console.warn("Ошибка запроса разрешений:", error);
    // }
  };

  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      console.log("Текущее местоположение:", location.coords);
      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (error) {
      console.warn("Ошибка получения местоположения:", error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (locationPermissionGranted) {
      getCurrentLocation();
    }
  }, [locationPermissionGranted]);

  const handleGesture = (event) => {
    const { translationY } = event.nativeEvent;
    if (translationY > 0) {
      // Если свайп вниз
      setIsFocused((prevUserState) => ({
        ...prevUserState,
        map: false,
      }));
      // setIsFocused({ search: false });
      Keyboard.dismiss();
    }
  };
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={handleGesture}>
          <View
            id="main"
            className={`absolute z-20 p-[2vw] ${
              isFocused.map
                ? `h-[90%] bottom-0 right-0 w-[100%] p-[4vw] pt-[1vh] pb-0 rounded-3xl rounded-br-none rounded-bl-none`
                : "w-[90%] bottom-[2vh] right-[1vw] mx-[3.5vw] rounded-md"
            }  bg-white`}
          >
            {
              isFocused.map ?
              <View id="child" className="border-2 m-2 rounded-full w-[10vw] mx-auto mb-[5vh]"></View>
              : null
            }
            <SearchInp placeholder={t("searchText")} map={true} />
          </View>
        </PanGestureHandler>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={initialRegion}
          showsCompass={true}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={locationPermissionGranted}
          showsMyLocationButton={locationPermissionGranted}
          onMapReady={() => {
            console.log("Карта готова");
            getCurrentLocation();
          }}
          myLocationButtonEnabled={true}
          customMapStyle={{
            showsMyLocationButton: true,
          }}
          mapPadding={{ top: 40, right: 20, bottom: 40, left: 20 }}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
