import { Dimensions, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, fontWeights, letterSpacing } from "../../../assets/utilities";

import Card from "../../../UI/Card";
import ImageList from "../../ImageList";
import PercentBar from "../../../UI/PercentBar";
import ActionPendingStat from "../../../UI/ActionPendingStat";
import ActionPendingItem from "./ActionPendingItem";

const ActionPendingContainer = () => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <ActionPendingItem
          name="book"
          color={Colors.Main}
          size={24}
          marginRight={20}
          iconBackground={Colors.Primary600}
          sender="from you"
          messages="2 new"
          PercentBarWidth="2%"
          PercentBarColor={Colors.Primary600}
          stat="2/24"
          statBackgroundColor={Colors.Primary600}
        />
        <ActionPendingItem
          name="albums"
          color={Colors.Main}
          size={24}
          sender="from lawyer"
          iconBackground={Colors.Purple}
          messages="14 new"
          PercentBarWidth="14%"
          PercentBarColor={Colors.Purple}
          stat="14/24"
          statBackgroundColor={Colors.Purple}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <ActionPendingItem
          name="checkmark-done-outline"
          color={Colors.Main}
          size={24}
          marginRight={20}
          iconBackground={Colors.Green}
          sender="harvi team"
          messages="6 new"
          PercentBarWidth="6%"
          PercentBarColor={Colors.Green}
          stat="6/24"
          statBackgroundColor={Colors.Green}
        />
        <ActionPendingItem
          name="trash"
          color={Colors.Main}
          size={24}
          sender="company"
          iconBackground={Colors.Orange}
          messages="9 new"
          PercentBarWidth="9%"
          PercentBarColor={Colors.Orange}
          stat="9/24"
          statBackgroundColor={Colors.Orange}
        />
      </View>
    </View>
  );
};

export default ActionPendingContainer;

// const styles = StyleSheet.create({
//   textColor: {
//     color: Colors.Main,
//     fontWeight: fontWeights.bold,
//   },
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     overflow: "hidden",
//   },
//   text: {
//     fontSize: Dimensions.get("window").width < 380 ? 14 : 28,
//     color: "white",
//     fontWeight: fontWeights.bold,
//     letterSpacing: letterSpacing.medium,
//     textTransform: "capitalize",
//   },
//   infoText: {
//     marginVertical: 10,
//     fontSize: 24,
//     textTransform: "capitalize",
//     letterSpacing: letterSpacing.medium,
//     color: "white",
//     fontWeight: "bold",
//   },
//   descText: {
//     color: "#fff",
//     marginTop: 4,
//     textTransform: "capitalize",
//     fontWeight: fontWeights.medium,
//   },
//   percentContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: "auto",
//   },
//   percentageMargin: {
//     flex: 1,
//     marginRight: 12,
//   },
//   newCard: {
//     marginVertical: 10,
//     flexDirection: "column",
//     padding: 10,
//     overflow: "hidden",
//   },
//   iconsBox: {
//     padding: 7,
//     borderRadius: 6,
//     alignItems: "center",
//   },
//   pendingBox: {
//     paddingVertical: 2,
//     paddingHorizontal: 5,
//     backgroundColor: "darkorange",
//     borderRadius: 50,
//   },
// });
