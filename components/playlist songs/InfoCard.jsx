import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { PlayIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/outline";

const InfoCard = ({ name, total }) => {
  return (
    <View className=" ml-4 justify-between">
      <View>
        <Text className="text-xl text-white font-bold">{name}</Text>
        <Text className="text-sm mt-2 text-gray-400">{total} songs</Text>
      </View>
      <View className="flex-row items-center space-x-4 justify-around">
        <TouchableOpacity>
          <PlayIcon color="#1ED760" size={40} />
        </TouchableOpacity>
        <Text className="text-gray-400">Play now</Text>
        {/* Heart */}
        <TouchableOpacity>
          <HeartIcon color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default InfoCard;
