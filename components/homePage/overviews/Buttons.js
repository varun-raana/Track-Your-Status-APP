import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, fontWeights } from "../../../assets/utilities";

const Buttons = ({ statusOne, statusTwo, setStatus }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.buttons, statusOne === 1 && styles.bgChange]}
        onPress={() => setStatus(1)}>
        <Text style={[styles.text, statusOne === 1 && styles.textChange]}>
          overView
        </Text>
      </Pressable>
      <Pressable
        style={[styles.buttons, statusTwo === 2 && styles.bgChange]}
        onPress={() => setStatus(2)}>
        <Text style={[styles.text, statusTwo === 2 && styles.textChange]}>
          productivity
        </Text>
      </Pressable>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
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
});
