import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FileProgressTabHandlerScreenOptions,
  StackNavigationScreenOptions,
} from "./ScreensNavigationStyles";

import Login from "./screens/Login";
import { TabStack, FileProgressTabStackHandler } from "./navigations/TabStack";
import FileProgressPage from "./screens/FileProgressPage";
import HeaderAvatar from "./components/HeaderAvatar";
import { Colors } from "./assets/utilities";
// import FileProgressPage from "./screens/FileProgressPage";

const Stack = createNativeStackNavigator();

function FileProgressPageHandler() {
  return <FileProgressTabStackHandler />;
}

function HandleScreen() {
  return <TabStack />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ ...StackNavigationScreenOptions }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HandleScreen} />
          <Stack.Screen
            name="File Progress"
            component={FileProgressPageHandler}
            options={{ ...FileProgressTabHandlerScreenOptions }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
