import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import OverViewProgress from "../homePage/overviews/OverViewProgress";
import HomePageButtons from "./HomePageButtons";

const listTab = [
  {
    status: "overview",
  },
  {
    status: "productivity",
  },
];
const overViewData = <OverViewProgress />;

const HomePageContent = () => {
  const [status, setStatus] = useState("overview");
  const [listData, setListData] = useState(overViewData);

  const setStatusFilter = (status) => {
    if (status === "productivity") {
      setListData(() => {
        return <Text style={{ color: "white" }}>world</Text>;
      });
    } else {
      setListData(overViewData);
    }
    setStatus(status);
  };

  return (
    <View style={styles.outerContainer}>
      <HomePageButtons
        status={status}
        listTab={listTab}
        setStatusFilter={setStatusFilter}
      />
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={{ flex: 1 }}>{listData}</View>
      </ScrollView>
    </View>
  );
};

export default HomePageContent;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 50,
  },
  innerContainer: {
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
});
