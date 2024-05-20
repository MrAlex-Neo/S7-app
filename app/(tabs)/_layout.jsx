import { useState, useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import { useTranslation } from "react-i18next";

const TabIcon = ({ icon, color, name, focused }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Начальное значение 1
  const slideAnim = useRef(new Animated.Value(0)).current; // Начальное значение 0

  useEffect(() => {
      fadeAnim.setValue(0);
      slideAnim.setValue(-50);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();

      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }).start();
    console.log(focused)
  }, [focused]); // Добавлено [focused] для перезапуска анимации при изменении фокуса

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 40, height: 40 }} // Размер иконки
      />
      <Text
        className={`font-robotoMedium text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </Animated.View>
  );
};

const TabsLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#19B775",
          tabBarInactiveTintColor: "#A2A2A2",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopColor: "#A2A2A2",
            paddingBottom: 5,
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="map"
          options={{
            title: t("map"),
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={!focused ? icons.map : icons.mapActive}
                color={color}
                name={t("map")}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="stations"
          options={{
            title: t("stations"),
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={!focused ? icons.stations : icons.stationsActive}
                color={color}
                name={t("stations")}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favourites"
          options={{
            title: t("favourites"),
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={!focused ? icons.favourites : icons.favouritesActive}
                color={color}
                name={t("favourites")}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: t("profile"),
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={!focused ? icons.profile : icons.profileActive}
                color={color}
                name={t("profile")}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
