import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { icons } from "../constants";
import { useRouter } from "expo-router";

const PhoneInputSecond = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  badResponse,
  mistake,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Функция для форматирования ввода номера телефона
  const formatPhoneNumber = (input) => {
    // Убираем все нецифровые символы
    const cleaned = input.replace(/\D/g, "");
    // Добавляем пробелы между группами цифр
    const formatted = cleaned.replace(
      /(\d{1,3})(\d{1,2})(\d{1,3})(\d{1,2})(\d{1,2})/,
      "$1 $2 $3 $4 $5"
    );
    return "+" + formatted;
  };

  return (
    <View className="pb-[3vh] w-full">
      <Text className="text-lg tracking-wider font-roboto">{title}</Text>

      <View
        className={`border-2 border-secondary focus:border-secondary-100 rounded-lg w-full h-[6.5vh] px-2`}
      >
        <Image
          source={icons.phone}
          className="w-[4vh] h-auto absolute top-[1.9vh] left-[1.5vw]"
          resizeMode="contain"
        />
        <TouchableOpacity
          className=" absolute top-[14%] right-[1vw] z-10"
          onPress={() => router.push("/map")}
        >
          <Image
            source={icons.authInput}
            className="w-[8vw]"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TextInput
          className="flex-1 text-lg tracking-wider font-roboto pl-[9vw]"
          value={formatPhoneNumber(value)} // Применяем форматирование к значению
          placeholder={placeholder}
          placeholderTextColor="#F8F8F8"
          keyboardType="numeric"
          onChangeText={(text) => {
            // Удаляем нецифровые символы и обновляем значение
            handleChangeText(text.replace(/\D/g, ""));
          }}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
      {badResponse ? (
        <Text className="absolute bottom-0 font-robotoRegular text-sm color-red">
          {mistake}
        </Text>
      ) : null}
    </View>
  );
};

export default PhoneInputSecond;
