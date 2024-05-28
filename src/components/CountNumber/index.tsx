import { Text, View } from "react-native";
import { stylesCountNumber } from "./style";

interface CountNumberProps {
  tasksNumber?: number;
}

export function CountNumber({ tasksNumber }: CountNumberProps) {
  return (
    <View style={stylesCountNumber.countNumberContainer}>
      <Text style={stylesCountNumber.text}>{tasksNumber}</Text>
    </View>
  );
}
