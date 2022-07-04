import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { Colors, fontWeights } from "../../../assets/utilities";
import OverViewContainer from "./OverViewContainer";
import Buttons from "./Buttons";

const OverView = () => {
  const [status, setStatus] = useState(1);

  return (
    <View style={styles.screen}>
      <Buttons statusOne={status} statusTwo={status} setStatus={setStatus} />

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
  hideContainer: { display: "none" },
  showContainer: { display: "flex" },
  innerContainer: {
    display: "flex",
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
});
