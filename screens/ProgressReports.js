import { View } from "react-native";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Colors, fontWeights } from "../assets/utilities";
import SearchInput from "../components/SearchInput";
import TaskItem from "../components/TaskItem";
import {
  yourTasks,
  companyTasks,
  harvyOpsTeamTasks,
  titleNames,
} from "../TaskNames";

const ProgressReports = ({ route }) => {
  const { title } = route.params;

  let data =
    title === titleNames[0]
      ? yourTasks
      : title === titleNames[1]
      ? companyTasks
      : harvyOpsTeamTasks;

  return (
    <SafeAreaView style={styles.screen}>
      <SearchInput placeholder={`Search  ${title} `} />
      <View style={styles.titleBox}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.taskContainer}>
        {data &&
          data.map((name, index) => {
            return (
              <TaskItem key={index} taskNumber={index + 1} taskName={name} />
            );
          })}
      </View>
    </SafeAreaView>
  );
};

export default ProgressReports;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titleBox: {
    marginTop: 30,
  },
  text: {
    width: "45%",
    textAlign: "center",
    padding: 8,
    borderRadius: 50,
    fontWeight: fontWeights.bold,
    fontSize: 15,
    textTransform: "capitalize",
    color: "white",
    backgroundColor: Colors.Primary600,
  },
  taskContainer: {
    paddingTop: 20,
  },
});
