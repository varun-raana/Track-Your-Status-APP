import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../assets/utilities";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 7,
    backgroundColor: Colors.Gray600,
  },
});
