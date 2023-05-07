import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SigInComponent from "../components/Login Page/SigIn.component";
import FaceBook from "../assets/images/facebook.png";
import Google from "../assets/images/google.png";
import Apple from "../assets/images/apple.png";
import { useNavigation } from "expo-router";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { SpotifyContext } from "../context/SpotifyContext";
import spotifyApi from "../lib/spotify";
const login = () => {
  const navigation = useNavigation();
  const { setToken, setUserId } = useContext(SpotifyContext);

  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: process.env.APP_CLINT_ID,
      clientSecret: process.env.APP_CLINT_SECRET,
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://127.0.0.1:19000/",
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      console.log("access_token", access_token);
      setToken(access_token);
      spotifyApi.setAccessToken(access_token);
      navigation.navigate("home");
    }
  }, [response]);
  return (
    <SafeAreaView className="flex-1 bg-black justify-evenly">
      <View className="flex items-center mt-4 ">
        <Image
          source={require("../assets/images/logo.png")}
          className=" h-[46px]  w-[150px] "
        />
      </View>
      {/* Sign in */}
      <View className="px-6">
        <Text className="text-4xl font-bold text-white">Sign in</Text>
      </View>

      <SigInComponent />

      {/* Button */}
      <View className="px-6">
        <TouchableOpacity
          onPress={() => {
            promptAsync();
          }}
          className="bg-[#1ED760]  rounded-2xl p-6"
        >
          <Text className="text-center font-medium text-[20px]">Sign In</Text>
        </TouchableOpacity>
      </View>
      {/* Divider */}
      <View className="flex-row items-center justify-center px-6 space-x-2">
        <View className=" border-b w-[35%] border-white" />
        <View>
          <Text className="font-medium text-white ">or Sign in with</Text>
        </View>
        <View className=" w-[35%] border-b border-white " />
      </View>
      {/* Social Media signIn */}
      <View className="flex-row items-center justify-center ">
        <SocialIcon Icons={FaceBook} />

        <SocialIcon Icons={Google} />

        <SocialIcon Icons={Apple} />
      </View>
      {/* Sign up */}
      <View>
        <Text className=" text-center text-{#15BDFF} font-medium">
          Don't you have an account? Sign up now.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default login;

const SocialIcon = ({ Icons }) => {
  return (
    <View className=" bg-[#2D2D2D] mx-3 rounded-full p-2">
      <Image source={Icons} className="h-[40px] w-[38px]" />
    </View>
  );
};
