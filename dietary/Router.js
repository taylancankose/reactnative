import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MealPlanner from "./pages/MealPlanner";
import FoodDetails from "./pages/FoodDetails/FoodDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./pages/auth/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/dietSlice";
import Login from "./pages/auth/Login/Login";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.dietary.loggedIn);
  const HomeStack = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MealPlanner" component={MealPlanner} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  const AfterLoginStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeStack}
          options={{
            headerRight: () => (
              <Pressable onPress={() => dispatch(logout())}>
                <Text>Logout</Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator
        defaultScreenOptions={Register}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {loggedIn === false ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={AfterLoginStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
