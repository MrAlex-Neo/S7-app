import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "react-native-elements/dist/helpers";
import { icons } from "../constants";

const StationCard = ({ busy }) => {
  return (
    <TouchableOpacity>
      <View className="mt-[3vw] border-2 border-grayColor-100 rounded-md p-[2vh]">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center ">
            <Text
              className={`border-2 ${
                busy
                  ? "border-red-500 text-red-500"
                  : "border-secondary text-secondary"
              } p-[1vw] text-center w-[25vw] rounded-md`}
            >
              {busy ? "Занят" : "Свободен"}
            </Text>
            <Text
              className="ml-[3vw] font-robotoMedium text-sm w-[30vw]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Riviera, charger №1
            </Text>
          </View>
          <Image source={icons.cardArrow} className="h-[2vh]" />
        </View>
        <View className="flex-row justify-between">
          <View>
            <Text
              className="mt-[1vh] w-[60vw] text-grayColor-500 text-xs font-robotoRegular"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Toshkent sh. Nodira ko’chasi
            </Text>
            <Text
              className="mt-[1vh] w-[60vw] text-grayColor-500 text-xs font-robotoRegular"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              GB/T DC 2 шт
            </Text>
          </View>
          <View className="items-end">
            <Text className="mt-[1vh] text-grayColor-500 text-xs font-robotoRegular">
              2 000 сум Квт
            </Text>
            <Text className="mt-[1vh] text-grayColor-500 text-xs font-robotoRegular">
              240 Квт
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StationCard;
