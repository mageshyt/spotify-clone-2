import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useCallback, useContext, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { debounce } from "lodash";
import Slider from "@react-native-community/slider";

import SongInfo from "../components/Song Page/SongInfo";
import spotifyApi from "../lib/spotify";
import SongControl from "../components/Song Page/SongControl";
import {
  ChevronDownIcon,
  HeartIcon,
  WifiIcon,
} from "react-native-heroicons/solid";
import { SpotifyContext } from "../context/SpotifyContext";
import { ShareIcon } from "react-native-heroicons/outline";
import { getLyrics } from "../hooks/UseSongLyrics";
import SongLyrics from "../components/Song Page/SongLyrics";
import { Stack } from "expo-router";
const SongScreen = () => {
  const {
    params: { song },
  } = useRoute();
  const navigation = useNavigation();

  const [volume, setVolume] = React.useState(0.5);

  const [currentTrackId, setCurrentTrackId] = React.useState(null);

  //! song playing status
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    const fetchSongStatus = async () => {
      try {
        spotifyApi.getMyCurrentPlayingTrack().then((res) => {
          setCurrentTrackId(data.item?.id);
        });
        spotifyApi.getMyCurrentPlayingTrack().then((res) => {
          setCurrentTrackId(res.item?.id);
        });
      } catch {
        console.log("error");
      }
    };

    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchSongStatus();
    }
  }, [currentTrackId]);

  const playSong = async () => {
    spotifyApi.getMyCurrentPlaybackState().then((res) => {
      if (res.is_playing) {
        spotifyApi.pause();
      } else {
        spotifyApi.play();
      }
    });
    setIsPlaying(!isPlaying);
  };

  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume);
      // ! change the volume after 500 milliseconds
    }, 500),
    []
  );

  useEffect(() => {
    try {
      if (volume > 0 && volume < 100) {
        debouncedAdjustVolume(volume);
      }
    } catch {
      console.log("error");
    }
  }, [volume]);

  const { device } = useContext(SpotifyContext);
  return (
    <Animatable.View
      animation={"slideInUp"}
      easing="ease-in-out"
      className="flex-1 bg-black "
    >
      <View className=" flex-row items-center   absolute top-14  ml-4 ">
        <ChevronDownIcon
          onPress={() => navigation.goBack()}
          color="white"
          size={30}
        />

        <Text className="text-white text-center flex-1 text-sm">
          {song?.album?.name}
        </Text>
      </View>
      <View className="items-center mt-[130px]  ">
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

      {/* Sliders */}
      <Slider
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#1ED760"
        maximumTrackTintColor="#fff"
        thumbTintColor="#1ED760"
        value={volume}
        onValueChange={(value) => setVolume(Math.floor(value * 100))}
        style={{ width: "100%", height: 50 }}
      />
      <SongControl isPlaying={isPlaying} playSong={playSong} />
      <View className="flex-row items-center justify-between px-4 mt-6">
        <View className="flex-row space-x-2">
          <WifiIcon color="#1ED760" size={18} />
          <Text className="text-xs text-white">{device?.devices[1]?.name}</Text>
        </View>

        <ShareIcon color="#1ED760" size={18} />
      </View>
      {/* Lyrics */}
      <SongLyrics />
    </Animatable.View>
  );
};

export default SongScreen;
