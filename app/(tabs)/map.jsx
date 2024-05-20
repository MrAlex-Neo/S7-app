import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, PermissionsAndroid } from "react-native";

export default function Map() {
  const initialRegion = {
    latitude: 41.2995,
    longitude: 69.2401,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Функция запроса разрешений на доступ к местоположению
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Разрешение на доступ к местоположению",
          message:
            "Мы нуждаемся в вашем разрешении для определения вашего текущего местоположения.",
          buttonNeutral: "Спросить позже",
          buttonNegative: "Отмена",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Разрешение получено");
      } else {
        console.log("Разрешение отклонено");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  React.useEffect(() => {
    requestLocationPermission(); // Запрашиваем разрешение при монтировании компонента
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true} // Устанавливаем в true, чтобы отображать местоположение пользователя
        showsMyLocationButton={true} // Устанавливаем в true, чтобы отображать кнопку центрирования на местоположении пользователя
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
