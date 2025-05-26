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
import Button from "../components/Button";

const Signup = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {};

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View>
        <Text style={[styles.title, { color: theme.text }]}>
          Create an account
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Welcome to Symptoms Diagnosis App
        </Text>
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
  container: { flex: 1, justifyContent: "space-between", padding: 20 },
  title: { fontSize: 42, textAlign: "center", marginBottom: 20 },
  text: { fontSize: 28, textAlign: "center", marginBottom: 40 },

  form: { gap: 18 },
  input: {
    backgroundColor: "rgba(107, 112, 91, 0.5)",
    padding: 24,
    borderRadius: 24,
  },

  smallText: { textAlign: "center" },
});
