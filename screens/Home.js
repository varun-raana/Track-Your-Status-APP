import { SafeAreaView, StyleSheet } from "react-native";
import { deviceWidth, fonts } from "../assets/utilities";

import Title from "../UI/Title";
import OverView from "../components/homePage/overviews/OverView";

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Title style={styles.title}>Hello Mr Dhar</Title>
      <OverView />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: deviceWidth <= 380 ? fonts.medium : fonts.smallScreen,
    fontWeight: "800",
    letterSpacing: 3,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
