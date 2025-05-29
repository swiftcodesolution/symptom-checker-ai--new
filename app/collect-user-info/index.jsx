import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router";

const questionsData = [
  { text: "What is your age?" },
  { text: "What symptoms are you experiencing?" },
  { text: "Any medical history?" },
];

const CollectUserInfo = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View>
      <Text>CollectUserInfo</Text>
    </View>
  );
};

export default CollectUserInfo;

const styles = StyleSheet.create({});
