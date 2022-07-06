import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Colors, fontWeights } from "../assets/utilities";

const Reports = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>reports</Text>
    </SafeAreaView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    width: "45%",
    textAlign: "center",
    padding: 5,
    borderRadius: 50,
    fontWeight: fontWeights.bold,
    fontSize: 15,
    textTransform: "capitalize",
    color: "white",
    backgroundColor: Colors.Primary600,
  },
});
