import { View, Text } from "react-native";
import React from "react";
import {
  BoltIcon,
  HomeIcon,
  LightBulbIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/solid";

const Feed = () => {
  return (
    <View className=" flex-row pt-2 bg-black  justify-evenly items-center  ">
      <Icons Icon={HomeIcon} name="Home" />
      <Icons Icon={MagnifyingGlassCircleIcon} name="Search" />
      <Icons Icon={BoltIcon} name="library" />
    </View>
  );
};

export default Feed;

const Icons = ({ Icon, name }) => {
  let color = "white";
  if (name === "Home") {
    color = "#1ED760";
  }
  return (
    <View className=" justify-center items-center">
      <Icon size={28} color={`${color}`} />
      <Text className="text-sm text-white">{name}</Text>
    </View>
  );
};
