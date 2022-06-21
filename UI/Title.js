import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors, fonts, fontWeights, letterSpacing } from "../assets/utilities";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

const width = Dimensions.get("window").width;

export default Title;

const styles = StyleSheet.create({
  titleText: {
    fontSize:
      width <= 360 ? fonts.smallScreen : width < 480 && fonts.mediumScreen,
    textTransform: "capitalize",
    fontWeight: fontWeights.bold,
    color: Colors.Main,
    letterSpacing: letterSpacing.medium,
  },
});
