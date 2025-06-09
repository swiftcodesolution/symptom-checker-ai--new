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

      <View>
        <Image
          src={require("../../assets/user.jpg")}
          style={styles.profileImg}
        />
        <SubText textContent="Hello Scott" />
      </View>

      <TouchableOpacity style={styles.sosBtn}>
        <Text>SOS</Text>
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
  profileImg: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 100,
  },
});
