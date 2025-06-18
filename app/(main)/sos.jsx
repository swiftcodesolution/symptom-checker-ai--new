import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleText from "../components/TitleText";
import SubText from "../components/SubText";
import SmallButton from "../components/SmallButton";
import ThreeColumnBox from "../components/ThreeColumnBox";
import { useTheme } from "../theme/ThemeContext";
import DetailsCard from "../components/DetailsCard";
import PharmacyList from "../components/PharmacyList";
import Icon from "react-native-vector-icons/Octicons";
import { useRouter } from "expo-router";

const Sos = () => {
  const { theme } = useTheme();

  const router = useRouter();

  const handlePress = () => {
    console.log(`btn pressed!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <SafeAreaView>
        {/*  */}
        <View>
          <View style={styles.customHeader}>
            <View style={styles.leftWrapper}>
              <TouchableOpacity
                onPress={() => router.push("/(tabs)/index")}
                style={[styles.backIcon]}
              >
                <Icon name="chevron-left" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.userInfo}>
              <Image
                source={require("../../assets/user.jpg")}
                style={styles.image}
              />
            </View>

            <View style={styles.placeholder}></View>
          </View>
          <SubText
            textContent="Hello Scott"
            style={[styles.userName, { color: theme.text }]}
          />
        </View>
        {/*  */}

        <View>
          <TitleText
            title="Medical Wallet"
            style={[styles.pageTitle, { color: theme.btnText }]}
          />
        </View>

        <TouchableOpacity
          style={styles.sosBtn}
          onPress={() => {
            router.push("sos");
          }}
        >
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>
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

export default Sos;

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  leftWrapper: {
    width: "20%",
  },
  backIcon: {
    margin: "auto",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 100,
  },

  userInfo: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "60%",
  },
  image: {
    width: 90,
    height: 90,
    objectFit: "cover",
    borderRadius: 100,
    boxShadow: "0 10px 20px 6px rgba(0,0,0,0.3)",
  },
  userName: { textAlign: "center" },

  placeholder: { width: "20%" },

  sosBtn: {
    backgroundColor: "#EB2F29",
    padding: 10,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  sosText: { color: "#fff", fontSize: 18 },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  pageTitle: { textAlign: "center", marginTop: 20, marginBottom: 20 },

  scrollViewStylesInner: { gap: 20, paddingBottom: 20 },

  section: {},

  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
