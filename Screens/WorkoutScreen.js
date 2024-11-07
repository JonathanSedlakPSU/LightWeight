import * as React from "react";
import {StyleSheet, View, Text, Image, ScrollView} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const WorkoutsPage = () => {
  	
  	return (
    		<View style={styles.workoutsPage}>
      			<View style={[styles.upperBodyParent, styles.scaledContent]}>
        				<View style={styles.upperBody}>
          					<View style={[styles.push, styles.pushLayout]}>
            						<View style={styles.pushChild} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Push</Text>
              							<Image style={[styles.pushIcon, styles.iconLayout]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Push.png')}/>
            						</View>
          					</View>
          					<View style={[styles.pull, styles.pushLayout]}>
            						<View style={styles.pushChild} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Pull</Text>
              							<Image style={[styles.pullIcon, styles.iconLayout]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Pull.png')} />
            						</View>
          					</View>
          					<View style={[styles.ub, styles.ubLayout]}>
            						<View style={[styles.ubChild, styles.ubItemBorder]} />
            						<View style={[styles.profileLevel2, styles.profilePosition]}>
              							<Text style={[styles.upperBody1, styles.ubLayout1]}>Upper Body</Text>
            						</View>
          					</View>
        				</View>
        				<View style={styles.upperBody}>
          					<View style={[styles.core, styles.corePosition]}>
            						<View style={[styles.coreChild, styles.childPosition]} />
            						<View style={[styles.profileLevel3, styles.pushLayout]}>
              							<Image style={[styles.coreIcon, styles.iconPosition]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Core.png')} />
              							<Text style={[styles.push1, styles.bodyTypo]}>Core</Text>
            						</View>
          					</View>
          					<View style={[styles.legs, styles.corePosition]}>
            						<View style={styles.pushChild} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Image style={[styles.legsIcon, styles.iconPosition]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Legs.png')} />
              							<Text style={[styles.push1, styles.bodyTypo]}>Legs</Text>
            						</View>
          					</View>
          					<View style={[styles.ub1, styles.ub1Position]}>
            						<View style={[styles.ubItem, styles.ubItemBorder]} />
            						<View style={[styles.profileLevel5, styles.ub1Position]}>
              							<Text style={[styles.lowerBody1, styles.ub1Position]}>Lower Body</Text>
            						</View>
          					</View>
        				</View>
        				<View style={styles.cardioSwarmUps}>
          					<View style={[styles.cardio, styles.pushLayout]}>
            						<View style={[styles.cardioChild, styles.childPosition]} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Cardio</Text>
              							<Image style={styles.cardioIcon} resizeMode="cover" source={require('./Assets/WorkoutScreen/Cardio.png')} />
            						</View>
          					</View>
          					<View style={[styles.warmUps, styles.pushLayout]}>
            						<View style={[styles.cardioChild, styles.childPosition]} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Warm-Ups</Text>
              							<Image style={styles.warmUpsIcon} resizeMode="cover" source={require('./Assets/WorkoutScreen/Warm-Ups.png')} />
            						</View>
          					</View>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	pushLayout: {
    		width: 298,
    		position: "absolute"
  	},
  	push1Layout: {
    		height: 145,
    		left: 0,
    		width: 298,
    		position: "absolute"
  	},
  	bodyTypo: {
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		fontSize: FontSize.size_xl,
    		top: 0
  	},
  	iconLayout: {
    		height: 80,
    		width: 134,
    		position: "absolute"
  	},
  	ubLayout: {
    		height: 43,
    		top: 18
  	},
  	ubItemBorder: {
    		height: 42,
    		borderColor: Color.colorBlack,
    		backgroundColor: Color.colorBlack,
    		borderRadius: Border.br_3xs,
    		borderWidth: 2,
    		borderStyle: "solid",
    		top: 0,
    		position: "absolute"
  	},
  	profilePosition: {
    		top: 2,
    		height: 41
  	},
  	ubLayout1: {
    		width: 352,
    		position: "relative"
  	},
  	corePosition: {
    		top: 75,
    		width: 298,
    		position: "absolute"
  	},
  	childPosition: {
    		left: 70,
    		height: 148,
    		width: 158,
    		borderColor: Color.colorRed,
    		borderStyle: "solid",
    		top: 0,
    		position: "relative"
  	},
  	iconPosition: {
    		top: 56,
    		position: "relative"
  	},
  	ub1Position: {
    		width: 358,
    		left: 0,
    		position: "relative"
  	},
  	pushChild: {
    		left: 63,
    		height: 148,
    		width: 158,
    		borderWidth: 2,
    		borderColor: Color.colorRed,
    		borderStyle: "solid",
    		top: 0,
    		position: "relative"
  	},
  	push1: {
    		height: 145,
    		left: 0,
    		width: 298,
    		position: "absolute",
			
  	},
  	pushIcon: {
    		left: 75,
    		top: 48
  	},
  	profileLevel: {
    		top: 8
  	},
  	push: {
    		left: -55,
    		height: 153,
    		top: 73,
    		width: 298
  	},
  	pullIcon: {
    		top: 52,
    		left: 76
  	},
  	pull: {
    		left: 125,
    		height: 153,
    		top: 73,
    		width: 298
  	},
  	ubChild: {
    		left: 83,
    		width: 187
  	},
  	upperBody1: {
    		height: 41,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		fontSize: FontSize.size_5xl,
    		top: 0,
    		left: 0
  	},
  	profileLevel2: {
    		height: 41,
    		width: 352,
    		position: "absolute",
    		left: 0
  	},
  	ub: {
    		left: 6,
    		width: 352,
    		position: "absolute"
  	},
  	upperBody: {
    		borderRadius: Border.br_mini,
    		width: 363,
    		height: 237,
    		borderWidth: 4,
    		borderColor: Color.colorRed,
    		borderStyle: "solid"
  	},
  	coreChild: {
    		left: 70,
    		borderWidth: 2
  	},
  	coreIcon: {
    		left: 79,
    		width: 139,
    		height: 74
  	},
  	profileLevel3: {
    		height: 130,
    		left: 0,
    		top: 8
  	},
  	core: {
    		left: 120,
    		height: 148
  	},
  	legsIcon: {
    		left: 72,
    		width: 141,
    		height: 75
  	},
  	legs: {
    		left: -55,
    		height: 153
  	},
  	ubItem: {
    		left: 84,
    		width: 190
  	},
  	lowerBody1: {
    		height: 41,
    		textAlign: "center",
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 30,
    		letterSpacing: 0,
    		fontSize: FontSize.size_5xl,
    		top: 0
  	},
  	profileLevel5: {
    		height: 41,
    		top: 2
  	},
  	ub1: {
    		height: 43,
    		top: 18
  	},
  	cardioChild: {
    		borderRadius: Border.br_3xs,
    		left: 70,
    		borderWidth: 4
  	},
  	cardioIcon: {
    		top: 37,
    		left: 109,
    		width: 80,
    		height: 89,
    		position: "absolute"
  	},
  	cardio: {
    		left: 0,
    		height: 153,
    		top: 0
  	},
  	warmUpsIcon: {
    		left: 100,
    		width: 98,
    		height: 67,
    		top: 48,
    		position: "absolute"
  	},
  	warmUps: {
    		left: 188,
    		height: 153,
    		top: 0
  	},
  	cardioSwarmUps: {
    		width: 486,
    		height: 153
  	},
  	upperBodyParent: {
    		left: 0,
    		alignItems: "center",
    		justifyContent: "center",
    		paddingHorizontal: 10,
    		paddingVertical: 30,
    		gap: 19,
    		top: 0,
    		position: "relative"
  	},
  	workoutsPage: {
    		backgroundColor: "#1c0101",
    		flex: 1,
    		height: 880,
    		overflow: "visible",
			alignItems: "center",
  	},
	
	 scaledContent: {
    		transform: [{ scale: 0.9 }],  // Adjust scale factor as needed
  	},
});

export default WorkoutsPage;
