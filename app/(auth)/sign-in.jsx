import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import PhoneInputFirst from "../../components/PhoneInputFirst";
import PhoneInputSecond from "../../components/PhoneInputSecond";

const SignIn = () => {
  const [number, setNumber] = useState('+998');
  const [text, setText] = useState('asdfasdf');

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.image5}
            resizeMode="contain"
            className="w-full h-[30vh]"
          />

          <Text className="text-2xl text-white text-seimbold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <PhoneInputFirst
            title="Номер телефона"
            value={number}
            handleChangeText={(e) => setNumber(e)}
            otherStyles="mt-7"
            keyboardType="email-adress"
          />
          <PhoneInputSecond
            title="Номер телефона"
            value={text}
            handleChangeText={(e) => setText(e)}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
