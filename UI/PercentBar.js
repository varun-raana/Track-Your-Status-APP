import { StyleSheet, View } from "react-native";

const PercentBar = ({ style }) => {
  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, style]}></View>
    </View>
  );
};

export default PercentBar;

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 4,
    height: 4,
    backgroundColor: "#222",
    position: "relative",
    width: "100%",
    borderRadius: 50,
  },
  innerContainer: {
    borderRadius: 50,
    height: 4,
    backgroundColor: "green",
    position: "absolute",
  },
});
