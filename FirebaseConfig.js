// Import Firebase functions
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2U4_yOGa1iLk9VA9fWVTzxRKDGbBX7Ec",
  authDomain: "fir-project1-6db74.firebaseapp.com",
  projectId: "fir-project1-6db74",
  storageBucket: "fir-project1-6db74.firebasestorage.app",
  messagingSenderId: "137780388240",
  appId: "1:137780388240:web:9013af8737ac39a3031315"
};

// Initialize Firebase and Firestore
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, 
  {persistence: getReactNativePersistence(AsyncStorage),});
const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Function to add a user to Firestore
// Function to add a new user document to Firestore
async function addUser(firstName, lastName, username) {
  try {
    await setDoc(doc(FIREBASE_DB, "/Users", username), {
      FirstName: firstName,
      LastName: lastName,
      Username: username
    });
    console.log("User added!");
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}

export {FIREBASE_AUTH, FIREBASE_DB, addUser};