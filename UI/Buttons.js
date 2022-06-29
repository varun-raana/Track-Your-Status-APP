import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  Colors,
  deviceWidth,
  fonts,
  fontWeights,
  letterSpacing,
  margin,
} from "../assets/utilities";

const Buttons = ({ children, style, onPress }) => {
  return (
    <View style={styles.button}>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 30,
        }}>
        <Pressable
          style={[styles.innerButtonContainer, style]}
          android_ripple={{ color: Colors.Background }}
          onPress={onPress}>
          <Text style={[styles.text]}>{children}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const maxWidth = 380;

export default Buttons;

const styles = StyleSheet.create({
  outerButtonContainer: {
    marginHorizontal: margin.small,
    borderRadius: 30,
    overflow: "hidden",
  },
  innerButtonContainer: {
    backgroundColor: Colors.Primary600,
    overflow: "hidden",
  },
  text: {
    fontSize: deviceWidth <= maxWidth ? fonts.mini : fonts.medium,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: letterSpacing.small,
    color: Colors.Main,
    fontWeight: fontWeights.bold,
  },
});
