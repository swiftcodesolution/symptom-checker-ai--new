import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";

const TwoColumnBox = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.twoColumnBox, { backgroundColor: theme.secondary }]}>
      <View
        style={[
          styles.row,
          styles.header,
          { backgroundColor: theme.onboardingCardBg },
        ]}
      >
        <Text style={[styles.cell, styles.wideCell, styles.headerCell]}>
          Name
        </Text>
        <Text style={[styles.cell, styles.headerCell]}>Date</Text>
      </View>

      <View style={styles.tableData}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.wideCell]}>
            X-Rays: MedlinePlus
          </Text>
          <Text style={styles.cell}>2-2-25</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.wideCell]}>
            X-Rays: MedlinePlus
          </Text>
          <Text style={styles.cell}>2-2-25</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.wideCell]}>
            X-Rays: MedlinePlus
          </Text>
          <Text style={styles.cell}>2-2-25</Text>
        </View>
      </View>
    </View>
  );
};

export default TwoColumnBox;

const styles = StyleSheet.create({
  twoColumnBox: { borderRadius: 16, overflow: "hidden" },

  row: { flexDirection: "row", padding: "10", paddingHorizontal: 40 },
  cell: { width: "30%", textAlign: "center", fontSize: 16, color: "#fff" },
  wideCell: {
    width: "70%",
    textAlign: "left",
    fontSize: 16,
    color: "#fff",
  },

  headerCell: { color: "#000" },

  tableData: { gap: 6, marginVertical: 6 },
});
