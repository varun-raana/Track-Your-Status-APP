import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { Colors, fontWeights } from "../../../assets/utilities";
import OverViewContainer from "./OverViewContainer";

const OverView = () => {
  const [status, setStatus] = useState(1);

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.buttons, status === 1 && styles.bgChange]}
          onPress={() => setStatus(1)}>
          <Text style={[styles.text, status === 1 && styles.textChange]}>
            overView
          </Text>
        </Pressable>
        <Pressable
          style={[styles.buttons, status === 2 && styles.bgChange]}
          onPress={() => setStatus(2)}>
          <Text style={[styles.text, status === 2 && styles.textChange]}>
            productivity
          </Text>
        </Pressable>
      </View>

      <View style={{ paddingVertical: 20 }}>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          style={[styles.hideContainer, status === 1 && styles.showContainer]}>
          <OverViewContainer />
        </ScrollView>
        <ScrollView
          contentContainerStyle={styles.innerContainer}
          style={[styles.hideContainer, status === 2 && styles.showContainer]}>
          <View style={{ height: 30, backgroundColor: "red" }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  screen: { flex: 1, marginTop: 40 },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#333",
    marginHorizontal: 50,
    borderRadius: 30,
    overflow: "hidden",
  },
  buttons: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgChange: {
    backgroundColor: Colors.Primary600,
  },
  text: {
    color: Colors.Gray600,
    letterSpacing: 0.6,
    fontWeight: fontWeights.bold,
    textTransform: "capitalize",
  },
  textChange: {
    color: Colors.Main,
  },
  hideContainer: { display: "none" },
  showContainer: { display: "flex" },
  innerContainer: {
    display: "flex",
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
});
