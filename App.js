import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Import Firebase functions
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2U4_yOGa1iLk9VA9fWVTzxRKDGbBX7Ec",
  authDomain: "fir-project1-6db74.firebaseapp.com",
  projectId: "fir-project1-6db74",
  storageBucket: "fir-project1-6db74.appspot.com",
  messagingSenderId: "137780388240",
  appId: "1:137780388240:web:9013af8737ac39a3031315"
};

// Initialize Firebase and Firestore
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Function to add a new user document to Firestore
async function addUser(userId, firstName, lastName, username) {
  try {
    await setDoc(doc(FIREBASE_DB, "Users", userId), {
      FirstName: firstName,
      LastName: lastName,
      Username: username
    });
    console.log("User added!");
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}
///////////////////////////////////////////////////////////////////////
// Main Function to start app

export default function App() {
  useEffect(() => {
    // Call the addUser function here if you want it to run on mount
    addUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Add User" onPress={addUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
