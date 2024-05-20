import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const ImgButton = ({
  handlePress,
  containerStyles,
  isLoading,
  imgStyles
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        disabled={isLoading}
      >
        <Image
          source={icons.backBtn}
          resizeMode="contain"
          className={` ${imgStyles}`}
        />
      </TouchableOpacity>
    </>
  );
};

export default ImgButton;
