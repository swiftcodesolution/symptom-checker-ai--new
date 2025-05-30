import { Stack } from "expo-router";

const CollectInfoLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="recap" options={{ headerShown: false }} />
    </Stack>
  );
};

export default CollectInfoLayout;
