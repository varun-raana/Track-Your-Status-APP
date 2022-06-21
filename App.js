import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Title from "./UI/Title";
import { Colors, fonts } from "./assets/utilities";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        style="light"
        animated={true}
        networkActivityIndicatorVisible={true}
      />
      <SafeAreaView style={styles.screen}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}>
          <Title>track your status</Title>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}>
          <Login />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: fonts.mini,
    color: Colors.Main,
  },
});
