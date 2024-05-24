import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  Image,
} from "react-native";
import * as Location from "expo-location";
import SearchInp from "../../components/SearchInp";
import { useTranslation } from "react-i18next";

const Map = () => {
  const { t, i18 } = useTranslation();
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [currentRegion, setCurrentRegion] = useState(null);
  const mapRef = useRef(null);

  const initialRegion = {
    latitude: 41.2995,
    longitude: 69.2401,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Функция запроса разрешений на доступ к местоположению
  const requestLocationPermission = async () => {
    try {
      const agree = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Разрешение на доступ к местоположению",
          message:
            "Нам необходимо разрешение для определения вашего текущего местоположения.",
          buttonNeutral: "Спросить позже",
          buttonNegative: "Отмена",
          buttonPositive: "OK",
        }
      );
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted" && agree) {
        console.log("Разрешение получено");
        setLocationPermissionGranted(true);
      } else {
        console.log("Разрешение отклонено");
      }
    } catch (error) {
      console.warn("Ошибка запроса разрешений:", error);
    }
  };

  // Функция для получения текущего местоположения пользователя
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
    requestLocationPermission(); // Запрашиваем разрешение при монтировании компонента
  }, []);

  useEffect(() => {
    if (locationPermissionGranted) {
      getCurrentLocation(); // Получаем текущее местоположение, если разрешение получено
    }
  }, [locationPermissionGranted]);

  return (
    <View style={styles.container}>
      <View className='absolute bottom-[2vh] right-[1vw] z-20 w-[90%] rounded-md p-[2vw] mx-[4vw] bg-white'>
        <SearchInp placeholder={t("searchText")} />
      </View>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
        showsCompass={true}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={locationPermissionGranted} // Отображаем местоположение пользователя, если разрешение получено
        showsMyLocationButton={locationPermissionGranted} // Отображаем кнопку центрирования на местоположении пользователя
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
