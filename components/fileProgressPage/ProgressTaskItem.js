import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PressableButton from "../PressableButton";
import IconButton from "../IconButton";
import Title from "../../UI/Title";
import { useNavigation } from "@react-navigation/native";
import { Colors, fontWeights } from "../../assets/utilities";

const ProgressTaskItem = ({ iconName, titleName, background }) => {
  const navigation = useNavigation();

  function navigateDetails() {
    navigation.navigate("ProgressReports", {
      title: titleName,
    });
  }

  return (
    <PressableButton onPress={navigateDetails}>
      <View style={styles.cards}>
        <IconButton
          style={[styles.icons, { backgroundColor: background }]}
          name={iconName}
          color={"white"}
          size={20}
        />
        <View style={styles.textBox}>
          <Title style={styles.text}>{titleName}</Title>
        </View>
        <IconButton name="chevron-forward-outline" color={"white"} size={20} />
      </View>
    </PressableButton>
  );
};

export default ProgressTaskItem;

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
  },
  icons: {
    padding: 4,
    borderRadius: 8,
  },
  text: {
    color: Colors.Main,
    fontSize: 18,
    fontWeight: fontWeights.bold,
    textTransform: "capitalize",
  },
  textBox: {
    flex: 1,
    marginLeft: 30,
  },
});
