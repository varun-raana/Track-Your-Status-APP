import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import AddTask from "../screens/AddTask";
import Reports from "../screens/Reports";

import {
  AddTaskScreenOptions,
  FavouriteScreenOptions,
  HomeScreenOptions,
  TabBarStyles,
} from "../ScreensNavigationStyles";
import { Colors } from "../assets/utilities";
import FileProgressPage from "../screens/FileProgressPage";

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ ...TabBarStyles }}
      sceneContainerStyle={{
        backgroundColor: Colors.Ripple800,
      }}>
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{ ...HomeScreenOptions }}
      />
      <Tab.Screen
        name="Add Task"
        component={AddTask}
        options={{ ...AddTaskScreenOptions }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{ ...FavouriteScreenOptions }}
      />
    </Tab.Navigator>
  );
};

export const FileProgressTabStackHandler = () => {
  return (
    <Tab.Navigator
      screenOptions={{ ...TabBarStyles, headerShown: false }}
      sceneContainerStyle={{
        backgroundColor: Colors.Ripple800,
      }}>
      <Tab.Screen
        name="Home"
        component={FileProgressPage}
        options={{ ...HomeScreenOptions }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{ ...FavouriteScreenOptions }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
