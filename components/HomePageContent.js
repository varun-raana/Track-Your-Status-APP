import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Progress from "./Progress";
import HomePageButtons from "./HomePageButtons";

const listTab = [
  {
    status: "overview",
  },
  {
    status: "productivity",
  },
];

const HomePageContent = () => {
  const [status, setStatus] = useState("overview");
  const overViewData = <Progress />;

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
      <ScrollView style={styles.innerContainer}>
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
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
