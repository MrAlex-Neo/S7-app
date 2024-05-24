import { View, Text } from "react-native";
import React, { useTransition } from "react";
import SearchInput from "../../components/SearchInp.jsx";
import { useTranslation } from "react-i18next";

const Stations = () => {
  const { t, i18 } = useTranslation();
  return (
    <View className="w-full flex-1 py-[7vh] px-[5vw] bg-white">
      <Text className="text-2xl font-robotoMedium mb-[2vh]">
        {t("stations")}
      </Text>
      <SearchInput placeholder={t('searchText')} />
    </View>
  );
};

export default Stations;
