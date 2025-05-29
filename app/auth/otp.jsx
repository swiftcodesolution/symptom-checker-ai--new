import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeContext";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import Button from "../components/PrimaryButton";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";

const OTP = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const inputs = useRef([]);

  const [OTP, setOTP] = useState(["", "", "", ""]);

  const handleCodeChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newOTP = [...OTP];
      newOTP[index] = text;
      setOTP(newOTP);

      // Move to next input if text is entered
      if (text) {
        if (index < 3) {
          inputs.current[index + 1].focus();
        } else {
          // OTP is possibly complete, check and hide keyboard
          const isComplete = newOTP.every((val) => val.length === 1);
          if (isComplete) {
            inputs.current[index].blur(); // Hides the keyboard
          }
        }
      } else if (!text && index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleCodeSubmit = () => {
    const code = OTP.join("");
    if (code.length === 6 && /^\d{6}$/.test(code)) {
      console.log("code varified");

      router.push("/auth/signup-success");
    } else {
      console.log("invalid/incomplete code");

      router.push("/auth/signup-success");
    }
  };

  const handleResendCode = () => {
    console.log("code resent!");

    setOTP(["", "", "", ""]);
    inputs.current[0].focus();
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <TitleText style={styles.title} title="OTP Varification" />

      <SubText
        style={styles.text}
        textContent="Enter the code sent to your email"
      />

      <View style={styles.form}>
        <View style={styles.otpContainer}>
          {OTP.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={(input) => (inputs.current[index] = input)}
              textAlign="center"
            />
          ))}
        </View>

        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.smallText}>Resend Code</Text>
        </TouchableOpacity>
        <View>
          <Button
            title="Submit"
            pressFunction={handleCodeSubmit}
            style={[styles.submitBtn, { backgroundColor: theme.primaryBtnBg }]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", gap: 20 },

  title: { textAlign: "center" },
  text: { textAlign: "center", marginBottom: 40 },

  form: { gap: 20 },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: "auto",
  },
  otpInput: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(107, 112, 91, 0.5)",
    borderRadius: 24,
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
  },

  smallText: { fontSize: 16, textAlign: "center" },
});
