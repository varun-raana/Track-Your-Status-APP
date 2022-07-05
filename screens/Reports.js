import { View } from "react-native";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Colors, fontWeights } from "../assets/utilities";
import TaskItem from "../components/TaskItem";
import {
  yourTasks,
  companyTasks,
  harvyOpsTeamTasks,
  titleNames,
} from "../TaskNames";

const Reports = ({ route }) => {
  const { title } = route.params;

  let data =
    title === titleNames[0]
      ? yourTasks
      : title === titleNames[1]
      ? companyTasks
      : harvyOpsTeamTasks;

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.taskContainer}>
        {data.map((name, index) => {
          return (
            <TaskItem key={index} taskNumber={index + 1} taskName={name} />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    width: "45%",
    textAlign: "center",
    padding: 5,
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
