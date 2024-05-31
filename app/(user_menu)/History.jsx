import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ImgButton from "../../components/ImgButton";
import { images } from "../../constants";
import { icons } from "../../constants";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t, i18 } = useTranslation();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-full flex-1 pb-[1vh] px-[5vw] pt-[10vh] bg-white">
        <View className="flex-row items-center">
          <ImgButton
            containerStyles="p-0"
            imgStyles="w-[3vh] h-[3vh]"
            textStyles="text-white"
            handlePress={() => router.push("/profile")}
          />
          <Text className="font-robotoMedium text-xl ml-[4vw]">
            {t("history")}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;
