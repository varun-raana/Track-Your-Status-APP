import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color, style, size }) => {
  return <Ionicons style={style} name={name} color={color} size={size} />;
};

export default IconButton;
