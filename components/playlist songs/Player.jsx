import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import spotifyApi from "../../lib/spotify";

const Player = () => {
  useEffect(() => {
    spotifyApi
      .play({
        uris: ["spotify:track:5nujrmhLynf4yMoMtj8AQF"],
        position_ms: 50000,
      })
      .then(() => {
        console.log("playing: ");
      });
  }, []);
  return (
    <View>
      <Text className="tex-white text-4xl">Player</Text>
    </View>
  );
};

export default Player;
