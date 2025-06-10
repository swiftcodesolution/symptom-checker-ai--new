import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { useTheme } from "../theme/ThemeContext";
import SubText from "./SubText";

const CustomHeader = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.customHeader}>
      <TouchableOpacity
        style={[styles.drawerIcon, { backgroundColor: theme.onboardingCardBg }]}
      >
        <Icon name="three-bars" size={24} />
      </TouchableOpacity>

      <View style={styles.userInfo}>
        <Image source={require("../../assets/user.jpg")} style={styles.image} />
        <SubText
          textContent="Hello Scott"
          style={[styles.userName, { color: theme.text }]}
        />
      </View>

      <TouchableOpacity style={styles.sosBtn}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  drawerIcon: { padding: 10, borderRadius: 10 },

  userInfo: { alignItems: "center", justifyContent: "center", gap: 20 },
  image: {
    width: 90,
    height: 90,
    objectFit: "cover",
    borderRadius: 100,
    boxShadow: "0 10px 20px 6px rgba(0,0,0,0.3)",
  },
  userName: { textAlign: "center" },

  sosBtn: { backgroundColor: "#EB2F29", padding: 10, borderRadius: 10 },
  sosText: { color: "#fff", fontSize: 18 },
});
