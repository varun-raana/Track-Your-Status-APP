import { ScrollView, StyleSheet, View } from "react-native";

import Buttons from "../../UI/Buttons";
import SearchInput from "../SearchInput";
import ProgressTaskList from "./ProgressTaskList";

const FileProgress = () => {
  return (
    <ScrollView
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <SearchInput placeholder={"What are you looking for ?"} />
      </View>
      <View style={styles.buttonBox}>
        <Buttons style={styles.button}>all</Buttons>
      </View>
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
  buttonBox: {
    width: 60,
    marginTop: 30,
    marginBottom: 3,
  },
  button: {
    paddingVertical: 6,
  },
});
