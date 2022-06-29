import { Text, StyleSheet } from "react-native";
import { Colors, deviceWidth, fonts, fontWeights } from "../assets/utilities";

const Title = ({ children, style }) => {
  return <Text style={[styles.titleText, style]}>{children}</Text>;
};

const maxWidth = 380;

export default Title;

const styles = StyleSheet.create({
  titleText: {
    fontSize: deviceWidth <= maxWidth ? fonts.smallScreen : fonts.mediumScreen,
    textTransform: "capitalize",
    fontWeight: fontWeights.bold,
    color: Colors.Main,
  },
});
