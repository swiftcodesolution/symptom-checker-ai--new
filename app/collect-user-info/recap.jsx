import { StyleSheet, Text, View } from "react-native";
import RecapCard from "../components/RecapCard";
import { questionsData } from "./index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeContext";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";

const Recap = () => {
  const { theme } = useTheme();

  const hasAnswer = true;

  const editAnswer = () => {};

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View>
        <TitleText style={styles.title} title="Recap" />
        <SubText
          style={styles.text}
          textContent="Thank you for providing your medical details. Please review them and make any necessary corrections."
        />
      </View>
      <View style={styles.recapCards}>
        {questionsData.map((question, index) => (
          <RecapCard
            key={index}
            question={`${questionsData[index].question.slice(0, 25)}...`}
            hasAnswer={hasAnswer}
            editAnswer={editAnswer}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Recap;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", gap: 60, padding: 20 },
  title: { textAlign: "center", marginBottom: 20 },
  text: { textAlign: "center", marginBottom: 40 },

  recapCards: { gap: 12 },
});
