import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import Button from "./PrimaryButton";
import ProgressDots from "./ProgressDots";

const OnboardingCard = ({
  title,
  text,
  totalScreens,
  activeIndex,
  handlePressNext,
  handlePressSkip,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.onboardingCard,
        { backgroundColor: theme.onboardingCardBg },
      ]}
    >
      <Text style={[styles.cardTitle, { color: theme.text }]}>{title}</Text>
      <Text style={[styles.cardText, { color: theme.text }]}>{text}</Text>

      <ProgressDots
        style={styles.progressDots}
        totalScreens={totalScreens}
        activeIndex={activeIndex}
      />

      <View style={styles.btnsDiv}>
        <Button
          title={activeIndex === totalScreens - 1 ? "Finish" : "Next"}
          pressFunction={handlePressNext}
          style={{ backgroundColor: theme.primaryBtnBg }}
        />
        {activeIndex < totalScreens - 1 && (
          <Button
            title="Skip"
            pressFunction={handlePressSkip}
            style={{ backgroundColor: theme.secondaryBtnBg }}
          />
        )}
      </View>
    </View>
  );
};

export default OnboardingCard;

const styles = StyleSheet.create({
  onboardingCard: {
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  cardTitle: { fontSize: 28, marginBottom: 12 },
  cardText: { fontSize: 20, marginBottom: 32 },
  progressDots: { marginBottom: 62 },
  btnsDiv: { flexDirection: "row", gap: 10 },
});
