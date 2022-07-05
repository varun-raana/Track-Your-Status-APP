import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { Colors, fontWeights, letterSpacing } from "../assets/utilities";

const TaskItem = ({ taskName, taskNumber, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{taskNumber}</Text>
      <Text style={styles.text}>{taskName}</Text>
      <View>
        <PressableButton style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Ageing</Text>
        </PressableButton>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingHorizontal: 5,
  },
  text: {
    color: Colors.Main,
    fontSize: 18,
    textTransform: "capitalize",
    letterSpacing: letterSpacing.medium,
    fontWeight: fontWeights.bold,
  },
  button: {
    borderWidth: 0,
    paddingVertical: 4,
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "center",
  },
});
