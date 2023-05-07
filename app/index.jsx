import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { SpotifyContext } from "../context/SpotifyContext";
import spotifyApi from "../lib/spotify";

const index = () => {
  const router = useRouter();
  const { token } = useContext(SpotifyContext);

  // useEffect(() => {
  //   let isCalled = false;
  //   const setTokenFromLocalStorage = async () => {
  //     spotifyApi.setAccessToken(token);
  //   };
  //   if (!isCalled) {
  //     setTokenFromLocalStorage();
  //     isCalled = true;
  //   }
  // }, []);
  return (
    <SafeAreaView className="flex bg-black items-center justify-center min-h-screen">
      <View className="bg-black h-[300px] w-[300px] flex items-center justify-center ">
        {/* Login Btn */}
        <View className="flex-row space-x-3">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="bg-[#1ED760] rounded-md py-3 px-2 w-[120px] "
          >
            <Text className="text-2xl text-center ">Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="bg-[#1ED760] rounded-md py-3 px-2 w-[120px] "
          >
            <Text className="text-2xl text-center ">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
