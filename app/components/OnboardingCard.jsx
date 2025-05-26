import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import Button from "./Button";
import ProgressDots from "./ProgressDots";

const OnboardingCard = ({
  title,
  text,
  totalScreens,
  activeIndex,
  handlePressNext,
  handlePressSkip,
  bottomText,
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

      <ProgressDots totalScreens={totalScreens} activeIndex={activeIndex} />

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

      <Text style={[styles.bottomText, { color: theme.text }]}>
        {bottomText}
      </Text>
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
  cardTitle: { fontSize: 28, fontWeight: "400", marginBottom: 12 },
  cardText: { fontSize: 20, fontWeight: "400", marginBottom: 42 },
  btnsDiv: { flexDirection: "row", gap: 5, marginBottom: 52 },
  bottomText: { fontSize: 16, textAlign: "center" },
});
