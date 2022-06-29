import { StyleSheet, View } from "react-native";
import React from "react";

const PercentBar = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}></View>
    </View>
  );
};

export default PercentBar;

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 4,
    height: 4,
    backgroundColor: "gray",
    position: "relative",
    width: "100%",
    borderRadius: 50,
  },
  innerContainer: {
    width: "76%",
    borderRadius: 50,
    height: 4,
    backgroundColor: "green",
    position: "absolute",
  },
});
