import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpPage = () => {
  	
  	return (
    		<View style={styles.signuppage}>
      			<View style={[styles.header, styles.headerPosition]}>
        				<View style={styles.bar} />
        				<View style={[styles.header1, styles.headerPosition]}>
          					<Text style={styles.login}>Sign Up</Text>
        				</View>
      			</View>
      			<View style={styles.loginBox}>
        				<Image style={styles.loginBoxContainer} resizeMode="cover" source="Login Box Container.png" />
        				<View style={[styles.passwordTextField, styles.passwordLayout1]}>
          					<View style={[styles.passwordTextbox, styles.passwordLayout]} />
          					<Text style={[styles.passwordPretext, styles.passwordTypo]}>Username</Text>
        				</View>
        				<View style={[styles.passwordTextField1, styles.passwordLayout1]}>
          					<View style={[styles.passwordTextbox, styles.passwordLayout]} />
          					<Text style={[styles.passwordPretext1, styles.passwordTypo]}>Password</Text>
        				</View>
        				<View style={[styles.passwordTextField2, styles.passwordLayout1]}>
          					<View style={[styles.passwordTextbox2, styles.passwordLayout]} />
          					<Text style={[styles.passwordPretext2, styles.passwordTypo]}>Confirm Password</Text>
        				</View>
        				<View style={[styles.usernameTextField, styles.passwordLayout1]}>
          					<View style={[styles.passwordTextbox, styles.passwordLayout]} />
          					<Text style={[styles.usernamePretext, styles.passwordTypo]}>Email</Text>
        				</View>
        				<View style={[styles.loginButtonContainer, styles.loginLayout]}>
          					<View style={[styles.loginButton, styles.buttonPosition]} />
          					<Text style={styles.loginText}>Create Account</Text>
        				</View>
        				<View style={[styles.facebookSsoContainer, styles.googleContainerLayout]}>
          					<View style={[styles.facebookButton, styles.googleContainerLayout]} />
          					<Text style={[styles.facebookText, styles.textTypo]}>Facebook</Text>
        				</View>
        				<View style={[styles.googleSsoContainer, styles.googleContainerLayout]}>
          					<View style={[styles.googleButton, styles.googleContainerLayout]} />
          					<Text style={[styles.googleText, styles.textTypo]}>Google</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	headerPosition: {
    		width: 430,
    		left: 0,
    		position: "absolute"
  	},
  	passwordLayout1: {
    		height: 30,
    		width: 300,
    		position: "absolute"
  	},
  	passwordLayout: {
    		height: 25,
    		backgroundColor: Color.colorWhite,
    		width: 300,
    		borderRadius: Border.br_3xs,
    		left: 0,
    		position: "absolute"
  	},
  	passwordTypo: {
    		color: Color.colorDarkgray,
    		fontSize: FontSize.size_xl,
    		textAlign: "center",
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		top: 0,
    		position: "absolute"
  	},
  	loginLayout: {
    		height: 35,
    		width: 300,
    		position: "absolute"
  	},
  	buttonPosition: {
    		borderRadius: Border.br_xl,
    		top: 0,
    		left: 0
  	},
  	googleContainerLayout: {
    		width: 125,
    		height: 35,
    		position: "absolute"
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
    		position: "absolute"
  	},
  	bar: {
    		top: 63,
    		left: 40,
    		borderRadius: 5,
    		backgroundColor: "#d9d9d9",
    		width: 350,
    		height: 2,
    		position: "absolute"
  	},
  	login: {
    		fontSize: 24,
    		width: 115,
    		height: 33,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0
  	},
  	header1: {
    		height: 63,
    		flexDirection: "row",
    		alignItems: "center",
    		justifyContent: "space-between",
    		paddingHorizontal: 40,
    		paddingVertical: 10,
    		top: 0
  	},
  	header: {
    		top: 42,
    		height: 65
  	},
  	loginBoxContainer: {
    		borderRadius: Border.br_3xs,
    		height: 476,
    		width: 348,
    		top: 0,
    		left: 0,
    		position: "absolute"
  	},
  	passwordTextbox: {
    		top: 2
  	},
  	passwordPretext: {
    		width: 110,
    		left: 0,
    		color: Color.colorDarkgray
  	},
  	passwordTextField: {
    		top: 80,
    		left: 24
  	},
  	passwordPretext1: {
    		left: 7
  	},
  	passwordTextField1: {
    		top: 127,
    		left: 21
  	},
  	passwordTextbox2: {
    		top: 0
  	},
  	passwordPretext2: {
    		width: 184,
    		left: 0,
    		color: Color.colorDarkgray
  	},
  	passwordTextField2: {
    		top: 176,
    		left: 21
  	},
  	usernamePretext: {
    		width: 72,
    		left: 0,
    		color: Color.colorDarkgray
  	},
  	usernameTextField: {
    		top: 33,
    		left: 24
  	},
  	loginButton: {
    		backgroundColor: Color.orange,
    		height: 35,
    		width: 300,
    		position: "absolute"
  	},
  	loginText: {
    		left: 75,
    		fontSize: FontSize.size_xl,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		top: 0,
    		position: "absolute"
  	},
  	loginButtonContainer: {
    		top: 218,
    		left: 21
  	},
  	facebookButton: {
    		backgroundColor: "#0095ff",
    		borderRadius: Border.br_xl,
    		top: 0,
    		left: 0
  	},
  	facebookText: {
    		left: 16
  	},
  	facebookSsoContainer: {
    		top: 314,
    		width: 125,
    		left: 24
  	},
  	googleButton: {
    		backgroundColor: "#09c312",
    		borderRadius: Border.br_xl,
    		top: 0,
    		left: 0
  	},
  	googleText: {
    		left: 29
  	},
  	googleSsoContainer: {
    		left: 186,
    		top: 314,
    		width: 125
  	},
  	loginBox: {
    		top: 133,
    		left: 41,
    		height: 476,
    		width: 348,
    		position: "absolute"
  	},
  	signuppage: {
    		backgroundColor: "#1c0101",
    		flex: 1,
    		width: "100%",
    		height: 932,
    		overflow: "hidden"
  	}
});

export default SignUpPage;
