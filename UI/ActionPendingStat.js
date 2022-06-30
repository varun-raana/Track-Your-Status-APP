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
    borderRadius: 50,
    paddingHorizontal: 10,
    textAlign: "center",
    paddingVertical: 2,
    fontWeight: "bold",
  },
});
