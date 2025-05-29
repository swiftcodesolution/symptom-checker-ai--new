import { Image, StyleSheet, Text, View } from "react-native";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import Button from "../components/PrimaryButton";
import { useRouter } from "expo-router";
import { useTheme } from "../theme/ThemeContext";

const SignupSuccess = () => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View>
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
          <Button
            title="Home"
            pressFunction={() => router.push("/user-info-collection")}
          />
        </View>
      </View>
    </View>
  );
};

export default SignupSuccess;

const styles = StyleSheet.create({
  successCard: { paddingVertical: 60, paddingHorizontal: 36, borderRadius: 24 },
  image: { width: 160, height: 120, objectFit: "contain", marginBottom: 40 },
  title: { textAlign: "center", marginBottom: 20 },
});
