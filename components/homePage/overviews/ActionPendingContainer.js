import { Dimensions, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, fontWeights, letterSpacing } from "../../../assets/utilities";

import Card from "../../../UI/Card";
import ImageList from "../../ImageList";
import PercentBar from "../../../UI/PercentBar";
import ActionPendingStat from "../../../UI/ActionPendingStat";

const ActionPendingContainer = () => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <Card style={[styles.newCard, { marginRight: 20 }]}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "blue" }]}>
              <Ionicons name="book" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          <Text style={styles.descText}>5 new</Text>
          <Text style={styles.infoText}>from you</Text>
          <View style={styles.percentContainer}>
            <View style={styles.percentageMargin}>
              <PercentBar style={{ backgroundColor: "blue", width: "9%" }} />
            </View>
            <ActionPendingStat style={{ backgroundColor: "blue" }}>
              9/24
            </ActionPendingStat>
          </View>
        </Card>
        <Card style={styles.newCard}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "darkorange" }]}>
              <Ionicons name="albums" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          <View style={styles.percentContainer}>
            <View style={styles.percentageMargin}>
              <PercentBar
                style={{ backgroundColor: "darkorange", width: "70%" }}
              />
            </View>
            <ActionPendingStat style={{ backgroundColor: "darkorange" }}>
              14/17
            </ActionPendingStat>
          </View>
        </Card>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Card style={[styles.newCard, { marginRight: 20 }]}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "green" }]}>
              <Ionicons name="book" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          <Text style={styles.descText}>5 new</Text>
          <Text style={styles.infoText}>from you</Text>
          <View style={styles.percentContainer}>
            <View style={styles.percentageMargin}>
              <PercentBar style={{ backgroundColor: "green", width: "60%" }} />
            </View>
            <ActionPendingStat style={{ backgroundColor: "green" }}>
              6/10
            </ActionPendingStat>
          </View>
        </Card>
        <Card style={styles.newCard}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "brown" }]}>
              <Ionicons name="albums" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          <View style={styles.percentContainer}>
            <View style={styles.percentageMargin}>
              <PercentBar style={{ backgroundColor: "brown", width: "4%" }} />
            </View>
            <ActionPendingStat style={{ backgroundColor: "brown" }}>
              4/14
            </ActionPendingStat>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default ActionPendingContainer;

const styles = StyleSheet.create({
  textColor: {
    color: Colors.Main,
    fontWeight: fontWeights.bold,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  text: {
    fontSize: Dimensions.get("window").width < 380 ? 14 : 28,
    color: "white",
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.medium,
    textTransform: "capitalize",
  },
  infoText: {
    marginVertical: 10,
    fontSize: 24,
    textTransform: "capitalize",
    letterSpacing: letterSpacing.medium,
    color: "white",
    fontWeight: "bold",
  },
  descText: {
    color: "#fff",
    marginTop: 4,
    textTransform: "capitalize",
    fontWeight: fontWeights.medium,
  },
  percentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
  },
  percentageMargin: {
    flex: 1,
    marginRight: 12,
  },
  newCard: {
    marginVertical: 10,
    flexDirection: "column",
    padding: 10,
    overflow: "hidden",
  },
  iconsBox: {
    padding: 7,
    borderRadius: 6,
    alignItems: "center",
  },
  pendingBox: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: "darkorange",
    borderRadius: 50,
  },
});
