import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
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
          onPress={() => navigation.goBack()}
          className="absolute left-0 ml-4 mt-4"
        >
          <ArrowLeftIcon color="white" size={25} />
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="w-full   p-4"
        >
          <View className="pb-[80px]">
            {songs?.map((item, idx) => {
              return (
                //
                <SongCard
                  key={idx}
                  delay={idx * 100 + 500}
                  setplaying={setplaying}
                  track={item.track}
                />
              );
            })}
          </View>
        </ScrollView>
      </LinearGradient>
      <View className="px-5 items-center ">
        {playing && <ActiveSong playing={playing} />}
      </View>
    </View>
  );
};

export default PlaylistScreen;
