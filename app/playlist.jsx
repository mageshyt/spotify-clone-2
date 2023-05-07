import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

import SongCard from "../components/playlist songs/songsCard";
import InfoCard from "../components/playlist songs/InfoCard";
import {
  ArrowCircleLeftIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";
import { useSongs } from "../hooks/FetchSongs";
import ActiveSong from "../components/playlist songs/ActiveSong";
import * as Animatable from "react-native-animatable";
import { Stack } from "expo-router";

const PlaylistScreen = () => {
  const {
    params: { playlist },
  } = useRoute();
  const navigation = useNavigation();

  const [playing, setplaying] = useState();

  //! to play the
  const songs = useSongs(playlist?.id);
  const { name, owner, images, tracks } = playlist;
  //   console.log("playlist", playlist, songs, songs);
  return (
    <View className=" bg-[#121212]  flex-1">
      <LinearGradient
        colors={["#121212", "black"]}
        className=" items-center flex-1 mt-6 relative justify-around"
      >
        {/* back button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            console.log("back");
          }}
          className="absolute left-0 top-2 ml-4 mt-4"
        >
          <ArrowLeftIcon color="white" size={26} />
        </TouchableOpacity>
        {/* top session with image  */}
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          className="mt-10 flex-row space-x-4"
        >
          <Image
            source={{ url: images[0]?.url }}
            className="h-[120px] rounded-xl w-[120px]"
          />
          <InfoCard total={tracks?.total} name={name} />
        </Animatable.View>
        {/* split */}
        <View className=" border-b mt-4  border-white w-[90%] " />

        <FlatList
          showsVerticalScrollIndicator={false}
          className="w-full   p-4"
          data={songs}
          renderItem={({ item, index }) => (
            <SongCard
              track={item.track}
              setplaying={setplaying}
              delay={index * 100 + 500}
              key={index}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </LinearGradient>
      <View className="px-5 items-center ">
        {playing && <ActiveSong playing={playing} />}
      </View>
    </View>
  );
};

export default PlaylistScreen;
