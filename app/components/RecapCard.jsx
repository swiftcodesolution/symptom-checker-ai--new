import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useTheme } from "../theme/ThemeContext";

const RecapCard = ({ question, hasAnswer, editAnswer }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.recapCard]}>
      <View style={styles.flex}>
        <Icon name={hasAnswer ? "checksquareo" : "closesquareo"} size={32} />
        <Text style={[styles.questionText, { color: theme.text }]}>
          {question}
        </Text>
      </View>
      <TouchableOpacity onPress={editAnswer}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecapCard;

const styles = StyleSheet.create({
  recapCard: {
    width: "100%",
    borderRadius: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 18,
    backgroundColor: "rgba(107, 112, 91, 0.4)",
  },
  flex: { flexDirection: "row", gap: 10, alignItems: "center" },
});
