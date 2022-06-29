import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors, fontWeights, letterSpacing } from "../assets/utilities";
import Buttons from "../UI/Buttons";

const Reports = () => {
  return (
    <View style={styles.ActionContainer}>
      <Text style={styles.ActionPendingText}>action pending</Text>
      <View style={styles.actionButtonContainer}>
        <Buttons style={styles.actionPendingReportButton}>24%</Buttons>
      </View>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  ActionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  ActionPendingText: {
    fontSize: Dimensions.get("window").width < 380 ? 14 : 23,
    color: Colors.Main,
    fontWeight: fontWeights.semiBold,
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
  },
  actionButtonContainer: {
    marginLeft: 10,
  },
  actionPendingReportButton: {
    backgroundColor: "#d9480f",
    paddingHorizontal: 14,
    paddingVertical: 2,
  },
});
