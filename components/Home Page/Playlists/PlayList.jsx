import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const PlayList = ({ playList_title, playlist }) => {
  const navigation = useNavigation();
  return (
    <View animation={"fadeIn"} delay={1100} className="  space-y-3 pb-2 ">
      <Text className="text-3xl font-bold text-gray-300">{playList_title}</Text>
      <ScrollView horizontal>
        {playlist?.map((item, index) => {
          let image;
          if (item["icons"]) {
            image = item["icons"][0]["url"];
          } else {
            image = item?.images[0]?.url;
          }
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (playList_title != "Category") {
                  navigation.navigate("playlist", { playlist: item });
                }
              }}
              className=" space-y-2 justify-center items-center w-[100px] rounded-xl "
            >
              <Animatable.Image
                animation={"zoomIn"}
                delay={index * 100 + 500}
                source={{ uri: image }}
                className="h-[90px] w-20 rounded-xl "
              />
              {/* playlist details */}
              <View className=" items-start ">
                <Text className="text-gray-300 text-left  font-bold ">
                  {item?.name}
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

export default PlayList;
