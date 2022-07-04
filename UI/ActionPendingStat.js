import { StyleSheet, Text } from "react-native";

const ActionPendingStat = ({ children, style }) => {
  return (
    <Text style={[styles.actionPendingReportButton, style]}>{children}</Text>
  );
};

export default ActionPendingStat;

const styles = StyleSheet.create({
  actionPendingReportButton: {
    marginLeft: 10,
    color: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    textAlign: "center",
    padding: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
});
