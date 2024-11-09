// Import React libraries / functions
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Firebase Configuration
import { FIREBASE_AUTH, FIREBASE_DB } from './FirebaseConfig';

// Import Screens
import LoginPage from './Screens/LoginScreen';
import SignUpPage from './Screens/SignUpPage';
import HomePage from './Screens/HomeScreen';
import WorkoutsPage from './Screens/WorkoutScreen';
import ActivityPage from './Screens/ActivityScreen';
// Pop-Ups
import GoalsPopUp from './Screens/GoalsPop-Up';
import DailyQuestPopup from './Screens/DailyQuestPop-Up';
import LogCaloriesPopUp from './Screens/LogCaloriesPop-Up';


///////////////////////////////////////////////////////////////////////

// Create a TabBar at bottom of screen
const Tab = createBottomTabNavigator();

// Main Function to start app
export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Workouts" component={WorkoutsPage} />
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Activity" component={ActivityPage} />
          <Tab.Screen name="Login" component={LoginPage} />
          <Tab.Screen name="SignUp" component={SignUpPage} />
          <Tab.Screen name="goals" component={GoalsPopUp} />
          <Tab.Screen name="LC" component={LogCaloriesPopUp} />
          <Tab.Screen name="DQ" component={DailyQuestPopup} />
        </Tab.Navigator>
    </NavigationContainer>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20, // Space for the rounded tab bar
    backgroundColor: '#1c0101', // Background color outside the tab bar
  },
});