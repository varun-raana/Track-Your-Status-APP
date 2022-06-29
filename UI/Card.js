import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 24,
    backgroundColor: "#222",
    elevation: 5,
    shadowColor: "darkgray",
    shadowRadius: 8,
    borderRadius: 8,
  },
});
