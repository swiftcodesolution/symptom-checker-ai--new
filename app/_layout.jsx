import { Stack } from "expo-router";
import { ThemeProvider } from "./theme/ThemeContext";
import AnimatedBackground from "./components/AnimatedBackground";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AnimatedBackground>
        <Stack>
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen
            name="collect-user-info"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
        </Stack>
      </AnimatedBackground>
    </ThemeProvider>
  );
}
