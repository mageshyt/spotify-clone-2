import { View, Text, ScrollView } from "react-native";
import React, { useContext } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";
const SongLyrics = () => {
  const { SongLyrics } = useContext(SpotifyContext);
  console.log("SongLyrics", SongLyrics);
  return (
    <View className="  w-[200px] bg-pink-400">
      <ScrollView>{/* <Text>{SongLyrics}</Text> */}</ScrollView>
    </View>
  );
};

export default SongLyrics;
