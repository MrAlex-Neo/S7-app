import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Keyboard,
  Animated,
  ScrollView,
} from "react-native";
import * as Location from "expo-location";
import SearchInp from "../../components/SearchInp";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import { focus } from "../../values/atom/myAtoms";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import StationCard from "../../components/StationCard";
// import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

const Map = () => {
  const { t, i18 } = useTranslation();
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [currentRegion, setCurrentRegion] = useState(null);
  const mapRef = useRef(null);
  const [isFocused, setIsFocused] = useAtom(focus);
  const translateY = useRef(new Animated.Value(0)).current;
  const initialRegion = {
    latitude: 41.2995,
    longitude: 69.2401,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const requestLocationPermission = async () => {
    setLocationPermissionGranted(true);

    // try {
    //   if (Platform.OS === "android") {
    //     const agree = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //       {
    //         title: "Разрешение на доступ к местоположению",
    //         message:
    //           "Нам необходимо разрешение для определения вашего текущего местоположения.",
    //         buttonNeutral: "Спросить позже",
    //         buttonNegative: "Отмена",
    //         buttonPositive: "OK",
    //       }
    //     );

    //     if (agree === PermissionsAndroid.RESULTS.GRANTED) {
    //       // console.log(LocationServicesDialogBox)
    //       console.log("Разрешение получено");
    //       setLocationPermissionGranted(true);
    //       // Включение службы геолокации на Android
    //       // LocationServicesDialogBox.checkLocationServicesIsEnabled({
    //       //   message: "<h2>Требуется включение геолокации</h2>Приложению необходимо включить службы геолокации для определения вашего текущего местоположения.",
    //       //   ok: "OK",
    //       //   cancel: "Отмена",
    //       // }).then(() => {
    //       //   console.log("Геолокация включена");
    //       // }).catch((error) => {
    //       //   console.log("Ошибка включения геолокации:", error.message);
    //       // });
    //     } else {
    //       console.log("Разрешение отклонено");
    //     }
    //   } else {
    //     const { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status === "granted") {
    //       console.log("Разрешение получено");
    //       setLocationPermissionGranted(true);
    //     } else {
    //       console.log("Разрешение отклонено");
    //     }
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

  const handleGesture = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: false }
  );

  const handleStateChange = ({ nativeEvent }) => {
    const { translationY } = nativeEvent;
    console.log(translationY);
    if (nativeEvent.state === State.END) {
      if (translationY > 20 * (Platform.OS === "ios" ? 8.5 : 10)) {
        setIsFocused((prevUserState) => ({
          ...prevUserState,
          map: false,
        }));
        Keyboard.dismiss();
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1">
        <Animated.View
          id="main"
          className={`absolute z-20 p-[2vw] ${
            isFocused.map
              ? `h-[90%] bottom-0 right-0 w-[100%] p-[4vw] pt-[1vh] pb-0 rounded-3xl rounded-br-none rounded-bl-none`
              : "w-[90%] bottom-[2vh] right-[1vw] mx-[3.5vw] rounded-md"
          }  bg-white`}
          style={{ transform: [{ translateY }] }}
        >
          {isFocused.map ? (
            <PanGestureHandler
              onGestureEvent={handleGesture}
              onHandlerStateChange={handleStateChange}
              activeOffsetY={[-9999, 0]}
            >
              <Animated.View className="h-[6vh]">
                <Animated.View
                  id="child"
                  className="border-2 m-2 rounded-full w-[10vw] mx-auto"
                />
              </Animated.View>
            </PanGestureHandler>
          ) : null}
          <SearchInp placeholder={t("searchText")} map={true} />
          {isFocused.map ? (
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              <View className="flex-col pt-[3vh]">
                <StationCard busy={true} />
                <StationCard busy={true} />
                <StationCard busy={false} />
                <StationCard busy={true} />
                <StationCard busy={false} />
                <StationCard busy={false} />
                <StationCard busy={true} />
              </View>
            </ScrollView>
          ) : null}
        </Animated.View>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={initialRegion}
          showsCompass={true}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={locationPermissionGranted}
          // showsMyLocationButton={locationPermissionGranted}
          onMapReady={() => {
            console.log("Карта готова");
            getCurrentLocation();
          }}
          // myLocationButtonEnabled={true}
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
  map: {
    width: "100%",
    height: "100%",
  },
});
