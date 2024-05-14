import "intl-pluralrules";
import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
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

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  console.log(screenWidth);
  console.log(screenHeight);

  const changeLanguage = (lng) => {
    // router.push("/sign-in")
    setPart(1);
    i18n.changeLanguage(lng); // Смена языка
  };

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <SafeAreaView className="bg-white h-full">
          <ScrollView contentContainerStyle={{ height: "100%" }}>
            <View className="w-full flex-col justify-between items-center min-h-[85vh] h-full pb-10">
              <View
                className={`w-full justify-end items-center ${
                  part === 4 ? "min-h-[40vh]" : "min-h-[50vh]"
                }`}
              >
                <Image
                  source={welcomeInfo[part].Img}
                  className={` ${
                    part === 4 ? "w-8/12 h-80 mt-24" : "w-11/12 mx-auto"
                  } `}
                  resizeMode="contain"
                />
              </View>
              {part === 0 ? (
                <View className="w-full flex-col justify-end items-center px-4 min-h-[40vh]">
                  <LangChangeBtn
                    title="O’zbekcha"
                    containerStyles="w-full mb-3"
                    handlePress={() => {
                      changeLanguage("uz");
                    }}
                    img={images.uz_flag}
                  />
                  <LangChangeBtn
                    title="Русский"
                    containerStyles="w-full mb-3"
                    handlePress={() => changeLanguage("ru")}
                    img={images.ru_flag}
                  />
                  <LangChangeBtn
                    title="English"
                    containerStyles="w-full mb-3"
                    handlePress={() => changeLanguage("en")}
                    img={images.us_flag}
                  />
                </View>
              ) : part !== 0 && part < 5 ? (
                <View
                  className={`flex-col text-center justify-between items-center ${
                    part === 4 ? "min-h-[37vh]" : "min-h-[30vh]"
                  } mx-2`}
                >
                  <View className="flex-col text-center items-center">
                    <HighlightKeyword
                      text={welcomeInfo[part].text} // Исходный текст
                      keyword="S7 Energy" // Ключевое слово для выделения
                      highlightStyle={`font-roboto tracking-wider  ${
                        part === 4 ? "text-2xl" : "text-2xl"
                      }  text-center mx-4`} // Стиль выделения
                    />
                    {welcomeInfo[part].text_1 ? (
                      <Text className="font-roboto tracking-wider text-2xl text-center mx-2 mt-2 mb-4 leading-8">
                        {welcomeInfo[part].text_1}
                      </Text>
                    ) : null}
                    {welcomeInfo[part].span ? (
                      <Text className="font-roboto tracking-wider color-grayColor-300 text-xl text-center mt-5 mx-6">
                        {welcomeInfo[part].span}
                      </Text>
                    ) : null}
                  </View>
                  {part !== 4 ? (
                    <View className="flex-col text-center justify-between items-center min-h-[14vh]">
                      <Pagination sum={3} active={part} />
                      <View className="w-full flex-row justify-around">
                        <PrimaryButton
                          title={t("skip")}
                          containerStyles="bg-primary"
                          textStyles="text-black"
                          handlePress={() => setPart(4)}
                        />
                        <PrimaryButton
                          title={t("next")}
                          containerStyles="bg-secondary"
                          textStyles="text-white"
                          handlePress={() =>
                            setPart((prev) => (prev === 4 ? 4 : prev + 1))
                          }
                        />
                      </View>
                    </View>
                  ) : (
                    <View className="flex-col text-center justify-between items-center min-h-[22vh] mx-2">
                      <PrimaryButton
                        title={t("registration")}
                        containerStyles="bg-secondary w-full"
                        textStyles="text-white"
                        handlePress={() => setPart(4)}
                      />
                      <PrimaryButton
                        title={t("log_in")}
                        containerStyles="bg-primary w-full"
                        textStyles="text-black"
                        handlePress={() => router.push("/sign-in")}
                        
                      />
                      <PrimaryButton
                        title={t("open_app")}
                        containerStyles="bg-primary w-full"
                        textStyles="text-black"
                        handlePress={() => setPart(0)}
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
