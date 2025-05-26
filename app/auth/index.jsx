import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const AuthMain = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        Let's Get Started
      </Text>
      <Text style={[styles.text, { color: theme.text }]}>
        Find the best AI assistance for your mental wellbeing on Symptom Checker
      </Text>
      <View>
        <Button
          title="Sign up with Email"
          pressFunction={() => router.push("/auth/signup")}
          style={[styles.emailBtn, { backgroundColor: theme.primaryBtnBg }]}
        />
      </View>
      <Text style={[styles.smallText, { color: theme.text }]}>
        Or Use Instant Sign Up
      </Text>
      <View style={styles.socialBtns}>
        <Button
          title="Sign up with Google"
          pressFunction={() => {}}
          style={[styles.socialBtn, { backgroundColor: theme.secondaryBtnBg }]}
        />
        <Button
          title="Sign up with Apple ID"
          pressFunction={() => {}}
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
  title: { fontSize: 42, textAlign: "center", marginBottom: 20 },
  text: { fontSize: 28, textAlign: "center", marginBottom: 40 },
  emailBtn: { marginBottom: 40 },
  smallText: { fontSize: 16, textAlign: "center", marginBottom: 40 },
  socialBtns: { gap: 26, marginBottom: 60 },
  loginText: { textAlign: "center" },
});
