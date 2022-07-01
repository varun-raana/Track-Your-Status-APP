import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "./assets/utilities";
import {
  StackNavigationScreenOptions,
  TabBarStyles,
  HomeScreenOptions,
  AddTaskScreenOptions,
  FavouriteScreenOptions,
} from "./ScreensNavigationStyles";

import Login from "./screens/Login";
import Home from "./screens/Home";
import AddTask from "./screens/AddTask";
import Reports from "./screens/Reports";
// import FileProgressPage from "./screens/FileProgressPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function FileProgressPageHandler() {
//   return (
//     <Tab.Navigator
//       screenOptions={{ ...TabBarStyles }}
//       sceneContainerStyle={{
//         backgroundColor: Colors.Ripple800,
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={FileProgressPage}
//         options={{ ...HomeScreenOptions }}
//       />
//       <Tab.Screen
//         name="Reports"
//         component={Reports}
//         options={{ ...FavouriteScreenOptions }}
//       />
//     </Tab.Navigator>
//   );
// }

function HandleScreen() {
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
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ ...StackNavigationScreenOptions }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HandleScreen} />
          {/* <Stack.Screen
            name="File Progress"
            component={FileProgressPageHandler}
            options={{
              animation: "slide_from_bottom",
              presentation: "modal",
              animationTypeForReplace: "pop",
              headerSearchBarOptions: true,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
