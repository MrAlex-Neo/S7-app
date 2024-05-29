import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth";
import { images } from "../../constants";

const Profile = () => {
  const { t, i18 } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.data);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  useEffect(() => {
    console.log('profile', data?.data);
  }, [data]);
  
  return (
    <View className="w-full flex-1 pt-[7vh] px-[5vw] bg-white">
      <Text className="text-2xl font-robotoMedium mb-[2vh]">
        {t("profile")}
      </Text>
      <View>
        <View className="flex-row items-center gap-4">
          <Image
            source={images.user}
            className="w-[10vh] h-[10vh] rounded-full"
          />
          <View>
            {data && data?.data.username ? (
              <Text>
                {`${data.data.username} ${data.last_name}`}
              </Text>
            ) : (
              <Text>Сурикен Петрович</Text>
            )}
            <Text></Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
