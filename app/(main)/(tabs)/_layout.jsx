import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { useTheme } from "../../theme/ThemeContext";
import { Image } from "react-native";

const TabLayout = () => {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assets/menu-icons/home.png")}
              style={[{ tintColor: theme.primary, size: size }]}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="medical-cabinet"
        options={{
          title: "Medical Cabinet",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assets/menu-icons/medical-cabinet.png")}
              style={[{ tintColor: theme.primary, size: size }]}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="medical-wallet"
        options={{
          title: "Medical Wallet",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assets/menu-icons/medical-wallet.png")}
              style={[{ tintColor: theme.primary, size: size }]}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="medical-library"
        options={{
          title: "Medical Library",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assets/menu-icons/medical-library.png")}
              style={[{ tintColor: theme.primary, size: size }]}
              width={20}
              height={20}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
