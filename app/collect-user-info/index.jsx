import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "../theme/ThemeContext";
import OnboardingCard from "../components/OnboardingCard";
import QuestionCard from "../components/QuestionCard";

const questionsData = [
  {
    question: "What is your age?",
    userAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec pretium ex. Suspendisse potenti. Praesent cursus",
    summarizedAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus",
  },
  {
    question: "What symptoms are you experiencing?",
    userAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec pretium ex. Suspendisse potenti. Praesent cursus",
    summarizedAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus",
  },
  {
    question: "Any medical history?",
    userAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec pretium ex. Suspendisse potenti. Praesent cursus",
    summarizedAnswer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus",
  },
];

const CollectUserInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { theme } = useTheme();
  const router = useRouter();

  const handlePressNext = () => {
    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/collect-user-info/recap");
    }
  };

  const handlePressSkip = () => {
    router.push("/collect-user-info/recap");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <QuestionCard
        question={questionsData[currentIndex].question}
        userAnswer={questionsData[currentIndex].answer}
        activeIndex={currentIndex}
        totalQuestions={questionsData.length}
      />

      <OnboardingCard
        title="Your summarized answer:"
        text={questionsData[currentIndex].summarizedAnswer}
        bottomText=""
        handlePressNext={handlePressNext}
        handlePressSkip={handlePressSkip}
        activeIndex={currentIndex}
        totalScreens={questionsData.length}
      />
    </SafeAreaView>
  );
};

export default CollectUserInfo;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end", padding: 20 },
});
