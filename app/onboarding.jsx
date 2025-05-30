import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "./theme/ThemeContext";
import { useState } from "react";
import OnboardingCard from "./components/OnboardingCard";
import { useRouter } from "expo-router";

const onboardingData = [
  {
    title: "Welcome To Symptom Diagnostic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Welcome To Symptom Diagnostic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Welcome To Symptom Diagnostic",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();
  const router = useRouter();

  const handlePressNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/auth");
    }
  };

  const handlePressSkip = () => {
    router.push("/auth");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <OnboardingCard
        title={onboardingData[currentIndex].title}
        text={onboardingData[currentIndex].text}
        bottomText={onboardingData[currentIndex].bottomText}
        handlePressNext={handlePressNext}
        handlePressSkip={handlePressSkip}
        activeIndex={currentIndex}
        totalScreens={onboardingData.length}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end", paddingHorizontal: 20 },
});
