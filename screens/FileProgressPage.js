import { StyleSheet, Text, View } from "react-native";
import FileProgress from "../components/fileProgressPage/FileProgress";

const FileProgressPage = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <FileProgress />
    </View>
  );
};

export default FileProgressPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
