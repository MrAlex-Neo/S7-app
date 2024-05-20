import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { images } from "../../constants";
import i18next from "../../values/i18n/i18n";
import { Redirect, router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Linking } from "react-native";

import ImgButton from "../../components/ImgButton";
import PhoneInputFirst from "../../components/PhoneInputFirst";
import PhoneInputSecond from "../../components/PhoneInputSecond";
import PrimaryButton from "../../components/PrimaryButton";
import { CheckBox } from "react-native-elements";

const SignUp = () => {
  const { t, i18n } = useTranslation();
  const [number, setNumber] = useState("+998");
  const [isChecked, setIsChecked] = useState(false);
  const [badResponse, setBadResponse] = useState(true);
  const [btnState, setbtnState] = useState(true);
  useEffect(() => {
    if (isChecked && number.length === 12) {
      setbtnState(false);
    } else {
      setbtnState(true);
    }
  }, [isChecked, number]);

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAwareScrollView
        extraScrollHeight={0}
        enableOnAndroid={true}
        keyboardOpeningTime={50}
        enableAutomaticScroll={true}
      >
        <ImgButton
          containerStyles="fixed top-[4vh] left-[4vw] "
          imgStyles="w-[10vw]"
          textStyles="text-white"
          handlePress={() => router.push("/")}
        />
        <View className="w-full flex-col justify-around items-center h-[80vh] px-[4vw] py-[6vh]">
          <Image
            source={images.image5}
            resizeMode="contain"
            className="w-full h-[45vh]"
          />
          <PhoneInputSecond
            title={t('phone_number')}
            value={number}
            handleChangeText={(e) => setNumber(e)}
            otherStyles="w-full"
            badResponse={badResponse}
            mistake={t("badPhoneInputText")}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
