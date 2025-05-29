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

const ResetPassword = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    router.push("/auth/login");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View>
        <TitleText style={styles.title} title="New Password" />

        <SubText
          style={styles.text}
          textContent="Create your new password to Login"
        />

        <View style={styles.form}>
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
              title="Reset Password"
              pressFunction={handleResetPassword}
              style={[styles.emailBtn, { backgroundColor: theme.primaryBtnBg }]}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { textAlign: "center", marginBottom: 20 },
  text: { textAlign: "center", marginBottom: 40 },

  form: { gap: 18 },
  input: {
    backgroundColor: "rgba(107, 112, 91, 0.5)",
    padding: 24,
    borderRadius: 24,
  },
});
