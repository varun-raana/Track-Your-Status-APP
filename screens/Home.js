import { SafeAreaView, StyleSheet } from "react-native";
import { deviceWidth, fonts } from "../assets/utilities";

import Title from "../UI/Title";
import HomePageContent from "../components/homePage/HomePageContent";

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Title style={styles.title}>Hello Mr Dhar</Title>
      <HomePageContent />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 5,
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
