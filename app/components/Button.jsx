import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeContext";

const Button = ({ pressFunction, title, style }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={pressFunction} style={[style, styles.btn]}>
      <Text style={[styles.btnText, { color: theme.btnText }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 24,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  btnText: { letterSpacing: 2 },
});
