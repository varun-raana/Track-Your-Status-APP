import { StyleSheet, Text, Dimensions, View } from "react-native";
import { Colors, fonts, letterSpacing, margin } from "../assets/utilities";

import Buttons from "../UI/Buttons";

const LoginContainer = ({ onPress }) => {
  return (
    <View>
      <Buttons style={styles.signInButton} onPress={onPress}>
        Sign In With Email
      </Buttons>
      <View style={styles.buttonsContainer}>
        <Buttons style={styles.buttons}>google</Buttons>
        <Buttons style={styles.buttons}>phone</Buttons>
      </View>
      <View>
        <Text style={styles.text}>
          by continuing you agree to the terms and conditions
        </Text>
      </View>
    </View>
  );
};

export default LoginContainer;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: margin.xlarge,
    overflow: "hidden",
  },
  signInButton: {
    padding: 20,
  },
  buttons: {
    width: 170,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 0.2,
    borderRadius: 30,
    padding: 16,
    borderColor: Colors.Border600,
  },
  text: {
    fontSize: width <= 360 ? fonts.mini : fonts.medium,
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.Gray600,
    letterSpacing: letterSpacing.medium,
  },
});
