import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { useTheme } from "../theme/ThemeContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
};

export default MainLayout;
