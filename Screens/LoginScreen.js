import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";
import {doc, getDoc, setDoc} from "firebase/firestore";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { signInWithCredential, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
const LoginPage = () => {
  // Variables for saving useStates
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();
  async function googleSignin() {
    GoogleSignin.configure({
      webClientId:
        "137780388240-trbugevp7c2spgu8h6upqt6qkb103puk.apps.googleusercontent.com",
    });
    // Get the user info
    const userInfo = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(
      userInfo.data.idToken
    );
    const userCredential = await signInWithCredential(
      FIREBASE_AUTH,
      googleCredential
    );
    // Check if user already exists in Firestore
    const userDocRef = doc(FIREBASE_DB, "Users", userCredential.user.uid);
    const userDoc = await getDoc(userDocRef);

    // If user does not exist, add user to Firestore
    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        Username: userInfo.data.user.name,
        level: 1,
        strength: 0,
        speed: 0,
        stamina: 0,
        upperBody: 0,
        lowerBody: 0,
        calories: 0,
      });
      
      console.log("User added!");
    } 
      navigation.navigate("Home", { userId: userCredential.user.uid });
  }

  // Function to sign in a user with email and password
  async function signIn() {
    try {
      // Get the response from Firebase
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("User signed in!");

      // Navigate to Home screen with user ID
      navigation.navigate("Home", { userId: userCredential.user.uid });
    } catch (e) {
      // If there is an error, alert the user
      alert(e.message);
    }
  }

  return (
    <View style={styles.loginpage}>
      
      {/* Login */}
      <View style={[styles.header]}>
        <View style={styles.bar} />
        <View style={[styles.header1, styles.headerPosition]}>
          <Text style={styles.login}>Login</Text>
        </View>
      </View>
      <View style={styles.loginBox}>
        <View style={[styles.outterLayer]} />

        {/* Email */}
        <View style={[styles.Layout1]}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder=" Email"
            style={[styles.passwordTextbox]}
          />
        </View>

        {/* Password */}
        <View style={[styles.Layout1]}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder=" Password"
            style={[styles.passwordTextbox]}
            secureTextEntry={true}
          />
        </View>

        {/* Forgot Password */}
        <Text style={[styles.forgotPassword, styles.loginPagePosition]}>
          Forgot Password?
        </Text>

        {/* Sign Up Button*/}
        <TouchableOpacity
          style={[styles.loginPage, styles.loginPagePosition]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={[styles.loginPage, styles.signUpText]}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Button*/}
        <View style={[styles.loginButtonContainer]}>
          <TouchableOpacity title="Login" style={[styles.loginButton]} onPress={signIn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity> 
          <Text style={styles.loginText2}>Sign in with</Text>
        </View>
       
       {/* Google Button*/}
        <View style={[styles.googleSsoContainer]}>
          <TouchableOpacity style={[styles.googleButton]} onPress={googleSignin}>
            <View style={styles.googleButtonContent}>
              <FontAwesome name="google" size={24} color="white" />
              <Text style={styles.googleText}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

{/* StyleSheet */}
const styles = StyleSheet.create({
  headerPosition: {
    width: 430,
    left: 115,
    position: "relative",
  },
  Layout1: {
    height: 30,
    width: 300,
    position: "relative",
    top: -370,
    left: 24,
    marginTop: 15,
  },
  passwordTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 0,
    top: -30,
    position: "relative",
    width: 260,
    left: 10,
    color: Color.colorDarkgray,
  },
  googleContainerLayout: {
    width: 145,
    height: 35,
    position: "absolute",
    backgroundColor: Color.colorBackground
  },
  textTypo: {
    top: 3,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 0,
    position: "absolute",
  },
  bar: {
    top: 63,
    left: 20,
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
    width: 350,
    height: 2,
    position: "relative",
  },
  login: {
    fontSize: 24,
    height: 40,
    textAlign: "center",
    alignItems: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 0,
    position: "relative",
  },
  header1: {
    height: 63,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 10,
    top: 0,
  },
  header: {
    top: 42,
    height: 65,
  },
  loginBoxContainer: {
    borderRadius: Border.br_3xs,
    height: 476,
    width: 348,
    top: 0,
    left: 0,
    position: "absolute",
  },
  passwordTextbox: {
    top: 2,
    height: 25,
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "relative",
  },
  passwordPretext1: {
    left: -80,
  },
  passwordTextField1: {
    top: 127,
    left: 21,
  },
  passwordTextbox2: {
    top: 0,
  },
  passwordPretext2: {
    width: 300,
    left: -25,
    color: Color.colorDarkgray,
  },
  passwordTextField2: {
    top: 176,
    left: 21,
  },
  usernamePretext: {
    width: 70,
    left: 5,
    color: Color.colorDarkgray,
  },
  usernameTextField: {
    top: 33,
    left: 24,
  },
  loginButton: {
    backgroundColor: Color.theme1,
    height: 35,
    width: 300,
    position: "absolute",
    borderRadius: Border.br_xl,
    top: -30,
    left: 0,
  },
  loginText: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 0,
    top: 0,
    position: "relative",
  },
   loginText2: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 0,
    top: 35,
    position: "relative",
  },
  loginButtonContainer: {
    top: 200,
    left: 21,
    height: 35,
    width: 300,
    position: "absolute",
  },
  
  googleButton: {
    padding: 10,
    backgroundColor: Color.theme1,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50, 

  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  googleText: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 30,
    top: 0,
    letterSpacing: 0,
    marginLeft: 10,
  },
  googleSsoContainer: {
    left: 27,
    top: 270,
    width: 290,
    height: 35,
    position: "absolute",
  },
  loginBox: {
    top: 80,
    left: 25,
    height: 466,
    width: 348,
    position: "relative",
  },
  loginpage: {
    backgroundColor: Color.colorBackground,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "visible",
    position: "relative",
  },
  outterLayer: {
    borderStyle: "solid",
    borderColor: Color.theme1,
    borderWidth: 4,
    height: 398,
    borderRadius: Border.br_3xs,
    marginLeft: -181.5,
    top: 0,
    width: 360,
    left: "50%",
    position: "relative",
  },
  forgotPassword: {
    width: 210,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 122,
    left: 10,
  },
  loginPagePosition: {
    top: 122,
    fontSize: 15,
    height: 35,
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 30,
    letterSpacing: 0,
    position: "absolute",
  },
  loginPage: {
    right: 10,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 125,
  },

  signUpText: {
    // Styles for Text inside TouchableOpacity
    color: Color.colorWhite,
    fontSize: 16,
    marginLeft: 40,
    posiiton: "relative",
    marginTop: 3,
  },
});

export default LoginPage;
