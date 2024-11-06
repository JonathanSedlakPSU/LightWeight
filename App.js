// Import React libraries / functions
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Firebase Configuration
import { FIREBASE_AUTH, FIREBASE_DB } from './FirebaseConfig';

// Import Screens
import LoginScreen from './Screens/LoginScreen';
import HomePage from './Screens/HomeScreen';
import WorkoutsPage from './Screens/WorkoutScreen';
import ActivityPage from './Screens/ActivityScreen';

///////////////////////////////////////////////////////////////////////

// Create a TabBar at bottom of screen
const Tab = createBottomTabNavigator();

// Main Function to start app
export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Workout" component={WorkoutsPage} />
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Activity" component={ActivityPage} />
        </Tab.Navigator>
    </NavigationContainer>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20, // Space for the rounded tab bar
    backgroundColor: '#f8f8f8', // Background color outside the tab bar
  },
});