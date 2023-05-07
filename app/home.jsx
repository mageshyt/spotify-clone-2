import { SafeAreaView, ScrollView, View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { SpotifyContext } from "../context/SpotifyContext";
import Header from "../components/Home Page/Header/Header";
import PlayList from "../components/Home Page/Playlists/PlayList";
import MediumCard from "../components/Home Page/Playlists/MediumCard";
import Feed from "../components/Home Page/Feed/Feed";
import { Stack } from "expo-router";

const HomeScreen = () => {
  const navigation = useNavigation();

  const { token, user, playList, category, FeaturedPlaylists } =
    useContext(SpotifyContext);
  // ! for header navigation
  // console.log("token", token, playList, category, FeaturedPlaylists);

  return (
    <SafeAreaView className="w-full flex-1 space-y-6   bg-black">
      <Header user={user} />

      {/* Playlist */}
      <ScrollView className="p-4 flex-1  ">
        <PlayList playList_title="Your playlist" playlist={playList} />
        <PlayList
          playList_title="Category"
          playlist={category?.categories?.items}
        />
        <MediumCard
          playList_title="Editor's picks"
          playList={FeaturedPlaylists?.playlists?.items}
        />
      </ScrollView>
      <View>
        <Feed />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
