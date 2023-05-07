import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";

const CustomInputComponent = ({ Icon, placeholder, title }) => {
  return (
    <View className="px-6 mb-3 space-y-3">
      <Text className="text-md text-gray-200  font-medium">{title}</Text>
      {/* Input*/}
      <View className="rounded-lg flex-row space-x-2 items-center px-3  bg-[#2D2D2D]">
        {/* <Icon color="white" /> */}

        <TextInput
          keyboardType="visible-password"
          placeholder={placeholder}
          className="  text-white p-4 w-full  outline-none border-none "
          placeholderTextColor="#fff"
          secureTextEntry={title === "password"}
        />
      </View>
    </View>
  );
};

export default CustomInputComponent;
