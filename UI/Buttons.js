import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";
import {
  borderWidth,
  Colors,
  fonts,
  fontWeights,
  letterSpacing,
  margin,
} from "../assets/utilities";

const Buttons = ({ children, style, onPress }) => {
  return (
    <View style={[styles.button, style]}>
      <Pressable
        android_disableSound={false}
        android_ripple={{ color: Colors.Ripple800 }}
        style={[styles.margin, style]}
        onPress={onPress}>
        <Text style={[styles.text, style]}>{children}</Text>
      </Pressable>
    </View>
  );
};

const { width } = Dimensions.get("window");

export default Buttons;

const styles = StyleSheet.create({
  button: {
    borderWidth: borderWidth.xsmall,
    borderColor: Colors.Border600,
    borderRadius: 50,
    marginHorizontal: margin.small,
    overflow: "hidden",
  },
  margin: {
    paddingVertical: width <= 360 ? margin.large : margin.xxlarge,
    paddingHorizontal: width <= 360 ? margin.xlarge : margin.xxxlarge,
    backgroundColor: Colors.Primary600,
  },
  text: {
    fontSize: width <= 360 ? fonts.mini : fonts.medium,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: letterSpacing.small,
    color: Colors.Main,
    fontWeight: fontWeights.bold,
  },
});
