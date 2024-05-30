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
import PhoneInputFirst from "../../components/PhoneInputFirst";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const UpdateUser = () => {
  const { t, i18 } = useTranslation();
  return (
    <SafeAreaView className="bg-white h-full pt-[10vh]">
      <KeyboardAwareScrollView extraScrollHeight={0} enableOnAndroid={true} keyboardOpeningTime={50} enableAutomaticScroll={true}>

      <View className="w-full flex-1 pb-[1vh] px-[5vw] bg-white">
        <View className="flex-row items-center">
          <ImgButton
            containerStyles="p-0"
            imgStyles="w-[3vh] h-[3vh]"
            textStyles="text-white"
            handlePress={() => router.push("/profile")}
          />
          <Text className="font-robotoMedium text-xl ml-[4vw]">
            {t('personal_data')}
          </Text>
        </View>
        <View className="mx-auto mt-[5vh]" style={{ alignSelf: "flex-start" }}>
          <TouchableOpacity className="absolute bottom-[-1vh] right-[0vh] z-20">
            <Image
              source={icons.pencilSec}
              className="h-[4vh] w-[4vh] rounded-sm"
            />
          </TouchableOpacity>
          <View
            className="border-2 border-secondary rounded-full z-0"
            style={{ alignSelf: "flex-start" }}
          >
            <Image
              source={images.user}
              className="w-[12vh] h-[12vh] rounded-full"
            />
          </View>
        </View>
        <View className="mt-[6vh]">
          <PhoneInputFirst
            title={t("phone_number")}
            placeholder="..."
            handleChangeText={(text) => console.log(text)}
            otherStyles=""
            // badResponse={badResponse}
            // mistake={t("badPhoneInputText")}
            keyboardType="default"
          />
          <PhoneInputFirst
            title={t("name")}
            placeholder="..."
            handleChangeText={(text) => console.log(text)}
            otherStyles=""
            // badResponse={badResponse}
            // mistake={t("badPhoneInputText")}
            keyboardType="default"
          />
          <PhoneInputFirst
            title={t("surname")}
            placeholder="..."
            handleChangeText={(text) => console.log(text)}
            otherStyles=""
            // badResponse={badResponse}
            // mistake={t("badPhoneInputText")}
            keyboardType="default"
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UpdateUser;
