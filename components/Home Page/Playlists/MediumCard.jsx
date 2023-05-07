import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const MediumCard = ({ playList_title, playList }) => {
  const navigation = useNavigation();
  return (
    <View className=" space-y-3 pb-3 ">
      <Text className="text-3xl font-bold text-gray-300">{playList_title}</Text>
      <ScrollView horizontal className="space-x-3 ">
        {playList?.map((item, index) => {
          let image = item?.images[0]?.url;
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("playlist", { playlist: item })
              }
              className=" space-y-2 pb-2 justify-center items-center w-[120px] rounded-xl "
            >
              <Animatable.Image
                animation={"zoomIn"}
                delay={index * 100 + 500}
                source={{ uri: image }}
                className="h-[120px] w-[120px] rounded-xl "
              />
              {/* playlist details */}
              <View className=" items-start ">
                <Text className="text-gray-300 text-left   font-bold ">
                  {item?.name?.split(" ")?.slice(0, 2)?.join(" ")?.slice(0, 15)}
                </Text>
                <Text className="text-sky-400 text-left  font-semibold">
                  {item?.owner?.display_name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MediumCard;
