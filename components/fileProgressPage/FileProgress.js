import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProgressTaskList from "./ProgressTaskList";

const FileProgress = () => {
  return (
    <ScrollView
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <ProgressTaskList />
    </ScrollView>
  );
};

export default FileProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});
