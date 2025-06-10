import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../theme/ThemeContext";
import TextBubble from "../components/TextBubble";

const convo = [
  { id: "1", message: "question", sender: "ai" },
  { id: "2", message: "answer", sender: "user" },
  { id: "3", message: "question", sender: "ai" },
  { id: "4", message: "answer", sender: "user" },
  { id: "5", message: "question", sender: "ai" },
  { id: "6", message: "answer", sender: "user" },
  { id: "7", message: "question", sender: "ai" },
  { id: "8", message: "answer", sender: "user" },
  { id: "9", message: "question", sender: "ai" },
  { id: "10", message: "answer", sender: "user" },
  { id: "11", message: "question", sender: "ai" },
  { id: "12", message: "answer", sender: "user" },
  { id: "13", message: "question", sender: "ai" },
  { id: "14", message: "answer", sender: "user" },
  { id: "15", message: "question", sender: "ai" },
  { id: "16", message: "answer", sender: "user" },
  { id: "17", message: "question", sender: "ai" },
  { id: "18", message: "answer", sender: "user" },
  { id: "19", message: "question", sender: "ai" },
  { id: "20", message: "answer", sender: "user" },
];

const Home = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />

      <FlatList
        data={convo}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <TextBubble message={item.item} />}
        contentContainerStyle={styles.chatContainerInner}
        style={styles.chatContainer}
      />

      <View>
        <TouchableOpacity style={styles.micIcon}>
          <View style={styles.micIcon2}>
            <View style={styles.micIcon3}>
              <Icon name="check-square" size={40} color={theme.primary} />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={[styles.inputBox, { backgroundColor: theme.onboardingCardBg }]}
        >
          <TextInput
            style={styles.input}
            placeholder="Ask Symptom Checker..."
            placeholderTextColor="#465D69"
          />
          <TouchableOpacity style={styles.sendBtn}>
            <Icon name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  chatContainerInner: { gap: 10 },
  chatContainer: {
    flex: 1,
    gap: 10,
    marginVertical: 20,
  },
  micIcon: {
    backgroundColor: "rgba(200, 193, 182, 0.5)",
    boxShadow: "0 10px 20px 6px rgba(0,0,0,0.3)",
    borderRadius: 100,
    margin: "auto",
    padding: 10,
    marginBottom: 20,
  },
  micIcon2: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgba(200, 193, 182, 0.8)",
  },
  micIcon3: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgba(200, 193, 182, 1)",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 32,
  },
  input: { fontSize: 18 },
  sendBtn: {
    backgroundColor: "#6B705B",
    padding: 10,
    borderRadius: 100,
  },
});
