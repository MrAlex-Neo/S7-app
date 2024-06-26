import "intl-pluralrules";
import { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { I18nextProvider } from "react-i18next";
import i18next from "../values/i18n/i18n";
import { useTranslation } from "react-i18next";
import { Redirect, router } from "expo-router";
import { Dimensions } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Pagination from "../components/Pagination";
import HighlightKeyword from "../components/HighLightKeyword";
import LangChangeBtn from "../components/langChangeButton";
import { images } from "../constants";

export default function App() {
  const { t, i18n } = useTranslation();
  const [part, setPart] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    slideAnim.setValue(-50);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,

      useNativeDriver: true,
    }).start();

    // Animated.spring(slideAnim, {
    //   toValue: 0,
    //   friction: 5,
    //   useNativeDriver: true,
    // }).start();
  }, [part]);

  const welcomeInfo = [
    {
      Img: images.image1,
    },
    {
      Img: images.image2,
      text: t("welcome_1"),
      text_1: t("welcome_1_1"),
    },
    {
      Img: images.image3,
      text: t("welcome_2"),
    },
    {
      Img: images.image4,
      text: t("welcome_3"),
      text_1: t("welcome_3_1"),
    },
    {
      Img: images.image5,
      text: t("welcome"),
      span: t("welcome_4"),
    },
  ];

  const changeLanguage = (lng) => {
    setPart(1);
    i18n.changeLanguage(lng); // Смена языка
  };

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <SafeAreaView className="bg-white h-full">
          <ScrollView contentContainerStyle={{ height: "100%" }}>
            <View className="w-full flex-col justify-end items-center min-h-[100vh] h-full pb-[3vh]">
              <Animated.View
                className={`w-full flex-col ${
                  part === 0 ? "justify-start" : " justify-end"
                } items-center ${part === 4 ? "min-h-[30vh]" : "min-h-[50vh]"}`}
                style={{
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }],
                }}
              >
                <Image
                  source={welcomeInfo[part].Img}
                  className={` ${
                    part === 4 ? "w-8/12 h-[35vh] mt-14" : "w-11/12 h-[40vh]"
                  } `}
                  resizeMode="contain"
                />
              </Animated.View>
              {part === 0 ? (
                <View className="w-full flex-col justify-between items-center px-4 min-h-[29vh]">
                  <LangChangeBtn
                    title="O’zbekcha"
                    containerStyles="w-full"
                    handlePress={() => {
                      changeLanguage("uz");
                    }}
                    img={images.uz_flag}
                  />
                  <LangChangeBtn
                    title="Русский"
                    containerStyles="w-full"
                    handlePress={() => changeLanguage("ru")}
                    img={images.ru_flag}
                  />
                  <LangChangeBtn
                    title="English"
                    containerStyles="w-full"
                    handlePress={() => changeLanguage("en")}
                    img={images.us_flag}
                  />
                </View>
              ) : part !== 0 ? (
                <View
                  className={`flex-col text-center justify-between items-center ${
                    part === 4 ? "min-h-[42vh]" : "min-h-[37vh]"
                  } mx-2`}
                >
                  <Animated.View
                    style={{
                      opacity: fadeAnim,
                      transform: [{ translateY: slideAnim }],
                    }}
                  >
                    <View
                      className={`flex-col justify-end text-center items-center ${
                        part === 4 ? "h-[20vh]" : "h-[27vh]"
                      } `}
                    >
                      <HighlightKeyword
                        text={welcomeInfo[part].text} // Исходный текст
                        keyword="S7 Energy" // Ключевое слово для выделения
                        highlightStyle={`font-robotoBold tracking-wider text-xl text-xl text-center mx-[1vh]`} // Стиль выделения
                      />
                      {welcomeInfo[part].text_1 ? (
                        <Text className="font-robotoBold tracking-wider text-xl text-center mx-2 leading-8">
                          {welcomeInfo[part].text_1}
                        </Text>
                      ) : null}
                      {welcomeInfo[part].span ? (
                        <Text className="font-robotoMedium tracking-wider color-grayColor-300 text-xl text-center mt-[1vh] mb-[1vh] mx-6">
                          {welcomeInfo[part].span}
                        </Text>
                      ) : null}
                    </View>
                  </Animated.View>
                  {part !== 4 ? (
                    <View className="flex-col text-center justify-between items-center min-h-[15vh]">
                      <Pagination sum={3} active={part} slider={false}/>
                      <View className="w-full flex-row justify-between mx-4">
                        <PrimaryButton
                          title={t("skip")}
                          containerStyles="bg-primary w-[45vw] ml-2"
                          textStyles="text-black"
                          handlePress={() => setPart(4)}
                        />
                        <PrimaryButton
                          title={t("next")}
                          containerStyles="bg-secondary w-[45vw] mr-2"
                          textStyles="text-white"
                          handlePress={() =>
                            setPart((prev) => (prev === 4 ? 4 : prev + 1))
                          }
                        />
                      </View>
                    </View>
                  ) : (
                    <View className="flex-col text-center justify-around items-center min-h-[26vh] mx-2">
                      <PrimaryButton
                        title={t("registration")}
                        containerStyles="bg-secondary w-full h-[7.1vh]"
                        textStyles="text-white"
                        handlePress={() => router.push("/sign-in")}
                      />
                      <PrimaryButton
                        title={t("log_in")}
                        containerStyles="bg-primary w-full h-[7.1vh]"
                        textStyles="text-black"
                        handlePress={() => router.push("/sign-up")}
                      />
                      <PrimaryButton
                        title={t("open_app")}
                        containerStyles="bg-primary w-full h-[7.1vh]"
                        textStyles="text-black"
                        handlePress={() => router.push("/map")}
                      />
                    </View>
                  )}
                </View>
              ) : null}
            </View>
          </ScrollView>
          <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
      </I18nextProvider>
    </>
  );
}

// const screenWidth = Dimensions.get("window").width;
// const screenHeight = Dimensions.get("window").height;
// console.log(screenWidth);
// console.log(screenHeight);
