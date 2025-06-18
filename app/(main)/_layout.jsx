import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const MainLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
};

export default MainLayout;
