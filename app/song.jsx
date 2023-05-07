import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useCallback, useContext, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { debounce } from "lodash";
// import Slider from "@react-native-community/slider";

import SongInfo from "../components/Song Page/SongInfo";
import spotifyApi from "../lib/spotify";
import SongControl from "../components/Song Page/SongControl";
import { WifiIcon } from "react-native-heroicons/solid";
import { SpotifyContext } from "../context/SpotifyContext";
import { ShareIcon } from "react-native-heroicons/outline";
import { getLyrics } from "../hooks/UseSongLyrics";
import SongLyrics from "../components/Song Page/SongLyrics";
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
      className="relative flex-1 bg-black "
    >
      <SongInfo song={song} />

      {/* Sliders */}
      {/* <Slider
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#1ED760"
        maximumTrackTintColor="#fff"
        thumbTintColor="#1ED760"
        value={volume}
        onValueChange={(value) => setVolume(Math.floor(value * 100))}
        style={{ width: "100%", height: 50 }}
      /> */}
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
