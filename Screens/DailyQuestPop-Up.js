import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const DailyQuestPopup = () => {
  	
  	return (
    		<View style={styles.dailyQuestPopup}>
      			<View style={[styles.questsManager, styles.childPosition]}>
        				<View style={[styles.questsManager, styles.childPosition]}>
          					<View style={[styles.dailyQuestsChild, styles.childPosition]} />
          					<View style={styles.questManager}>
            						<View style={styles.bar} />
            						<View style={styles.questsHeader}>
              							<Text style={[ styles.textTypo]}>Quests</Text>
            						</View>
          					</View>
        				</View>
        				<View style={[styles.groupParent, styles.groupPosition]}>
          					<View style={styles.ellipseParent}>
            						<Image style={[styles.groupChild, styles.childPosition]} resizeMode="cover" source={require('./Assets/DailyQuestPop-Up/Ellipse1.png')} />
            						<Text style={styles.text1}>1</Text>
          					</View>
          					<Text style={styles.greetARandomPosition}>Greet a random Person</Text>
        				</View>
        				<View style={styles.groupContainer}>
          					<View style={styles.ellipseParent}>
            						<Image style={[styles.groupChild, styles.childPosition]} resizeMode="cover" source={require('./Assets/DailyQuestPop-Up/CheckMark.png')} />
            						<View style={styles.checkMark}>
              							<View style={[styles.checkMarkChild, styles.checkBg]} />
              							<View style={[styles.checkMarkItem, styles.checkBg]} />
            						</View>
          					</View>
          					<Text style={[styles.complete30Jumping, styles.greetARandomPosition]}>Complete 30 Jumping Jacks under a minute</Text>
        				</View>
        				<View style={[styles.groupView, styles.groupPosition]}>
          					<View style={styles.ellipseParent}>
            						<Image style={[styles.groupChild, styles.childPosition]} resizeMode="cover" source={require('./Assets/DailyQuestPop-Up/Ellipse1.png')} />
            						<Text style={styles.text1}>3</Text>
          					</View>
          					<Text style={styles.greetARandomPosition}>Run up and down some stairs</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	childPosition: {
    		bottom: "0%",
    		height: "100%",
    		left: "0%",
    		top: "0%",
    		position: "absolute"
  	},
  	textTypo: {
    		height: 33,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		fontSize: FontSize.size_5xl,
			left: 40,
  	},
  	groupPosition: {
    		left: "4.03%",
    		right: "2.35%",
    		width: "93.62%",
    		height: "12.7%",
    		position: "absolute"
  	},
  	checkBg: {
    		backgroundColor: Color.colorLime,
    		width: "21%",
    		position: "absolute"
  	},
  	greetARandomPosition: {
    		height: 64,
    		justifyContent: "center",
    		display: "flex",
    		left: "18.38%",
    		top: "50%",
    		width: "81.61%",
    		marginTop: -32,
    		lineHeight: 23,
    		fontSize: FontSize.size_lg,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		letterSpacing: 0,
    		alignItems: "center",
    		position: "absolute"
  	},
  	dailyQuestsChild: {
    		width: "99.9%",
    		right: "0.1%",
    		borderRadius: 10,
    		backgroundColor: "#000",
    		borderStyle: "solid",
    		borderColor: Color.colorWhite,
    		borderWidth: 5,
    		left: "0%",
    		bottom: "0%",
    		height: "100%"
  	},
  	bar: {
    		height: "3.66%",
    		marginLeft: -114.58,
    		top: "96.34%",
    		borderRadius: 5,
    		backgroundColor: "#d9d9d9",
    		width: 229,
    		left: "50%",
    		bottom: "0%",
    		position: "absolute"
  	},
  	quests: {
    		width: 250
  	},
  	questsHeader: {
    		height: "67.44%",
    		bottom: "32.56%",
    		flexDirection: "row",
    		justifyContent: "flex-end",
    		paddingHorizontal: 20,
    		paddingVertical: 0,
    		gap: 5,
    		alignItems: "center",
    		width: 298,
    		left: "50%",
    		marginLeft: -149,
    		top: "0%",
    		position: "relative"
  	},
  	questManager: {
    		height: "10.3%",
    		top: "3.33%",
    		bottom: "86.37%",
    		width: 298,
    		marginLeft: -149,
    		left: "50%",
    		position: "absolute"
  	},
  	questsManager: {
    		left: "0%",
    		right: "0%",
    		bottom: "0%",
    		height: "100%",
    		width: "100%"
  	},
  	groupChild: {
    		maxWidth: "100%",
    		overflow: "hidden",
    		maxHeight: "100%",
    		left: "0%",
    		right: "0%",
    		bottom: "0%",
    		height: "100%",
    		width: "100%"
  	},
  	text1: {
    		height: "38%",
    		width: "63.94%",
    		top: "32%",
    		left: "18%",
    		lineHeight: 23,
    		fontSize: FontSize.size_lg,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		letterSpacing: 0,
    		position: "absolute"
  	},
  	ellipseParent: {
    		height: "78.13%",
    		width: "18.39%",
    		top: "10.94%",
    		right: "81.61%",
    		bottom: "10.94%",
    		left: "0%",
    		position: "absolute"
  	},
  	groupParent: {
    		top: "21.39%",
    		bottom: "65.9%"
  	},
  	checkMarkChild: {
    		height: "67.67%",
    		top: "51.65%",
    		right: "79%",
    		bottom: "-19.32%",
    		transform: [
      			{
        				rotate: "-45deg"
      			}
    		],
    		left: "0%"
  	},
  	checkMarkItem: {
    		height: "114.22%",
    		right: "-6.2%",
    		bottom: "-14.22%",
    		left: "85.2%",
    		transform: [
      			{
        				rotate: "45deg"
      			}
    		],
    		top: "0%",
    		width: "21%"
  	},
  	checkMark: {
    		height: "46.4%",
    		width: "58.48%",
    		top: "26%",
    		right: "20.08%",
    		bottom: "27.6%",
    		left: "21.44%",
    		position: "absolute"
  	},
  	complete30Jumping: {
    		opacity: 0.5
  	},
  	groupContainer: {
    		top: "40.25%",
    		right: "3.36%",
    		bottom: "47.05%",
    		left: "3.02%",
    		width: "93.62%",
    		height: "12.7%",
    		position: "absolute"
  	},
  	groupView: {
    		top: "60.1%",
    		bottom: "27.2%"
  	},
  	dailyQuestPopup: {
    		flex: 1,
    		height: 504,
    		width: "100%",
			transform: [{ scale: 0.7 }]
  	}
});

export default DailyQuestPopup;
