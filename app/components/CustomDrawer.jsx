import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TitleText from "./TitleText";
import { useTheme } from "../theme/ThemeContext";

const CustomDrawer = (props) => {
  const { theme } = useTheme();

  const handlePress = () => {
    console.log(`btn pressed!`);
  };

  return (
    <DrawerContentScrollView
      {...props}
      style={styles.drawer}
      contentContainerStyle={styles.drawerInner}
    >
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/user.jpg")}
          style={styles.profilePic}
        />
        <TitleText
          title="Hello Scott"
          style={[styles.userName, { color: theme.btnText }]}
        />

        <TouchableOpacity
          style={styles.sosBtn}
          onPress={() => {
            router.push("sos");
          }}
        >
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuList}>
        <DrawerItem
          label="Medical wallet"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/medical-wallet.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/(tabs)/medical-wallet");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Medical cabinet"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/medical-cabinet.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/(tabs)/medical-cabinet");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Medical library"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/medical-library.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/(tabs)/medical-library");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Search history"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/medical-history.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/search-history");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Emergency"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/emergency.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/emergency-corner");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Subscription"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/subscription.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/(tabs)/medical-history");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Settings"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/settings.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/(tabs)/medical-history");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Help"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/help.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("(main)/(tabs)/medical-history");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
        <DrawerItem
          label="Logout"
          icon={({ size, tintColor }) => (
            <Image
              source={require("../../assets/menu-icons/logout.png")}
              style={[
                styles.menuIcon,
                { tintColor: theme.primary, size: size },
              ]}
            />
          )}
          onPress={() => {
            router.push("auth/logout");
          }}
          style={styles.menuItem}
          labelStyle={styles.menuItemName}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawer: { flex: 1 },
  drawerInner: { justifyContent: "space-between" },

  userInfo: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 40,
  },

  profilePic: {
    width: 90,
    height: 90,
    objectFit: "cover",
    borderRadius: 100,
    boxShadow: "0 10px 20px 6px rgba(0,0,0,0.3)",
  },
  userName: { textAlign: "center" },

  sosBtn: {
    backgroundColor: "#EB2F29",
    padding: 10,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  sosText: { color: "#fff", fontSize: 18 },

  menuList: { gap: 1 },
  menuItem: { gap: 10 },
  menuIcon: { width: 20, height: 20 },
  menuItemName: { textTransform: "capitalize" },
});
