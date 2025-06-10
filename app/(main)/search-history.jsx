import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../theme/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import TitleText from "../components/TitleText";
import PrimaryButton from "../components/PrimaryButton";
import SearchHistoryCard from "../components/SearchHistoryCard";

const searchHistory = [
  {
    id: "1",
    text: "A crucial first aid tip is to ensure your own safety before approaching the injured. Read More",
    date: "25th May, 2025",
    time: "9:30 PM",
  },
  {
    id: "2",
    text: "CPR can save lives in emergencies — remember the steps: Check, Call, Compress. Read More",
    date: "24th May, 2025",
    time: "11:00 AM",
  },
  {
    id: "3",
    text: "Keep a basic first aid kit at home, in your car, and at work. Read More",
    date: "23rd May, 2025",
    time: "6:15 PM",
  },
  {
    id: "4",
    text: "Learn how to treat burns and cuts to avoid infection. Read More",
    date: "22nd May, 2025",
    time: "2:45 PM",
  },
  {
    id: "5",
    text: "In case of choking, the Heimlich maneuver can be life-saving. Read More",
    date: "21st May, 2025",
    time: "10:00 AM",
  },
  {
    id: "6",
    text: "Stay calm and assess the situation before giving first aid. Read More",
    date: "20th May, 2025",
    time: "8:20 AM",
  },
  {
    id: "7",
    text: "Know the difference between a heart attack and cardiac arrest. Read More",
    date: "19th May, 2025",
    time: "4:30 PM",
  },
  {
    id: "8",
    text: "Apply pressure to stop bleeding until help arrives. Read More",
    date: "18th May, 2025",
    time: "7:50 PM",
  },
  {
    id: "9",
    text: "Always wash your hands before and after treating wounds. Read More",
    date: "17th May, 2025",
    time: "1:10 PM",
  },
  {
    id: "10",
    text: "Use cold compresses to reduce swelling after minor injuries. Read More",
    date: "16th May, 2025",
    time: "9:00 AM",
  },
];

const SearchHistory = () => {
  const { theme } = useTheme();

  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomHeader />

        <View>
          <TitleText title="Search History" style={styles.pageTitle} />
        </View>

        <View style={styles.inputBox}>
          <TextInput placeholder="Search your chat" />
          <Icon name="search" size={24} color={theme.primary} />
        </View>

        <View style={styles.btnsDiv}>
          <PrimaryButton
            title="Recent"
            pressFunction={handlePress}
            style={{ backgroundColor: theme.primaryBtnBg }}
          />
          <PrimaryButton
            title="Last"
            pressFunction={handlePress}
            style={{ backgroundColor: theme.secondaryBtnBg }}
          />
        </View>
      </SafeAreaView>

      <FlatList
        data={searchHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SearchHistoryCard
            searchText={item.text}
            date={item.date}
            time={item.time}
          />
        )}
        contentContainerStyle={styles.searchHistoryListInner}
      />
    </View>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  pageTitle: { textAlign: "center", marginTop: 40, marginBottom: 20 },

  inputBox: {
    backgroundColor: "rgba(107, 112, 91, 0.3)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginBottom: 20,
  },

  btnsDiv: { flexDirection: "row", gap: 10 },

  searchHistoryListInner: { gap: 10, paddingBottom: 20 },
});
