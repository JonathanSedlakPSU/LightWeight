// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2U4_yOGa1iLk9VA9fWVTzxRKDGbBX7Ec",
  authDomain: "fir-project1-6db74.firebaseapp.com",
  projectId: "fir-project1-6db74",
  storageBucket: "fir-project1-6db74.appspot.com",
  messagingSenderId: "137780388240",
  appId: "1:137780388240:web:9013af8737ac39a3031315"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
