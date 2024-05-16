import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PrimaryButton = ({ 
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading, }) => {
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`flex-row rounded-2xl w-2/5 justify-between px-4 py-4 items-center  ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
      >
        <Text className={`font-robotoMedium mx-auto text-base ${textStyles} tracking-wider`}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default PrimaryButton;
