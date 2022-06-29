import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../UI/Card";
import { fontWeights, letterSpacing } from "../assets/utilities";
import ImageList from "./ImageList";
import PercentBar from "./PercentBar";
import Ionicons from "@expo/vector-icons/Ionicons";

const ActionPendingContainer = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Card style={[styles.newCard, { marginRight: 20 }]}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "blue" }]}>
              <Ionicons name="book" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          <Text style={styles.descText}>5 new</Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 24,
              textTransform: "capitalize",
              letterSpacing: letterSpacing.medium,
              color: "white",
              fontWeight: "bold",
            }}>
            from you
          </Text>
          <View style={styles.percentContainer}>
            <PercentBar />
          </View>
        </Card>
        <Card style={styles.newCard}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "orange" }]}>
              <Ionicons name="albums" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          {/* <Text style={styles.descText}>here you can see your progress</Text> */}
          <View style={styles.percentContainer}>
            <PercentBar />
          </View>
        </Card>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Card style={[styles.newCard, { marginRight: 20 }]}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "blue" }]}>
              <Ionicons name="book" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          <Text style={styles.descText}>5 new</Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 24,
              textTransform: "capitalize",
              letterSpacing: letterSpacing.medium,
              color: "white",
              fontWeight: "bold",
            }}>
            from you
          </Text>
          <View style={styles.percentContainer}>
            <PercentBar />
          </View>
        </Card>
        <Card style={styles.newCard}>
          <View style={styles.container}>
            <View style={[styles.iconsBox, { backgroundColor: "orange" }]}>
              <Ionicons name="albums" color={"white"} size={24} />
            </View>
            <ImageList />
          </View>
          {/* <Text style={styles.descText}>here you can see your progress</Text> */}
          <View style={styles.percentContainer}>
            <PercentBar />
          </View>
        </Card>
      </View>
    </View>
  );
};

export default ActionPendingContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginVertical: 20,
    padding: 10,
  },
  iconsBox: {
    padding: 7,
    borderRadius: 6,
    alignItems: "center",
  },
});
