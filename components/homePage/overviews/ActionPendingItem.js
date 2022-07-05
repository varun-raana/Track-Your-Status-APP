import { StyleSheet, View } from "react-native";

import Card from "../../../UI/Card";
import Title from "../../../UI/Title";
import ImageList from "../../ImageList";
import IconButton from "../../IconButton";
import PercentBar from "../../../UI/PercentBar";
import ActionPendingStat from "../../../UI/ActionPendingStat";
import { fontWeights, letterSpacing } from "../../../assets/utilities";

const ActionPendingItem = ({
  marginRight,
  iconBackground,
  name,
  color,
  size,
  PercentBarColor,
  PercentBarWidth,
  statBackgroundColor,
  stat,
  messages,
  sender,
}) => {
  return (
    <Card style={[styles.newCard, { marginRight: marginRight }]}>
      <View style={styles.container}>
        <View style={[styles.iconsBox, { backgroundColor: iconBackground }]}>
          <IconButton name={name} color={color} size={size} />
        </View>
        <ImageList />
      </View>
      <Title style={styles.descText}>{messages}</Title>
      <Title style={styles.infoText}>{sender}</Title>
      <View style={styles.percentContainer}>
        <View style={styles.percentageMargin}>
          <PercentBar
            style={{ backgroundColor: PercentBarColor, width: PercentBarWidth }}
          />
        </View>
        <ActionPendingStat
          style={{ backgroundColor: statBackgroundColor, letterSpacing: 0.4 }}>
          {stat}
        </ActionPendingStat>
      </View>
    </Card>
  );
};

export default ActionPendingItem;

const styles = StyleSheet.create({
  newCard: {
    marginVertical: 10,
    flexDirection: "column",
    padding: 10,
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  iconsBox: {
    padding: 7,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    marginVertical: 10,
    fontSize: 20,
    textTransform: "capitalize",
    letterSpacing: letterSpacing.medium,
    color: "white",
    fontWeight: "bold",
  },
  descText: {
    color: "#fff",
    fontSize: 13,
    marginTop: 7,
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
});
