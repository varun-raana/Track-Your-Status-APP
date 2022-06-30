import { StyleSheet, View } from "react-native";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 24,
    borderWidth: 0.2,
    borderColor: "#222",
    borderRadius: 10,
    overflow: "hidden",
  },
});
