import { Image, StyleSheet, View } from "react-native";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "expo-router";
import { useTheme } from "../theme/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupSuccess = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/collect-user-info");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.successCard,
          { backgroundColor: theme.onboardingCardBg },
        ]}
      >
        <Image
          source={require("../../assets/success.png")}
          style={styles.image}
        />
        <TitleText style={styles.title} title="Signup Success!" />
        <SubText
          style={styles.text}
          textContent="Congratulations, Your account is registered"
        />
        <View>
          <PrimaryButton
            title="Let's Go"
            pressFunction={handleSubmit}
            style={[styles.submitBtn, { backgroundColor: theme.primaryBtnBg }]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupSuccess;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", gap: 60, padding: 20 },
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
