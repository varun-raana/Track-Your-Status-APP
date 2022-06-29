import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Title from "../UI/Title";
import { Colors, deviceWidth, fonts, margin } from "../assets/utilities";
import Card from "../UI/Card";
import Buttons from "../UI/Buttons";

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Title style={styles.title}>Hello Mr Dhar</Title>
      <View style={styles.buttonContainer}>
        <View style={styles.innerButtonContainer}>
          <Buttons style={styles.button}>overView</Buttons>
        </View>
        <View style={styles.innerButtonContainer}>
          <Buttons style={{ backgroundColor: "transparent", borderWidth: 0 }}>
            productivity
          </Buttons>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
  },
  innerButtonContainer: { marginHorizontal: 10 },
  button: {
    backgroundColor: Colors.Primary600,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: deviceWidth <= 380 ? fonts.medium : fonts.smallScreen,
    fontWeight: "bold",
    marginLeft: 5,
    letterSpacing: 3,
  },
});
