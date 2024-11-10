import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ActivityPage = () => {
  	
  	return (
    		<View style={styles.activityPage}>
      			<View style={[styles.goalsParent,styles.scaledContent]}>
        				<View style={[styles.goals, styles.goalsLayout]}>
          					<View style={styles.goalsChild} />
          					<Image style={styles.image1Icon} resizeMode="cover" source={require('./Assets/ActivityScreen/Goal.png')} />
          					<Text style={[styles.goals1, styles.goals1Layout, styles.scaledContent]}>Goals</Text>
        				</View>
        				<View style={styles.goalsLayout}>
          					<View style={styles.goalsChild} />
          					<View style={styles.logCalories1}>
            						<View style={[styles.plus, styles.plusLayout, ]}>
              							<Image style={[styles.circleIcon, styles.plusLayout]} resizeMode="cover" source={require('./Assets/ActivityScreen/Plus.png')} />
              							
            						</View>
            						<Text style={[styles.logCalories2, styles.calTypo, styles.scaledContent1]}>Log Calories</Text>
            						<Text style={[styles.cal, styles.calTypo, styles.scaledContent1]}>1,525 cal</Text>
          					</View>
        				</View>
        				<View style={styles.activityLevels}>
          					<View style={[styles.outterLayer, styles.outterLayerPosition]} />
          					<View style={styles.days}>
            						<Text style={[styles.mon, styles.monTypo]}>Mon.</Text>
            						<Text style={[styles.tues, styles.monTypo]}>Tues.</Text>
            						<Text style={[styles.wed, styles.monTypo]}>Wed.</Text>
            						<Text style={[styles.thur, styles.monTypo]}>Thur.</Text>
            						<Text style={[styles.fri, styles.monTypo]}>Fri.</Text>
            						<Text style={[styles.sat, styles.monTypo]}>Sat.</Text>
            						<Text style={[styles.sun, styles.monTypo]}>Sun.</Text>
          					</View>
          					<View style={styles.activityLevelsChild} />
          					<Text style={[styles.activityLevels1, styles.outterLayerPosition]}>Activity Levels</Text>
          					<View style={styles.rectangles}>
            						<View style={[styles.rectanglesChild, styles.rectanglesChildLayout]} />
            						<View style={[styles.rectanglesItem, styles.rectanglesChildLayout]} />
            						<View style={[styles.rectanglesInner, styles.rectanglesChildLayout]} />
            						<View style={[styles.rectangleView, styles.rectanglesChildLayout]} />
            						<View style={[styles.rectanglesChild1, styles.rectanglesChildLayout]} />
            						<View style={[styles.rectanglesChild2, styles.rectanglesChildLayout]} />
            						<View style={[styles.rectanglesChild3, styles.rectanglesChildLayout]} />
          					</View>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	goalsLayout: {
    		height: 123,
    		width: 240
  	},
  	goals1Layout: {
    		height: 33,
    		position: "absolute"
  	},
  	plusLayout: {
    		height: 60,
    		width: 60,
    		top: 0,
    		position: "absolute"
  	},
  	plusBg: {
    		backgroundColor: Color.colorBlack,
    		borderRadius: Border.br_3xs,
    		position: "absolute"
  	},
  	calTypo: {
    		fontSize: FontSize.size_5xl,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 0,
    		letterSpacing: 0
  	},
  	outterLayerPosition: {
    		marginLeft: -181.5,
    		width: 363,
    		left: "50%",
    		position: "absolute"
  	},
  	monTypo: {
    		width: 56,
    		fontSize: FontSize.size_sm,
    		height: 28,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		left: "50%",
    		top: 0,
    		position: "absolute"
  	},
  	rectanglesChildLayout: {
    		width: 21,
    		backgroundColor: Color.theme2,
    		position: "absolute"
  	},
  	goalsChild: {
    		borderRadius: Border.br_6xl,
    		backgroundColor: Color.theme2,
    		left: 0,
    		height: 123,
    		width: 240,
    		top: 0,
    		position: "absolute"
  	},
  	image1Icon: {
    		top: 15,
    		right: 17,
    		width: 100,
    		height: 100,
    		position: "absolute"
  	},
  	goals1: {
    		top: 49,
    		left: 20,
    		fontSize: 32,
    		width: 112,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 33,
    		letterSpacing: 0,
    		height: 33
  	},
  	goals: {
    		overflow: "hidden"
  	},
  	circleIcon: {
    		left: 0
  	},
  	plusChild: {
    		left: 15,
    		width: 10,
    		height: 45,
    		top: 0
  	},
  	plusItem: {
    		top: 28,
    		width: 11,
    		transform: [
      			{
        				rotate: "-90deg"
      			}
    		],
    		height: 39,
    		left: 0
  	},
  	plus1: {
    		top: 8,
    		left: 10,
    		width: 39,
    		height: 45,
    		position: "absolute"
  	},
  	plus: {
    		left: 166
  	},
  	logCalories2: {
    		width: 182,
    		height: 40,
    		position: "absolute",
    		left: 0,
    		top: 0
  	},
  	cal: {
    		top: 36,
    		left: 29,
    		width: 133,
    		height: 35,
    		position: "absolute"
  	},
  	logCalories1: {
    		top: 31,
    		width: 226,
    		height: 62,
    		left: 0,
    		position: "absolute"
  	},
  	outterLayer: {
    		borderStyle: "solid",
    		borderColor: Color.theme1,
    		borderWidth: 4,
    		height: 298,
    		borderRadius: Border.br_3xs,
    		marginLeft: -181.5,
    		top: 0
  	},
  	mon: {
    		marginLeft: -177.5,
    		fontSize: FontSize.size_sm,
  	},
  	tues: {
    		marginLeft: -127.73
  	},
  	wed: {
    		marginLeft: -77.97
  	},
  	thur: {
    		marginLeft: -28.2
  	},
  	fri: {
    		marginLeft: 21.57
  	},
  	sat: {
    		marginLeft: 71.33
  	},
  	sun: {
    		marginLeft: 121.1
  	},
  	days: {
    		top: 265,
    		width: 355,
    		height: 28,
    		marginLeft: -177.5,
    		left: "50%",
    		position: "absolute"
  	},
  	activityLevelsChild: {
    		top: 263,
    		left: 16,
    		borderRadius: 5,
    		backgroundColor: "#d9d9d9",
    		width: 330,
    		height: 2,
    		position: "absolute"
  	},
  	activityLevels1: {
    		top: 6,
    		fontSize: FontSize.size_5xl,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		height: 39
  	},
  	rectanglesChild: {
    		top: 68,
    		height: 84,
    		left: 0
  	},
  	rectanglesItem: {
    		top: 118,
    		left: 50,
    		height: 34
  	},
  	rectanglesInner: {
    		top: 110,
    		left: 100,
    		height: 42
  	},
  	rectangleView: {
    		left: 149,
    		height: 152,
    		top: 0
  	},
  	rectanglesChild1: {
    		top: 141,
    		left: 199,
    		height: 11
  	},
  	rectanglesChild2: {
    		top: 22,
    		left: 247,
    		height: 130
  	},
  	rectanglesChild3: {
    		top: 74,
    		left: 295,
    		height: 78
  	},
  	rectangles: {
    		top: 103,
    		left: 22,
    		width: 316,
    		height: 152,
    		position: "absolute"
  	},
  	activityLevels: {
    		height: 298,
    		width: 363
  	},
  	goalsParent: {
    		marginLeft: -182,
    		alignItems: "center",
    		paddingHorizontal: 0,
    		paddingVertical: 30,
    		gap: 49,
    		width: 363,
    		left: "50%",
    		top: 0,
    		position: "absolute"
  	},
  	activityPage: {
    		backgroundColor: "#1c0101",
    		flex: 1,
    		width: "100%",
    		height: 932,
    		overflow: "hidden"
  	},
     scaledContent: {
      transform: [{ scale: 0.9 }],  // Adjust scale factor as needed
 },
 scaledContent1: {
      transform: [{ scale: 0.8 }],  // Adjust scale factor as needed
 },
});

export default ActivityPage;
