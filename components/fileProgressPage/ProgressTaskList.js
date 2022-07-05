import { View } from "react-native";
import React, { useLayoutEffect } from "react";
import ProgressTaskItem from "./ProgressTaskItem";
import { Colors } from "../../assets/utilities";

const ProgressTaskList = () => {
  return (
    <View>
      <ProgressTaskItem
        iconName="book"
        titleName="your task"
        background={Colors.Primary600}
      />
      <ProgressTaskItem
        iconName="notifications-outline"
        background={Colors.Green}
        titleName="company task"
      />
      <ProgressTaskItem
        iconName="checkmark-done-outline"
        background={Colors.Purple}
        titleName="harvy team 1 task"
      />
      <ProgressTaskItem
        iconName="checkmark-done-outline"
        background={Colors.Purple}
        titleName="harvy team 2 task"
      />
      <ProgressTaskItem
        iconName="trash"
        background={Colors.Orange}
        titleName="law firm task"
      />
    </View>
  );
};

export default ProgressTaskList;
