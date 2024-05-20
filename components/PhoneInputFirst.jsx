import { View, Text, TextInput, Image } from "react-native";
import { useState } from "react";
import { icons } from "../constants";

const PhoneInputFirst = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  badResponse,
  mistake,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
    <View className={keyboardType === "numeric" ? 'pb-[2vh]' : 'pb-[5vh]'}>
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base tracking-wider font-robotoBold">
          {title}
        </Text>

        <View
          className={`border-b-2 ${
            badResponse ? "border-b-red" : "border-b-blue"
          } w-full h-[7vh]`}
        >
          {keyboardType === "numeric" ? (
            <Image
              source={icons.phone}
              className="w-[4vh] h-auto absolute top-[1.9vh] left-[1.5vw]"
              resizeMode="contain"
            />
          ) : null}
          <TextInput
            className={`flex-1 text-lg tracking-wider font-robotoMedium ${keyboardType === "numeric" ? "pl-[10vw]" : ''} mb-1`}
            value={
              keyboardType === "numeric" ? formatPhoneNumber(value) : value
            } // Применяем форматирование к значению
            placeholder={placeholder}
            placeholderTextColor="#A4A3A4"
            keyboardType={keyboardType}
            maxLength={17}
            onChangeText={(text) => {
              // Удаляем нецифровые символы и обновляем значение
              keyboardType === "numeric" ?
              handleChangeText(text.replace(/\D/g, ""))
              : handleChangeText(text);
            }}
            secureTextEntry={title === "Password" && !showPassword}
          />
        </View>
      </View>
      {badResponse ? (
        <Text className="absolute bottom-0 font-robotoRegular text-sm color-red">
          {mistake}
        </Text>
      ) : null}
    </View>
  );
};

export default PhoneInputFirst;
