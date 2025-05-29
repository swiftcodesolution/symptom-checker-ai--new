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
import Button from "../components/PrimaryButton";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";

const Signup = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    router.push("/auth/otp");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View>
        <TitleText style={styles.title} title="Create an account" />

        <SubText
          style={styles.text}
          textContent="Welcome to Symptoms Diagnosis App"
        />

        <View style={styles.form}>
          <TextInput
            style={[styles.input, { color: theme.btnText }]}
            placeholder="Email"
            placeholderTextColor={theme.btnText}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, { color: theme.btnText }]}
            placeholder="Password"
            placeholderTextColor={theme.btnText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={[styles.input, { color: theme.btnText }]}
            placeholder="Confirm Password"
            placeholderTextColor={theme.btnText}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <View>
            <Button
              title="Sign Up"
              pressFunction={handleSignup}
              style={[styles.emailBtn, { backgroundColor: theme.primaryBtnBg }]}
            />
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={[styles.smallText, { color: theme.text }]}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

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
