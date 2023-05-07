import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { BellIcon, ClockIcon, CogIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Header = ({ user }) => {
  // console.log(user);
  return (
    <View className=" p-2 flex-row items-center justify-evenly ">
      <Greeting />
      <BellIcon size={24} color="white" />
      <ClockIcon size={24} color="white" />
      <CogIcon size={24} color="white" />
      {/* user */}
      {user && (
        <View>
          <Image
            source={{ uri: user.images[0].url }}
            className="h-10 w-10 rounded-full"
          />
        </View>
      )}
    </View>
  );
};

export default Header;

const Greeting = () => {
  const navigation = useNavigation();
  const hours = new Date().getHours();
  var greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return (
    <View>
      <Text
        onPress={() => navigation.navigate("Login")}
        className="text-white text-2xl font-bold"
      >
        Good {greet}
      </Text>
    </View>
  );
};
