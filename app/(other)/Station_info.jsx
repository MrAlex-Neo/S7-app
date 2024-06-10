import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ImgButton from "../../components/ImgButton";
import { images } from "../../constants";
import { icons } from "../../constants";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import Bill from "../../components/Bill";

const Station_info = () => {
  const navigation = useNavigation();
  const { t, i18 } = useTranslation();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="w-full flex-1 pb-[1vh] px-[5vw] pt-[10vh] bg-white">
        <View className="flex-row items-center">
          <ImgButton
            containerStyles="p-0"
            imgStyles="w-[3vh] h-[3vh]"
            textStyles="text-white"
            handlePress={() => navigation.navigate("map")}
          />
        </View>
        <View className="py-[2vh]">
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Station_info;
