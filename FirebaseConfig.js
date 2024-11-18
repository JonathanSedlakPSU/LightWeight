// Import Firebase functions
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithCredential
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2U4_yOGa1iLk9VA9fWVTzxRKDGbBX7Ec",
  authDomain: "fir-project1-6db74.firebaseapp.com",
  projectId: "fir-project1-6db74",
  storageBucket: "fir-project1-6db74.firebasestorage.app",
  messagingSenderId: "137780388240",
  appId: "1:137780388240:web:9013af8737ac39a3031315",
};

// Initialize Firebase and Firestore
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const FIREBASE_DB = getFirestore(FIREBASE_APP);


async function facebookSignin() {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    const data = await AccessToken.getCurrentAccessToken();
   
    const facebookCredential = FacebookAuthProvider.credential(
      data.accessToken
    );
    await signInWithCredential(FIREBASE_AUTH, facebookCredential);


    /** 
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${data.accessToken}&fields=id,name,email`
    );

    //returns a json with the requested fields
    const profile = await response.json();



    await setDoc(doc(FIREBASE_DB, "Users"), {
      Name: profile.name,
      Email: profile.email,
      Username: "",
      level: 1,
      strength: 0,
      speed: 0,
      stamina: 0,
      upperBody: 0,
      lowerBody: 0,
      calories: 0,
    });

    **/
    console.log("User added!");
  } catch (e) {
    
  }
}

// Function to sign in a user with email and password
async function signIn ()  {
  try {
    //get the response from the firebase
      await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    //if the response is successful, log the response
    navigation.navigate("Home");
  } catch (e) {
    //if there is an error, alert the user
    alert(e.message);
  } 
}

// Function to add a user to Firestore
// Function to add a new user document to Firestore
async function addUser(email, password, firstName, lastName, username) {
  try {
    const response = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );

    await setDoc(doc(FIREBASE_DB, "/Users", response.user.uid), {
      FirstName: firstName,
      LastName: lastName,
      Username: username,
      level: 1,
      strength: 0,
      speed: 0,
      stamina: 0,
      upperBody: 0,
      lowerBody: 0,
      calories: 0,
    });
    console.log("User added!");
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}

export { FIREBASE_AUTH, FIREBASE_DB, addUser, facebookSignin, signIn };
