import { View, StyleSheet, Text, Dimensions } from "react-native";
import Buttons from "../UI/Buttons";

import React from "react";
import { Colors, fonts } from "../assets/utilities";

const Login = () => {
  function singInWithEmail() {
    console.log("sigIn With Email...");
  }
  function singInWithGoogle() {
    console.log("sigIn With Google...");
  }
  function singInWithPhone() {
    console.log("sigIn With Phone...");
  }

  return (
    <>
      <Buttons style={styles.signInButton} onPress={singInWithEmail}>
        sign in with email
      </Buttons>
      <View style={styles.buttonsContainer}>
        <View style={{ flex: 1 }}>
          <Buttons style={styles.buttons} onPress={singInWithGoogle}>
            google
          </Buttons>
        </View>
        <View style={{ flex: 1 }}>
          <Buttons style={styles.buttons} onPress={singInWithPhone}>
            phone
          </Buttons>
        </View>
      </View>
      <View>
        <Text style={styles.text}>
          by continuing you agree to the terms and conditions
        </Text>
      </View>
    </>
  );
};

const { width } = Dimensions.get("window");

export default Login;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttons: {
    borderRadius: 30,
    backgroundColor: "transparent",
    color: Colors.Gray600,
  },
  text: {
    fontSize: width <= 360 ? fonts.mini : fonts.medium,
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.Gray600,
    letterSpacing: 1,
  },
});
