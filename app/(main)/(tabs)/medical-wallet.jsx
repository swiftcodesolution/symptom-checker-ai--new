import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import TitleText from "../../components/TitleText";
import SubText from "../../components/SubText";
import SmallButton from "../../components/SmallButton";
import ThreeColumnBox from "../../components/ThreeColumnBox";
import { useTheme } from "../../theme/ThemeContext";
import DetailsCard from "../../components/DetailsCard";
import PharmacyList from "../../components/PharmacyList";

const MedicalWallet = () => {
  const { theme } = useTheme();

  const handlePress = () => {
    console.log(`btn pressed!`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <CustomHeader />

        <View>
          <TitleText title="Medical Wallet" style={styles.pageTitle} />
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollViewStyles}
        contentContainerStyle={styles.scrollViewStylesInner}
      >
        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="Personal Details"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="Edit" pressFunction={handlePress} />
          </View>
          <DetailsCard />
        </View>

        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="Insurance Details"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="See All" pressFunction={handlePress} />
          </View>
          <DetailsCard />
        </View>

        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="Doctor Details"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="See All" pressFunction={handlePress} />
          </View>
          <DetailsCard />
        </View>

        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="Personal Contacts"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="Manage" pressFunction={handlePress} />
          </View>
          <ThreeColumnBox />
        </View>

        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="Preferred Pharmacy"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="See All" pressFunction={handlePress} />
          </View>
          <PharmacyList />
        </View>

        <View style={styles.section}>
          <View style={styles.titleBox}>
            <SubText
              textContent="Nearby Pharmacy"
              style={styles.sectionHeading}
            />
            <SmallButton btnText="See All" pressFunction={handlePress} />
          </View>
          <PharmacyList />
        </View>
      </ScrollView>
    </View>
  );
};

export default MedicalWallet;

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
