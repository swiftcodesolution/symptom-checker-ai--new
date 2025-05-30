import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";

const AuthMain = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const handleEmailSignUp = () => {
    router.push("auth/signup");
  };

  const handleSocialSignUp = () => {
    router.push("auth/signup-success");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <TitleText style={styles.title} title="Let's Get Started" />

      <SubText
        style={styles.text}
        textContent="Find the best AI assistance for your mental wellbeing on Symptom Checker"
      />

      <View>
        <PrimaryButton
          title="Sign up with Email"
          pressFunction={handleEmailSignUp}
          style={[styles.emailBtn, { backgroundColor: theme.primaryBtnBg }]}
        />
      </View>
      <Text style={[styles.smallText, { color: theme.text }]}>
        Or Use Instant Sign Up
      </Text>
      <View style={styles.socialBtns}>
        <PrimaryButton
          title="Sign up with Google"
          pressFunction={handleSocialSignUp}
          style={[styles.socialBtn, { backgroundColor: theme.secondaryBtnBg }]}
        />
        <PrimaryButton
          title="Sign up with Apple ID"
          pressFunction={handleSocialSignUp}
          style={[styles.socialBtn, { backgroundColor: theme.secondaryBtnBg }]}
        />
      </View>
      <TouchableOpacity
        style={styles.loginPrompt}
        onPress={() => router.push("/auth/login")}
      >
        <Text style={[styles.loginText, { color: theme.primary }]}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthMain;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { textAlign: "center", marginBottom: 20 },
  text: { textAlign: "center", marginBottom: 40 },
  emailBtn: { marginBottom: 40 },
  smallText: { fontSize: 16, textAlign: "center", marginBottom: 40 },
  socialBtns: { gap: 26, marginBottom: 60 },
  socialBtn: {},
  loginText: { textAlign: "center" },
});
