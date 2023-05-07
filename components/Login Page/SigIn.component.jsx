import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import CustomInputComponent from "./CustomInput.component";
import { MaterialIcons } from "@expo/vector-icons";

const SigInComponent = () => {
  return (
    <View className="space-y-6 px-2">
      {/* Mail */}
      <CustomInputComponent title="Email" placeholder="Enter your email" />
      {/* Password */}
      <CustomInputComponent
        title="Password"
        placeholder="Enter your password"
      />
    </View>
  );
};

export default SigInComponent;
