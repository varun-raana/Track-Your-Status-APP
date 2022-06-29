import { Dimensions, StyleSheet, Text, View } from "react-native";
import Card from "../UI/Card";
import { fontWeights, letterSpacing } from "../assets/utilities";
import ImageList from "./ImageList";
import PercentBar from "./PercentBar";
import Reports from "./Reports";
import ActionPendingContainer from "./ActionPendingContainer";

const Progress = () => {
  return (
    <>
      <Card style={styles.newCard}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>file progress</Text>
          </View>
          <ImageList />
        </View>
        <Text style={styles.descText}>here you can see your progress</Text>
        <View style={styles.percentContainer}>
          <Text style={styles.text}>76%</Text>
          <PercentBar />
        </View>
      </Card>
      <Reports />
      <ActionPendingContainer />
    </>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: Dimensions.get("window").width < 380 ? 14 : 28,
    color: "white",
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
  },
  descText: {
    color: "#fff",
    marginTop: 4,
    textTransform: "capitalize",
    fontWeight: fontWeights.medium,
  },
  percentContainer: {
    marginTop: 20,
  },
  newCard: {
    marginBottom: 30,
  },
});
