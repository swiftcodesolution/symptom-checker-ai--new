import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import * as LocalAuthentication from "expo-local-authentication";
import Icon from "react-native-vector-icons/MaterialIcons";

const Login = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/user-info-collection");
  };

  const handleBiometricLogin = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        alert("Biometric authentication is not supported on this device.");
        return;
      }

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        alert("No biometric credentials are enrolled.");
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate with Face ID or Fingerprint",
      });

      if (result.success) {
        router.push("/home");
      } else {
        alert("Biometric authentication failed.");
      }
    } catch (error) {
      console.error("Biometric authentication error:", error);
      alert("An error occurred during biometric authentication.");
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
            <TouchableOpacity
              onPress={() => router.push("/auth/forgot-password")}
            >
              <Text style={styles.smallText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View>
              <Button
                title="Sign In"
                pressFunction={handleLogin}
                style={[
                  styles.emailBtn,
                  { backgroundColor: theme.primaryBtnBg },
                ]}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.biometricBtn}
            onPress={handleBiometricLogin}
          >
            <Icon name="fingerprint" size={64} color={theme.primary} />
            <Text style={[styles.smallText, { color: theme.text }]}>
              Biometric Login
            </Text>
          </TouchableOpacity>

          <View style={styles.socialBtns}>
            <Button
              title="Sign up with Google"
              pressFunction={() => {}}
              style={[
                styles.socialBtn,
                { backgroundColor: theme.secondaryBtnBg },
              ]}
            />
            <Button
              title="Sign up with Apple ID"
              pressFunction={() => {}}
              style={[
                styles.socialBtn,
                { backgroundColor: theme.secondaryBtnBg },
              ]}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => router.push("/auth/signup")}>
            <Text style={[styles.smallText, { color: theme.text }]}>
              New User? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { flexGrow: 1, justifyContent: "space-between", padding: 20 },
  title: { fontSize: 42, textAlign: "center", marginBottom: 20 },
  text: { fontSize: 28, textAlign: "center", marginBottom: 40 },

  form: { gap: 18 },
  input: {
    backgroundColor: "rgba(107, 112, 91, 0.5)",
    padding: 24,
    borderRadius: 24,
  },

  smallText: { fontSize: 16, textAlign: "center" },

  socialBtns: { gap: 16, marginBottom: 60 },

  biometricBtn: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 20,
  },
});
