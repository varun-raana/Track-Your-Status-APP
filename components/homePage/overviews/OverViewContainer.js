import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { fontWeights, letterSpacing } from "../../../assets/utilities";

import Card from "../../../UI/Card";
import ImageList from "../../ImageList";
import PercentBar from "../../../UI/PercentBar";
import Reports from "./Reports";
import Title from "../../../UI/Title";
import { useNavigation } from "@react-navigation/native";

const OverViewContainer = () => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable onPress={() => navigation.navigate("File Progress")}>
        <Card style={styles.newCard}>
          <View style={styles.container}>
            <Title style={styles.text}>file progress</Title>
            <ImageList />
          </View>
          <Text style={styles.descText}>here you can see your progress</Text>
          <View style={styles.percentContainer}>
            <Text style={styles.text}>76%</Text>
            <PercentBar style={{ width: "76%" }} />
          </View>
        </Card>
      </Pressable>
      <Reports />
    </>
  );
};

export default OverViewContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
