// Import React libraries / functions
import React, { useEffect } from "react";
import { StyleSheet, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Color} from "./GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
// Import Firebase Configuration
import { FIREBASE_AUTH, FIREBASE_DB, addUser } from "./FirebaseConfig";

// Import Screens
import LoginPage from "./Screens/LoginScreen";
import SignUpPage from "./Screens/SignUpPage";
import HomePage from "./Screens/HomeScreen";
import WorkoutsPage from "./Screens/WorkoutScreen";
import ActivityPage from "./Screens/ActivityScreen";

// Temporary Workot Screens
import PushWorkout from "./Screens/WorkoutScreens/Push";
import PullWorkout from "./Screens/WorkoutScreens/Pull";
import LegWorkout from "./Screens/WorkoutScreens/Legs";
import CoreWorkout from "./Screens/WorkoutScreens/Core";
import CardioWorkout from "./Screens/WorkoutScreens/Cardio";
import WarmUpsWorkout from "./Screens/WorkoutScreens/Warm-Ups";

// Import Icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
///////////////////////////////////////////////////////////////////////

// Create a TabBar at bottom of screen
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const WorkoutStack = createStackNavigator();



// Workouts Screens navigation
function WorkoutStackNavigator() {
  return (
    <WorkoutStack.Navigator initialRouteName="WorkoutsPage">
      <WorkoutStack.Screen
        name="WorkoutsPage"
        component={WorkoutsPage}
        options={{ headerShown: false }}
      />
      <WorkoutStack.Screen name="Warm-Ups" component={WarmUpsWorkout} 
      options={{ headerShown: false }} />
      <WorkoutStack.Screen name="Push" component={PushWorkout}
      options={{ headerShown: false }} />
      <WorkoutStack.Screen name="Pull" component={PullWorkout}
      options={{ headerShown: false }} />
      <WorkoutStack.Screen name="Legs" component={LegWorkout}
      options={{ headerShown: false }} />
      <WorkoutStack.Screen name="Core" component={CoreWorkout}
      options={{ headerShown: false }} />
      <WorkoutStack.Screen name="Cardio" component={CardioWorkout}
      options={{ headerShown: false }} />
    </WorkoutStack.Navigator>
  );
}



// Home Page
function TabBar({ route }) {
  // Get the userId from the route in stack
  const { userId } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: Color.colorWhite,
        tabBarInactiveTintColor: Color.colorDarkgray,
      }}
    >

      <Tab.Screen
        name="Workouts"
        component={WorkoutStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="dumbbell" size={size} color={color} />
          ),
          headerStyle: styles.headerStyle,
          headerTintColor: Color.colorWhite,
          headerTitleStyle: styles.headerTitleStyle,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerLeft}>
              <FontAwesome name="bars" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerStyle: styles.headerStyle,
          headerTintColor: Color.colorWhite,
          headerTitleStyle: styles.headerTitleStyle,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerLeft}>
              <FontAwesome name="bars" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      >
        {(props) => <HomePage {...props} userId={userId} />}
      </Tab.Screen>
      <Tab.Screen
        name="Activity"
        component={ActivityPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bar-chart-o" size={size} color={color} />
          ),
          headerStyle: styles.headerStyle,
          headerTintColor: Color.colorWhite,
          headerTitleStyle: styles.headerTitleStyle,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerLeft}>
              <FontAwesome name="bars" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>

    // Workout Screens

    
  );
}

// Main Function to start app
// Login / Signup Screen
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{
              title: "",
              headerStyle: styles.headerStyle,
            }}
          />
          <Stack.Screen
            name="Home"
            component={TabBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20, // Space for the rounded tab bar
    backgroundColor: Color.colorBackground, // Background color outside the tab bar
  },
  tabBarStyle: {
    backgroundColor: Color.theme1,
    borderRadius: 20, // Rounded corners for the tab bar
    position: "absolute", // Ensure it floats above content
    left: 40,
    right: 40,
    bottom: 10,
    height: 50,
    elevation: 0, // Remove shadow on Android
    shadowColor: "transparent", // Remove shadow on iOS
    borderTopWidth: 0, // Remove top border on iOS
},
  headerStyle: {
    backgroundColor: Color.theme1,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerLeft: {
    marginLeft: 20,
  },
});