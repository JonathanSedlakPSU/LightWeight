// Import React libraries / functions
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Firbase Configuration
import { FIREBASE_AUTH, FIREBASE_DB } from './FirebaseConfig';

// Import Screens
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import WorkoutScreen from './Screens/WorkoutScreen';
import ActivityScreen from './Screens/ActivityScreen';


///////////////////////////////////////////////////////////////////////

// Create a Home bar tab
const Tab = createBottomTabNavigator();

// Main Function to start app
export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
    <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: 'red', // Active color
            tabBarInactiveTintColor: 'grey', // Inactive color
            tabBarStyle: styles.tabBarStyle, // Custom tab bar style
            headerShown: true, // header for top of page
          }}
        >
          <Tab.Screen name="Workout" component={WorkoutScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Activity" component={ActivityScreen} />
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

  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    height: 60,
    borderRadius: 30, // Rounded edges
    backgroundColor: '#1a1a1a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // Shadow for Android
  },

});