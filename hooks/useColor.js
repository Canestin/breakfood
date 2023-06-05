import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

export default function useColor() {
  const colorScheme = useColorScheme();

  let mode = useSelector((state) => state.appearance);
  if (mode === "auto") {
    mode = colorScheme;
  }
  return Colors[mode];
}
