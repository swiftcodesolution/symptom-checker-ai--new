import {
  Canvas,
  LinearGradient,
  interpolateColors,
  Fill,
  vec,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const startColors = [
  "rgba(34, 193, 195, 0.4)",
  "rgba(34,193,195,0.4)",
  "rgba(63,94,251,1)",
  "rgba(253,29,29,0.4)",
];
const endColors = [
  "rgba(0,212,255,0.4)",
  "rgba(253,187,45,0.4)",
  "rgba(252,70,107,1)",
  "rgba(252,176,69,0.4)",
];

const AnimatedBackground = ({ children }) => {
  const { width, height } = useWindowDimensions();
  const colorsIndex = useSharedValue(0);

  useEffect(() => {
    colorsIndex.value = withRepeat(
      withTiming(startColors.length - 1, { duration: 4000 }),
      -1,
      true
    );
    console.log("animated loaded");
  }, []);

  const gradientColors = useDerivedValue(() => {
    return [
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], startColors),
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], endColors),
    ];
  });

  return (
    <View style={styles.container}>
      <Canvas style={[StyleSheet.absoluteFill, { width, height }]}>
        <Fill>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={gradientColors}
          />
        </Fill>
      </Canvas>

      <View style={styles.screensContent}>{children}</View>
    </View>
  );
};

export default AnimatedBackground;

const styles = StyleSheet.create({
  container: { flex: 1, position: "relative" },
  screensContent: {
    flex: 1,
    position: "relative",
    zIndex: 1,
    backgroundColor: "#000",
  },
});
