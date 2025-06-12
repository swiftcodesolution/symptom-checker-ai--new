import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { useTheme } from "../../theme/ThemeContext";

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
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="medical-cabinet"
        options={{
          title: "Medical Cabinet",
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="drawer" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="medical-wallet"
        options={{
          title: "Medical Wallet",
          tabBarIcon: ({ color, size }) => (
            <Icon name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
