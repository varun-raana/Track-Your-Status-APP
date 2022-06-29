import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors, fonts } from "../assets/utilities";
import LoginContainer from "../components/LoginContainer";
import Title from "../UI/Title";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.title}>
        <Title>track your status </Title>
      </View>
      <View style={styles.login}>
        <LoginContainer onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10 },
  title: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: fonts.mini,
    color: Colors.Main,
  },
  login: {
    flex: 1,
    justifyContent: "center",
  },
});
