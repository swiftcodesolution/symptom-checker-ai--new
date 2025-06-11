import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../theme/ThemeContext";

const Searchbar = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.searchbar}>
      <TextInput placeholder="Search your chat" />
      <Icon name="search" size={24} color={theme.primary} />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "rgba(107, 112, 91, 0.3)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginBottom: 20,
  },
});
