import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";

const ForgotPassword = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    router.push("/auth/reset-password");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View>
        <TitleText style={styles.title} title="Forgot Password" />

        <SubText
          style={styles.text}
          textContent="Type your email, we will send you verification code via email."
        />

        <View style={styles.form}>
          <TextInput
            style={[styles.input, { color: theme.btnText }]}
            placeholder="Email"
            placeholderTextColor={theme.btnText}
            value={email}
            onChangeText={setEmail}
          />

          <View>
            <PrimaryButton
              title="Send Reset Link"
              pressFunction={handleForgotPassword}
              style={[styles.emailBtn, { backgroundColor: theme.primaryBtnBg }]}
            />
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={[styles.smallText, { color: theme.text }]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", gap: 60, padding: 20 },
  title: { textAlign: "center", marginBottom: 20 },
  text: { textAlign: "center", marginBottom: 40 },

  form: { gap: 18 },
  input: {
    backgroundColor: "rgba(107, 112, 91, 0.5)",
    padding: 24,
    borderRadius: 24,
  },

  smallText: { textAlign: "center" },
});
