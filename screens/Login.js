import { SafeAreaView, StyleSheet, View } from "react-native";

import { Colors } from "../assets/utilities";
import LoginContainer from "../components/LoginContainer";
import Title from "../UI/Title";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.title}>
        <Title style={styles.text}>track your status </Title>
      </View>
      <View style={styles.login}>
        <LoginContainer onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center" },
  title: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  text: {
    fontSize: 70,
    color: Colors.Main,
    textAlign: "center",
  },
  login: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
    borderWidth: 0.3,
    shadowColor: "#000",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    elevation: 1,
  },
});
