import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpPage = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  return (
    <View style={styles.signuppage}>
      <View style={[styles.header]}>
        <View style={styles.bar} />
        <View style={[styles.header1, styles.headerPosition]}>
          <Text style={styles.login}>Sign Up</Text>
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
            onChangeText={(text) => setUsername(text)}
            placeholder=" Username"
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
        <View style={[styles.Layout1]}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder=" Confirm Password"
            style={[styles.passwordTextbox]}
          />
        </View>
        <View style={[styles.loginButtonContainer]}>
          <View style={[styles.loginButton]} />
          <Button title="Create Account" style={styles.loginText} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 430,
    left: 100,
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
    top: 250,
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
    top: 314,
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
    top: 314,
    width: 145,
    height: 35,
    position: "absolute",
  },
  loginBox: {
    top: 80,
    left: 25,
    height: 476,
    width: 348,
    position: "relative",
  },
  signuppage: {
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
});

export default SignUpPage;
