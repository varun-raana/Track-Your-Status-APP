import { StyleSheet, View, Dimensions } from "react-native";
import ActionPendingStat from "../../../UI/ActionPendingStat";
import Title from "../../../UI/Title";
import ActionPendingContainer from "./ActionPendingContainer";

const Reports = () => {
  return (
    <>
      <View style={styles.ActionContainer}>
        <Title style={styles.text}>Action pending</Title>
        <ActionPendingStat style={styles.actionPendingReportButton}>
          24%
        </ActionPendingStat>
      </View>
      <ActionPendingContainer />
    </>
  );
};

export default Reports;

const styles = StyleSheet.create({
  ActionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: Dimensions.get("window").width < 380 ? 14 : 23,
  },
  actionPendingReportButton: {
    backgroundColor: "#d9480f",
  },
});
