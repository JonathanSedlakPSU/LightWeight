import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();
  async function googleSignin() {
    GoogleSignin.configure({
      webClientId:
        "137780388240-trbugevp7c2spgu8h6upqt6qkb103puk.apps.googleusercontent.com",
    });

    try {
      // Get the user info
      const userInfo = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(
        userInfo.data?.idToken
      );
      // Sign in with credential from the Google user. Creates a new user if none exists.

      // for database purposes
      const userCredential = await signInWithCredential(
        FIREBASE_AUTH,
        googleCredential
      );

      // Check if user already exists in Firestore before adding
      const userDocRef = doc(FIREBASE_DB, "Users", userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);

      // If user does not exist, add user to Firestore
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          Username: userInfo.data.name,
          level: 1,
          strength: 0,
          speed: 0,
          stamina: 0,
          upperBody: 0,
          lowerBody: 0,
          calories: 0,
        });
      }
      navigation.navigate("Home", { id: userCredential.user.uid });
      console.log("User added!");
    } catch (e) {
      alert(e.message);
    }
  }

  // Function to sign in a user with email and password
  async function signIn(username, email, password) {
    try {
      // Get the response from Firebase
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("User signed in!");

      // Navigate to Home screen with user ID
      navigation.navigate("Home", { id: userCredential.user.uid });
    } catch (e) {
      // If there is an error, alert the user
      alert(e.message);
    }
  }

  return (
    <View style={styles.loginpage}>
      <View style={[styles.header]}>
        <View style={styles.bar} />
        <View style={[styles.header1, styles.headerPosition]}>
          <Text style={styles.login}>Login</Text>
        </View>
      </View>
      <View style={styles.loginBox}>
        <View style={[styles.outterLayer]} />
        <View style={[styles.Layout1]}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder=" Email"
            style={[styles.passwordTextbox]}
          />
        </View>
        <View style={[styles.Layout1]}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder=" Password"
            style={[styles.passwordTextbox]}
          />
        </View>

        <Text style={[styles.forgotPassword, styles.loginPagePosition]}>
          Forgot Password?
        </Text>
        <TouchableOpacity
          style={[styles.loginPage, styles.loginPagePosition]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={[styles.loginPage, styles.signUpText]}>Sign Up</Text>
        </TouchableOpacity>
        <View style={[styles.loginButtonContainer]}>
          <Button title="Login" style={[styles.loginButton]} />
          <Text style={styles.loginText}>Sign in with</Text>
        </View>
        <View style={[styles.googleSsoContainer]}>
          <Button
            title="Google"
            style={[styles.googleButton]}
            onPress={googleSignin}
          />
        </View>
      </View>
    </View>
  );
};

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
    backgroundColor: Color.orange,
    height: 35,
    width: 300,
    position: "absolute",
    borderRadius: Border.br_xl,
    top: 0,
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
    position: "realtive",
  },
  loginButtonContainer: {
    top: 200,
    left: 21,
    height: 35,
    width: 300,
    position: "absolute",
  },
  facebookButton: {
    backgroundColor: "#0095ff",
    borderRadius: Border.br_xl,
    top: 5,
    left: 0,
    width: 145,
    height: 35,
    position: "relative",
  },
  facebookText: {
    left: 12,
  },
  facebookSsoContainer: {
    top: 270,
    width: 125,
    left: 18,
    width: 145,
    height: 35,
    position: "absolute",
  },
  googleButton: {
    backgroundColor: "#09c312",
    borderRadius: Border.br_xl,
    top: 5,
    left: 0,
    width: 145,
    height: 35,
    position: "relative",
  },
  googleText: {
    left: 29,
  },
  googleSsoContainer: {
    left: 176,
    top: 270,
    width: 145,
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
    backgroundColor: "#1c0101",
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
