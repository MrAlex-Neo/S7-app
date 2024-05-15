import { View, Text, TextInput, Image } from "react-native";
import { useState } from "react";
import { icons } from "../constants";

const PhoneInputSecond = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Функция для форматирования ввода номера телефона
  const formatPhoneNumber = (input) => {
    // Убираем все нецифровые символы
    const cleaned = input.replace(/\D/g, '');
    // Добавляем пробелы между группами цифр
    const formatted = cleaned.replace(/(\d{1,3})(\d{1,2})(\d{1,3})(\d{1,2})(\d{1,2})/, '$1 $2 $3 $4 $5');
    return '+' + formatted;
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg tracking-wider font-roboto">{title}</Text>

      <View className="border-2  border-secondary focus:border-secondary-100 rounded-lg w-full h-[6vh] px-2">
        <Image source={icons.phone} className="w-[4vh] h-auto absolute top-[1.7vh] left-1" resizeMode="contain" />
        <Image source={icons.authInput} className="w-auto h-auto absolute top-[1vh] right-2" resizeMode="contain" />
        <TextInput
          className="flex-1 text-lg tracking-wider font-roboto pl-8 mb-1"
          value={formatPhoneNumber(value)} // Применяем форматирование к значению
          placeholder={placeholder}
          placeholderTextColor="#F8F8F8"
          onChangeText={(text) => {
            // Удаляем нецифровые символы и обновляем значение
            handleChangeText(text.replace(/\D/g, ''));
          }}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default PhoneInputSecond;
