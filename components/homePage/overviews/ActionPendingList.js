import { View } from "react-native";
import { Colors } from "../../../assets/utilities";

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
