import { View, TextInput, Image } from "react-native";
import { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({ placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <View className="w-full">
      <Image
        source={icons.search}
        className="w-[4vh] h-auto absolute top-[10%] left-[2.5vw] z-10"
        resizeMode="contain"
      />
      <TextInput
        className="w-full rounded-xl bg-grayColor-400 text-base font-robotoRegular p-[2vh] pl-[12vw]"
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default SearchInput;
