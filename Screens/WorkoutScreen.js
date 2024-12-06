import * as React from "react";
import {StyleSheet, View, Text, Image, ScrollView} from "react-native";
import { Color, FontFamily, FontSize, Border, AlignStyles } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook


// Import Workot Screens
import PushWorkout from "./WorkoutScreens/Push";
import PullWorkout from "./WorkoutScreens/Pull";
import LegWorkout from "./WorkoutScreens/Legs";
import CoreWorkout from "./WorkoutScreens/Core";
import CardioWorkout from "./WorkoutScreens/Cardio";
import WarmUpsWorkout from "./WorkoutScreens/Warm-Ups";
import { TouchableOpacity } from "react-native-gesture-handler";

const WorkoutsPage = () => {
	const navigation = useNavigation();

  	return (
    		<View style={styles.workoutsPage}>
      			<View style={[styles.upperBodyParent, styles.scaledContent]}>
        				<View style={styles.upperBody}>

								{/* Push */}
          					<TouchableOpacity style={[styles.push, styles.pushLayout]} 
								onPress={() => navigation.navigate("Push")}>
            						<View style={styles.pushChild} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Push</Text>
              							<Image style={[styles.pushIcon, styles.iconLayout]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Push.png')}/>
            						</View>
          					</TouchableOpacity>

								{/* Pull */}
          					<TouchableOpacity style={[styles.pull, styles.pushLayout]}
								onPress={() => navigation.navigate("Pull")}>
            						<View style={styles.pushChild} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Pull</Text>
              							<Image style={[styles.pullIcon, styles.iconLayout]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Pull.png')} />
            						</View>
          					</TouchableOpacity>

								{/* Upper Body */}
          					<View style={[styles.ub, styles.ubLayout]}>
            						<View style={[styles.ubChild, styles.ubItemBorder]} />
            						<View style={[styles.profileLevel2, styles.profilePosition]}>
              							<Text style={[styles.upperBody1, styles.ubLayout1]}>Upper Body</Text>
            						</View>
          					</View>
        				</View>


        				<View style={styles.upperBody}>

								{/* Core */}
          					<TouchableOpacity style={[styles.core, styles.corePosition]}
								onPress={() => navigation.navigate("Core")}>
            						<View style={[styles.coreChild, styles.childPosition]} />
            						<View style={[styles.profileLevel3, styles.pushLayout]}>
              							<Image style={[styles.coreIcon, styles.iconPosition]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Core.png')} />
              							<Text style={[styles.push1, styles.bodyTypo]}>Core</Text>
            						</View>
          					</TouchableOpacity>

								{/* Legs */}
          					<TouchableOpacity style={[styles.legs, styles.corePosition]}
								onPress={() => navigation.navigate("Legs")}>
            						<View style={styles.pushChild} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Image style={[styles.legsIcon, styles.iconPosition]} resizeMode="cover" source={require('./Assets/WorkoutScreen/Legs.png')} />
              							<Text style={[styles.push1, styles.bodyTypo]}>Legs</Text>
            						</View>
          					</TouchableOpacity>

								{/* Lower Body */}
          					<View style={[styles.ub1, styles.ub1Position]}>
            						<View style={[styles.ubItem, styles.ubItemBorder]} />
            						<View style={[styles.profileLevel5, styles.ub1Position]}>
              							<Text style={[styles.lowerBody1, styles.ub1Position]}>Lower Body</Text>
            						</View>
          					</View>

        				</View>
        				<View style={styles.cardioSwarmUps}>

								{/* Cardio */}
          					<TouchableOpacity style={[styles.cardio, styles.pushLayout]}
								onPress={() => navigation.navigate("Cardio")}>
            						<View style={[styles.cardioChild, styles.childPosition]} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Cardio</Text>
              							<Image style={styles.cardioIcon} resizeMode="cover" source={require('./Assets/WorkoutScreen/Cardio.png')} />
            						</View>
          					</TouchableOpacity>

								{/* Warm-Ups */}
          					<TouchableOpacity style={[styles.warmUps, styles.pushLayout]}
								onPress={() => navigation.navigate("Warm-Ups")}>
            						<View style={[styles.cardioChild, styles.childPosition]} />
            						<View style={[styles.profileLevel, styles.push1Layout]}>
              							<Text style={[styles.push1, styles.bodyTypo]}>Warm-Ups</Text>
              							<Image style={styles.warmUpsIcon} resizeMode="cover" source={require('./Assets/WorkoutScreen/Warm-Ups.png')} />
            						</View>
          					</TouchableOpacity>

        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	pushLayout: {
    		width: AlignStyles.workoutButtonWidth,
    		position: "absolute"
  	},
  	push1Layout: {
    		height: AlignStyles.workoutButtonHeight - 8,
    		left: 0,
    		width: AlignStyles.workoutButtonWidth,
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
    		top: AlignStyles.workoutButtonTop
  	},
  	iconLayout: {
    		height: 80,
    		width: 134,
    		position: "absolute"
  	},
  	ubLayout: {
    		height: 43,
    		top: AlignStyles.workoutButtonTop + 18
  	},
  	ubItemBorder: {
    		height: 42,
    		borderColor: Color.colorBlack,
    		backgroundColor: Color.colorBlack,
    		borderRadius: Border.br_3xs,
    		borderWidth: 2,
    		borderStyle: "solid",
    		top: AlignStyles.workoutButtonTop,
    		position: "absolute"
  	},
  	profilePosition: {
    		top: AlignStyles.workoutButtonTop + 2,
    		height: 41
  	},
  	ubLayout1: {
    		width: 352,
    		position: "relative"
  	},
  	corePosition: {
    		top: AlignStyles.workoutButtonTop + 75,
    		width: AlignStyles.workoutButtonWidth,
    		position: "absolute"
  	},
  	childPosition: {
    		left: 70,
    		height: AlignStyles.workoutButtonHeight - 5,
    		width: AlignStyles.workoutButtonWidth - 140,
    		borderColor: Color.theme1,
    		borderStyle: "solid",
    		top: AlignStyles.workoutButtonTop,
    		position: "relative"
  	},
  	iconPosition: {
    		top: AlignStyles.workoutButtonTop + 56,
    		position: "relative"
  	},
  	ub1Position: {
    		width: 358,
    		left: 0,
    		position: "relative"
  	},
  	pushChild: {
    		left: 63,
    		height: AlignStyles.workoutButtonHeight - 5,
    		width: 158,
    		borderWidth: 2,
    		borderColor: Color.theme1,
    		borderStyle: "solid",
    		top: AlignStyles.workoutButtonTop,
    		position: "relative"
  	},
  	push1: {
    		height: 145,
    		left: 0,
    		width: AlignStyles.workoutButtonWidth,
    		position: "absolute",
			
  	},
  	pushIcon: {
    		left: 75,
    		top: AlignStyles.workoutButtonTop + 48
  	},
  	profileLevel: {
    		top: 8
  	},
  	push: {
    		left: -55,
    		height: AlignStyles.workoutButtonHeight,
    		top: 73,
    		width: AlignStyles.workoutButtonWidth
  	},
  	pullIcon: {
    		top: 52,
    		left: 76
  	},
  	pull: {
    		left: 125,
    		height: AlignStyles.workoutButtonHeight,
    		top: 73,
    		width: AlignStyles.workoutButtonWidth
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
    		top: AlignStyles.workoutButtonTop,
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
    		borderColor: Color.theme1,
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
    		top: AlignStyles.workoutButtonTop + 8
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
    		height: AlignStyles.workoutButtonHeight
  	},
  	ubItem: {
    		left: 84,
    		width: AlignStyles.workoutButtonWidth - 108
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
    		top: AlignStyles.workoutButtonTop
  	},
  	profileLevel5: {
    		height: 41,
    		top: AlignStyles.workoutButtonTop + 2
  	},
  	ub1: {
    		height: 43,
    		top: AlignStyles.workoutButtonTop + 18
  	},
  	cardioChild: {
    		borderRadius: Border.br_3xs,
    		left: 70,
    		borderWidth: 4
  	},
  	cardioIcon: {
    		top: AlignStyles.workoutButtonTop + 37,
    		left: 109,
    		width: 80,
    		height: 89,
    		position: "absolute"
  	},
  	cardio: {
    		left: 0,
    		height: AlignStyles.workoutButtonHeight,
    		top: AlignStyles.workoutButtonTop
  	},
  	warmUpsIcon: {
    		left: 100,
    		width: AlignStyles.workoutButtonWidth - 200,
    		height: AlignStyles.workoutButtonHeight - 86,
    		top: AlignStyles.workoutButtonTop + 48,
    		position: "absolute"
  	},
  	warmUps: {
    		left: 188,
    		height: AlignStyles.workoutButtonHeight,
    		top: AlignStyles.workoutButtonTop
  	},
  	cardioSwarmUps: {
    		width: AlignStyles.workoutButtonWidth + 188,
    		height: AlignStyles.workoutButtonHeight
  	},
  	upperBodyParent: {
    		left: 0,
    		alignItems: "center",
    		justifyContent: "center",
    		paddingHorizontal: 10,
    		paddingVertical: 30,
    		gap: 19,
    		top: AlignStyles.workoutButtonTop,
    		position: "relative"
  	},
  	workoutsPage: {
    		backgroundColor: Color.colorBackground,
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
