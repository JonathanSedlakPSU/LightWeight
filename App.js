// Import React libraries / functions
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";

// Import Firebase Configuration
import { FIREBASE_AUTH, FIREBASE_DB, addUser } from "./FirebaseConfig";

// Import Screens
import LoginPage from "./Screens/LoginScreen";
import SignUpPage from "./Screens/SignUpPage";
import HomePage from "./Screens/HomeScreen";
import WorkoutsPage from "./Screens/WorkoutScreen";
import ActivityPage from "./Screens/ActivityScreen";
// Pop-Ups
import GoalsPopUp from "./Screens/GoalsPop-Up";
import DailyQuestPopup from "./Screens/DailyQuestPop-Up";
import LogCaloriesPopUp from "./Screens/LogCaloriesPop-Up";

///////////////////////////////////////////////////////////////////////

// Create a TabBar at bottom of screen
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBar() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen name="Workouts" component={WorkoutsPage} />
      <Tab.Screen name="Profile" component={HomePage} />
      <Tab.Screen name="Activity" component={ActivityPage} />
      <Tab.Screen name="Goals" component={GoalsPopUp} />
      <Tab.Screen name="LC" component={LogCaloriesPopUp} />
    </Tab.Navigator>
  );
}

// Main Function to start app
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Home" component={TabBar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20, // Space for the rounded tab bar
    backgroundColor: "#1c0101", // Background color outside the tab bar
  },
});
