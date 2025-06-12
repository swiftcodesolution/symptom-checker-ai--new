import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import SubText from "../components/SubText";
import SmallButton from "../components/SmallButton";
import TitleText from "../components/TitleText";
import ThreeColumnBox from "../components/ThreeColumnBox";
import TwoColumnBox from "../components/TwoColumnBox";
import { useState } from "react";
import MedicalModal from "../components/MedicalModal";

const MedicalCabinet = () => {
  const { theme } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
    console.log("gggg");
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    console.log(`btn pressed!`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomHeader />

        <View>
          <TitleText title="Medical Cabinet" style={styles.pageTitle} />
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollViewStyles}
        contentContainerStyle={styles.scrollViewStylesInner}
      >
        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="Medication List"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="See All" pressFunction={handlePress} />
          </View>
          <ThreeColumnBox />
        </View>

        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText textContent="Lab Tests" style={styles.sectionHeading} />
            <SmallButton btnText="See All" pressFunction={handlePress} />
          </View>
          <TwoColumnBox onRowPress={openModal} />
        </View>

        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="X Ray & CAT Scans"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="See All" pressFunction={handlePress} />
          </View>
          <ThreeColumnBox />
        </View>
      </ScrollView>

      <MedicalModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

export default MedicalCabinet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  pageTitle: { textAlign: "center", marginTop: 40 },

  scrollViewStylesInner: { gap: 20, paddingBottom: 20 },

  section: {},

  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
