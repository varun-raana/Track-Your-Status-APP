import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors, margin } from "./assets/utilities";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/Home";
import Favourite from "./screens/Favourite";
import { StatusBar } from "expo-status-bar";
import HeaderAvatar from "./components/HeaderAvatar";

const TabBarStyles = {
  tabBarLabelPosition: "beside-icon",
  tabBarActiveTintColor: Colors.Primary600,
  headerShadowVisible: false,
  headerTintColor: "white",
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  tabBarStyle: {
    height: 60,
    backgroundColor: Colors.Ripple800,
    shadowColor: "#fff",
    borderTopWidth: 0,
    elevation: 4,
  },
  headerStyle: {
    backgroundColor: Colors.Ripple800,
  },
  headerRightContainerStyle: {
    paddingRight: margin.large,
  },
  tabBarShowLabel: false,
  headerRight: () => {
    return <HeaderAvatar />;
  },
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="home"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourite}
        options={{
          headerTitle: "Reports",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="clipboard-outline"
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: Colors.Ripple800,
            },
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HandleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
