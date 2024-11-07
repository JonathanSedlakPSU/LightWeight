import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const LoginPage = () => {
  	
  	return (
    		<View style={styles.loginPage}>
      			<View style={[styles.header, styles.headerPosition]}>
        				<View style={styles.bar} />
        				<View style={[styles.header1, styles.headerPosition]}>
          					<Text style={styles.login}>Login</Text>
        				</View>
      			</View>
      			<View style={[styles.loginBox, styles.loginLayout]}>
        				<Image style={[styles.loginBoxContainer, styles.passwordTextboxPosition]} resizeMode="cover" source="Login Box Container.png" />
        				<View style={[styles.passwordTextField, styles.textLayout]}>
          					<View style={[styles.passwordTextbox, styles.passwordTextboxPosition]} />
          					<Text style={[styles.passwordPretext, styles.textTypo1]}>Password</Text>
        				</View>
        				<View style={[styles.usernameTextField, styles.textLayout]}>
          					<View style={[styles.passwordTextbox, styles.passwordTextboxPosition]} />
          					<Text style={[styles.passwordPretext, styles.textTypo1]}>Username or Email</Text>
        				</View>
        				<Text style={[styles.forgotPassword, styles.signUpPagePosition]}>Forgot Password?</Text>
          					<Text style={[styles.signUpPage, styles.signUpPagePosition]}>Sign Up</Text>
          					<Text style={[styles.ssoTextField, styles.textTypo1]}>SSO Options</Text>
          					<View style={[styles.loginButtonContainer, styles.containerLayout]}>
            						<View style={[styles.loginButton, styles.buttonPosition]} />
            						<Text style={[styles.loginText, styles.textTypo1]}>Login</Text>
          					</View>
          					<View style={[styles.facebookSsoContainer, styles.ssoContainerPosition]}>
            						<View style={[styles.facebookButton, styles.buttonPosition]} />
            						<Text style={[styles.facebookText, styles.textTypo]}>Facebook</Text>
          					</View>
          					<View style={[styles.googleSsoContainer, styles.ssoContainerPosition]}>
            						<View style={[styles.googleButton, styles.buttonPosition]} />
            						<Text style={[styles.googleText, styles.textTypo]}>Google</Text>
          					</View>
          					</View>
          					<View style={[styles.googleSsoContainer1, styles.containerLayout]}>
            						<View style={[styles.googleButton, styles.buttonPosition]} />
            						<Text style={[styles.googleText, styles.textTypo]}>Google</Text>
          					</View>
          					</View>);
        				};
        				
        				const styles = StyleSheet.create({
          					headerPosition: {
            						width: 430,
            						left: 0,
            						position: "absolute"
          					},
          					loginLayout: {
            						height: 476,
            						width: 348
          					},
          					passwordTextboxPosition: {
            						borderRadius: Border.br_3xs,
            						left: 0,
            						position: "absolute"
          					},
          					textLayout: {
            						height: 30,
            						width: 300,
            						left: 24,
            						position: "absolute"
          					},
          					textTypo1: {
            						fontSize: FontSize.size_xl,
            						textAlign: "center",
            						fontFamily: FontFamily.interBold,
            						fontWeight: "700",
            						lineHeight: 30,
            						letterSpacing: 0,
            						position: "absolute"
          					},
          					signUpPagePosition: {
            						top: 122,
            						fontSize: FontSize.size_xl,
            						height: 25,
            						textAlign: "center",
            						color: Color.colorWhite,
            						lineHeight: 30,
            						letterSpacing: 0,
            						position: "absolute"
          					},
          					containerLayout: {
            						height: 35,
            						position: "absolute"
          					},
          					buttonPosition: {
            						borderRadius: Border.br_xl,
            						height: 35,
            						top: 0,
            						left: 0,
            						position: "absolute"
          					},
          					ssoContainerPosition: {
            						top: 314,
            						height: 35,
            						width: 125,
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
            						lineHeight: 30,
            						letterSpacing: 0,
            						color: Color.colorWhite,
            						fontFamily: FontFamily.interBold,
            						fontWeight: "700"
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
            						height: 476,
            						width: 348,
            						top: 0
          					},
          					passwordTextbox: {
            						top: 2,
            						backgroundColor: Color.colorWhite,
            						height: 25,
            						width: 300
          					},
          					passwordPretext: {
            						left: 7,
            						color: Color.colorDarkgray,
            						top: 0
          					},
          					passwordTextField: {
            						top: 80
          					},
          					usernameTextField: {
            						top: 33
          					},
          					forgotPassword: {
            						width: 210,
            						fontFamily: FontFamily.interBold,
            						fontWeight: "700",
            						top: 122,
            						left: 0
          					},
          					signUpPage: {
            						right: 0,
            						fontStyle: "italic",
            						fontWeight: "500",
            						fontFamily: FontFamily.interMedium,
            						width: 125
          					},
          					ssoTextField: {
            						top: 268,
            						left: 56,
            						width: 235,
            						height: 25,
            						color: Color.colorWhite,
            						fontSize: FontSize.size_xl
          					},
          					loginButton: {
            						backgroundColor: Color.orange,
            						width: 300
          					},
          					loginText: {
            						left: 123,
            						color: Color.colorWhite,
            						fontSize: FontSize.size_xl,
            						top: 0
          					},
          					loginButtonContainer: {
            						top: 187,
            						left: 22,
            						width: 300
          					},
          					facebookButton: {
            						backgroundColor: "#0095ff",
            						width: 125
          					},
          					facebookText: {
            						left: 16
          					},
          					facebookSsoContainer: {
            						left: 24,
            						top: 314
          					},
          					googleButton: {
            						backgroundColor: Color.colorLimegreen,
            						width: 125
          					},
          					googleText: {
            						left: 29
          					},
          					googleSsoContainer: {
            						left: 186
          					},
          					loginBox: {
            						top: 133,
            						left: 41,
            						position: "absolute"
          					},
          					googleSsoContainer1: {
            						top: 447,
            						left: 227,
            						width: 125
          					},
          					loginPage: {
            						backgroundColor: "#1c0101",
            						flex: 1,
            						width: "100%",
            						height: 932,
            						overflow: "hidden"
          					}
        				});
        				
        				export default LoginPage;
        				