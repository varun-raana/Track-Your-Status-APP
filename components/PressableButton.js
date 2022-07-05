import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../assets/utilities";

const PressableButton = ({ children, onPress, style }) => {
  return (
    <View style={styles.defaultSettings}>
      <Pressable
        android_ripple={{ color: Colors.Background }}
        onPress={onPress}>
        <View style={style}>{children}</View>
      </Pressable>
    </View>
  );
};

export default PressableButton;

const styles = StyleSheet.create({
  defaultSettings: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 7,
    borderColor: Colors.Background,
    overflow: "hidden",
  },
});
