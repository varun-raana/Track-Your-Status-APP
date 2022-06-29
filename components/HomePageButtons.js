import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors, fontWeights } from "../assets/utilities";

const HomePageButtons = ({ listTab, status, setStatusFilter }) => {
  return (
    <View style={styles.listTabs}>
      {listTab.map((e) => {
        return (
          <Pressable
            key={e.status}
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text style={[styles.text, status === e.status && styles.setColor]}>
              {e.status}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default HomePageButtons;

const styles = StyleSheet.create({
  listTabs: {
    marginHorizontal: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    overflow: "hidden",
  },
  btnTab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  btnTabActive: {
    backgroundColor: Colors.Primary600,
  },
  setColor: {
    color: Colors.Main,
  },
  listDataTab: {
    backgroundColor: Colors.Background,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  text: {
    color: "gray",
    fontSize: 12,
    fontWeight: fontWeights.bold,
    textTransform: "capitalize",
    letterSpacing: 0.9,
  },
});
