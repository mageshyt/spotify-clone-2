import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { SpotifyContext } from "../context/SpotifyContext";
import spotifyApi from "../lib/spotify";

const index = () => {
  const router = useRouter();
  const { token } = useContext(SpotifyContext);

  const tk =
    "BQA9KRfzOu8MUD2Gy27dCU-1AN4oLjQI8yFfQCwAsJ3zPD7fhGXGRsqLwjUQTLnwZuq6MGMss0Oaadrext5O1WD4zUUxJ6b2h5ApjNGw19rzTPGafpryltajM8MiXwSkEVb18ZR38kulGIYv58c1MVC4us3xuYpHC_W9aKI-KJz3wJsje5Rzg99YrLbSPcozz2vi6WXHZWAUjI8UMexDsHBmU2S09skbtf3BM9zEwA";

  useEffect(() => {
    let isCalled = false;
    const setTokenFromLocalStorage = async () => {
      spotifyApi.setAccessToken(token);
    };
    if (!isCalled) {
      setTokenFromLocalStorage();
      isCalled = true;
    }
  }, []);
  return (
    <SafeAreaView className="flex items-center justify-center min-h-screen">
      <View className="bg-black h-[300px] w-[300px] flex items-center justify-center ">
        {/* Login Btn */}
        {token ? (
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="bg-[#1ED760] rounded-md py-3 px-2 w-[120px] "
          >
            <Text className="text-2xl text-center ">Home</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="bg-[#1ED760] rounded-md py-3 px-2 w-[120px] "
          >
            <Text className="text-2xl text-center ">Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default index;
