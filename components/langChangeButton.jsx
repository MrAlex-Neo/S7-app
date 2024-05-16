import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "../constants";
const LangChangeButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  img,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-grayColor flex-row rounded-xl min-h-[62px] justify-between px-4 py-2 items-center ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
      >
        <View className="flex-row items-center gap-5">
          <Image
            source={img}
            className="w-10 h-10 rounded-full"
            resizeMode="contain"
          />
          <Text
            className={`text-black font-robotoRegular text-base ${textStyles} tracking-wider`}
          >
            {title}
          </Text>
        </View>
        <Image source={images.arrow} className="w-4 h-4" resizeMode="contain" />
      </TouchableOpacity>
    </>
  );
};

export default LangChangeButton;
