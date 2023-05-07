import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, HeartIcon } from "react-native-heroicons/solid";
import * as Animatable from "react-native-animatable";

const SongInfo = ({ song }) => {
  const navigation = useNavigation();
  return (
    <View className="relative">
      <View className=" flex-row items-center  absolute top-14  ml-4 ">
        <ChevronDownIcon
          onPress={() => navigation.goBack()}
          color="white"
          size={30}
        />
        <Text className="text-white text-center flex-1 text-sm">
          {song?.album?.name}
        </Text>
      </View>
      <View className=" items-center mt-[130px] flex-1 ">
        <Animatable.Image
          animation={"zoomIn"}
          delay={200}
          source={{ uri: song.album?.images[0]?.url }}
          className="h-[250px] w-[250px] rounded-xl"
        />
        {/* name */}
        <Animatable.View
          delay={400}
          animation={"slideInLeft"}
          className=" flex-row items-center pr-2 "
        >
          <View className="w-full flex-1 px-4  mr space-y-2 mt-6  ">
            <Animatable.Text
              delay={600}
              animation={"fadeInLeft"}
              className="text-white  font-bold text-xl "
            >
              {song.name}
            </Animatable.Text>
            {/* artist */}
            <Animatable.Text
              animation={"fadeInDown"}
              delay={800}
              className="text-gray-400 font-bold text-sm "
            >
              {song.artists.map((artist) => artist.name).join(", ")}
            </Animatable.Text>
          </View>
          {/* Heart */}
          <HeartIcon color="gray" size={30} />
        </Animatable.View>
      </View>
    </View>
  );
};

export default SongInfo;
