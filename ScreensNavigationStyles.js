import HeaderAvatar from "./components/HeaderAvatar";
import { Colors, margin } from "./assets/utilities";
import Ionicons from "@expo/vector-icons/Ionicons";

export const TabBarStyles = {
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

export const HomeScreenOptions = {
  headerTitle: "Home",
  tabBarIcon: ({ color, size, focused }) => {
    return <Ionicons name="home" color={color} size={size} focused={focused} />;
  },
};

export const AddTaskScreenOptions = {
  headerTitle: "Add Tasks",
  tabBarIcon: ({ color, size, focused }) => {
    return (
      <Ionicons name="add-circle" color={color} size={size} focused={focused} />
    );
  },
};

export const FavouriteScreenOptions = {
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
};

export const StackNavigationScreenOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: Colors.Ripple800,
  },
};
