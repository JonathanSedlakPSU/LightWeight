// Import React libraries / functions
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
// Import Firebase Configuration
import { FIREBASE_AUTH, FIREBASE_DB, addUser } from "./FirebaseConfig";

// Import Screens
import LoginPage from "./Screens/LoginScreen";
import SignUpPage from "./Screens/SignUpPage";
import HomePage from "./Screens/HomeScreen";
import WorkoutsPage from "./Screens/WorkoutScreen";
import ActivityPage from "./Screens/ActivityScreen";

// Import Icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
///////////////////////////////////////////////////////////////////////

// Create a TabBar at bottom of screen
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBar({ route }) {
  // Get the userId from the route in stack
  const { userId } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarStyle: { backgroundColor: Color.theme1 },
        tabBarActiveTintColor: Color.colorWhite,
        tabBarInactiveTintColor: Color.colorDarkgray,
      }}
    >
      <Tab.Screen
        name="Workouts"
        component={WorkoutsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="dumbbell" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: Color.theme1,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
            >
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
          headerStyle: {
            backgroundColor: Color.theme1,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
            >
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
          headerStyle: {
            backgroundColor: Color.theme1,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
            >
              <FontAwesome name="bars" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main Function to start app
// Login / Signup Screen
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown:false }} />
          <Stack.Screen name="SignUp" component={SignUpPage} options={{ title:"",headerStyle: {backgroundColor: Color.theme1}}} />
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
});
