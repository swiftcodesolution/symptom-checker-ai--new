import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "expo-router";
import { useTheme } from "../theme/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Logout = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/onboarding");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push("(main)/(tabs)");
        }}
      >
        <Ionicons
          name="arrow-back-circle-outline"
          size={56}
          color={theme.text}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.successCard,
          { backgroundColor: theme.onboardingCardBg },
        ]}
      >
        <Image
          source={require("../../assets/logout.png")}
          style={styles.image}
        />
        <TitleText style={styles.title} title="Logout" />
        <SubText
          style={styles.text}
          textContent="You will be logged out from the app"
        />
        <View>
          <PrimaryButton
            title="Logout"
            pressFunction={handleSubmit}
            style={[styles.submitBtn, { backgroundColor: "#EB2F29" }]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", gap: 20, padding: 20 },
  backIcon: {},
  successCard: {
    paddingVertical: 60,
    paddingHorizontal: 36,
    borderRadius: 24,
  },
  image: {
    width: 160,
    height: 120,
    objectFit: "contain",
    marginBottom: 40,
    marginHorizontal: "auto",
  },
  title: { textAlign: "center", marginBottom: 20 },
  text: { textAlign: "center", marginBottom: 20 },
});
