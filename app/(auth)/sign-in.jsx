import { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { images } from "../../constants";
import { icons } from "../../constants";
import i18next from "../../values/i18n/i18n";
import { Redirect, router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Linking } from "react-native";

import ImgButton from "../../components/ImgButton";
import PhoneInputFirst from "../../components/PhoneInputFirst";
import PhoneInputSecond from "../../components/PhoneInputSecond";
import PrimaryButton from "../../components/PrimaryButton";
import { CheckBox } from "react-native-elements";

const SignIn = () => {
  const { t, i18n } = useTranslation();
  const [number, setNumber] = useState("+998");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [part, setPart] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [badResponse, setBadResponse] = useState(false);
  const [btnFirst, setBtnfirst] = useState(true);
  const [btnSec, setBtnSec] = useState(false);
  const [btnThirth, setBtnThirth] = useState(true);
  useEffect(() => {
    if (isChecked && number.length === 12) {
      setBtnfirst(false);
    } else {
      setBtnfirst(true);
    }
  }, [isChecked, number]);

  useEffect(() => {
    console.log(name)
    console.log(surname)
    if (name.length > 2 && surname.length > 2) {
      setBtnThirth(false);
    } else {
      setBtnThirth(true);
    }
  }, [name, surname]);

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAwareScrollView
        extraScrollHeight={0}
        enableOnAndroid={true}
        keyboardOpeningTime={50}
        enableAutomaticScroll={true}
      >
        <ImgButton
          containerStyles="fixed top-[4vh] left-[2vw] "
          imgStyles="w-[10vw]"
          textStyles="text-white"
          handlePress={() => {
            part === 0
              ? router.push("/")
              : part === 1
              ? setPart(0)
              : setPart(1);
          }}
        />
        {part === 0 ? (
          <View className="w-full justify-between h-[100vh] px-[4vw] py-[6vh]">
            <Image
              source={images.image5}
              resizeMode="contain"
              className="w-full h-[35vh]"
            />
            <View>
              <Text className="font-robotoBold tracking-wider text-xl leading-8">
                {t("hello")}
              </Text>
              <Text className="font-robotoMedium color-grayColor-300 text-base mt-[1vh] mb-[4vh]">
                {t("phone_number_sing_in")}
              </Text>
              <PhoneInputFirst
                title={t("phone_number")}
                value={number}
                handleChangeText={(e) => setNumber(e)}
                otherStyles=""
                badResponse={badResponse}
                mistake={t("badPhoneInputText")}
                keyboardType="numeric"
                // keyboardType="email-address"
              />
              <View className="flex-row items-center mt-[2vh]">
                <CheckBox
                  checked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  containerStyle={{ padding: 0, margin: 0 }}
                  wrapperStyle={{ margin: 0, padding: 0 }}
                />
                <Text className="font-robotoRegular text-sm">
                  Нажимая «далее», я принимаю условия{" "}
                  <Text
                    className="text-blue-100"
                    onPress={() =>
                      Linking.openURL("https://mralex-neo.github.io/nurb/")
                    }
                  >
                    пользовательского соглашения
                  </Text>
                </Text>
              </View>
            </View>
            <PrimaryButton
              title={t("next")}
              containerStyles="bg-secondary w-full mr-2"
              textStyles="text-white"
              isLoading={btnFirst}
              handlePress={() => setPart(1)}
              // handlePress={() => router.push("/map")}
            />
          </View>
        ) : part === 1 ? (
          <View className="w-full justify-between h-[100vh] px-[4vw] py-[6vh]">
            <View>
              <Text className="font-robotoBold tracking-wider text-2xl mt-[2vh] leading-8">
                {/* {t("hello")} */}
                Введите код
              </Text>
              <Text className="font-robotoMedium color-grayColor-300 text-lg mt-[4vh] mb-[4vh]">
                {`На номер --- --- --- -${number[10]}${number[11]} будет отправлен код подтверждения`}
              </Text>
            </View>
            <PrimaryButton
              title="Подтвердить"
              containerStyles="bg-secondary w-full mr-2"
              textStyles="text-white"
              isLoading={btnSec}
              handlePress={() => setPart(2)}
              // handlePress={() => router.push("/map")}
            />
          </View>
        ) : (
          <View className="w-full justify-between h-[100vh] px-[4vw] py-[6vh]">
            <View>
              <Text className="text-center font-robotoBold tracking-wider text-2xl leading-8 py-[3vh]">
                Регистрация
              </Text>
              <PhoneInputFirst
                title="Имя"
                handleChangeText={(e) => setName(e)}
                otherStyles=""
                placeholder="введите имя"
                badResponse={badResponse}
                mistake={t("badPhoneInputText")}
                keyboardType="text"
              />
              <PhoneInputFirst
                title="Фамилия"
                placeholder="введите фамилию"
                handleChangeText={(e) => setSurname(e)}
                otherStyles=""
                badResponse={badResponse}
                mistake={t("badPhoneInputText")}
                keyboardType="text"
              />
            </View>
            <PrimaryButton
              title={t("next")}
              containerStyles="bg-secondary w-full mr-2"
              textStyles="text-white"
              isLoading={btnThirth}
              handlePress={() => router.push("/map")}
            />
          </View>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
