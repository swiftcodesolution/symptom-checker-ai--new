import { Stack } from "expo-router";
import { ThemeProvider } from "./theme/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        {/* Add Home screen later */}
        {/* <Stack.Screen name="home" options={{ headerShown: false }} /> */}
      </Stack>
    </ThemeProvider>
  );
}
