import { FlatList, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import TitleText from "../../components/TitleText";
import Searchbar from "../../components/Searchbar";
import LibraryCard from "../../components/LibraryCard";

const libraryCards = [
  {
    id: "1",
    imageUrl: require("../../../assets/cover.jpg"),
    text: "Understanding Common Cold vs Flu",
    tag: "General Health",
    date: "2025-06-01",
    shareLink: "Share Symptoms",
  },
  {
    id: "2",
    imageUrl: require("../../../assets/cover.jpg"),
    text: "AI Insights: Headache Patterns",
    tag: "Neurology",
    date: "2025-05-28",
    shareLink: "Share Report",
  },
  {
    id: "3",
    imageUrl: require("../../../assets/cover.jpg"),
    text: "When to Worry About a Cough",
    tag: "Respiratory",
    date: "2025-06-03",
    shareLink: "Share Advice",
  },
  {
    id: "4",
    imageUrl: require("../../../assets/cover.jpg"),
    text: "Tracking Abdominal Pain with AI",
    tag: "Gastroenterology",
    date: "2025-06-05",
    shareLink: "Share Check",
  },
  {
    id: "5",
    imageUrl: require("../../../assets/cover.jpg"),
    text: "Skin Rashes: Image-Based Diagnosis",
    tag: "Dermatology",
    date: "2025-05-30",
    shareLink: "Share Image",
  },
  {
    id: "6",
    imageUrl: require("../../../assets/cover.jpg"),
    text: "AI for Mental Health: Symptom Tracker",
    tag: "Mental Health",
    date: "2025-06-02",
    shareLink: "Share Insights",
  },
];

const MedicalLibrary = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomHeader />

        <View>
          <TitleText title="Medical Library" style={styles.pageTitle} />
        </View>

        <Searchbar />
      </SafeAreaView>

      <FlatList
        data={libraryCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LibraryCard
            imageUrl={item.imageUrl}
            text={item.text}
            tag={item.tag}
            date={item.date}
            shareLink={item.shareLink}
          />
        )}
        contentContainerStyle={styles.libraryListInner}
      />
    </View>
  );
};

export default MedicalLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  pageTitle: { textAlign: "center", marginTop: 40, marginBottom: 20 },

  libraryListInner: { gap: 20, paddingBottom: 20 },
});
