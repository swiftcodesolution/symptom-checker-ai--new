import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
});
