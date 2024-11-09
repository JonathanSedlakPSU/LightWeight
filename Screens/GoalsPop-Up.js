import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GoalsPopUp = () => {
  	
  	return (
    		<View style={styles.goalsPopup}>
      			<View style={styles.goalManager}>
        				<View style={styles.dailyPosition}>
          					<View style={[styles.questManager, styles.questManagerPosition]}>
            						<View style={styles.bar} />
            						<View style={[styles.questsHeader, styles.questManagerPosition]}>
              							<Text style={styles.goals}>Goals</Text>
            						</View>
          					</View>
        				</View>
      			</View>
      			<View style={[styles.bodyweight, styles.bodyweightLayout]}>
        			<View style={[styles.bodyweightChild, styles.bodyweightLayout]} />
        				<Text style={[styles.bodyWeightLbsTypo]}>Body Weight (lbs)</Text>
        				<Text style={[styles.goal, styles.lbsTypo]}>{`Goal`}</Text>
        				<Text style={[styles.current, styles.lbsTypo]}>{`Current`}</Text>
        				<Text style={[styles.starting, styles.lbsTypo]}>{`Starting`}</Text>
                        <Text style={[styles.number1, ]}>{`165`}</Text>
        				<Text style={[styles.number2, ]}>{`198`}</Text>
        				<Text style={[styles.number3, ]}>{`200`}</Text>
                    </View>
                <View style={[styles.weeklyworkouts, styles.bodyweightLayout]}>
                    <View style={[styles.bodyweightChild, styles.bodyweightLayout]} />
                        <Text style={[styles.bodyWeightLbsTypo]}>Weekly Workouts (days)</Text>
                        <Text style={[styles.goal, styles.lbsTypo]}>{`Goal`}</Text>
        				<Text style={[styles.current, styles.lbsTypo]}>{`Current`}</Text>
        				<Text style={[styles.starting, styles.lbsTypo]}>{`Starting`}</Text>
                        <Text style={[styles.number1, ]}>{`165`}</Text>
        				<Text style={[styles.number2, ]}>{`198`}</Text>
        				<Text style={[styles.number3, ]}>{`200`}</Text>
                    </View>
                <View style={[styles.calories, styles.bodyweightLayout]}>
                    <View style={[styles.bodyweightChild, styles.bodyweightLayout]} />
                        <Text style={[styles.bodyWeightLbsTypo]}>Daily Calories (cal)</Text>
        				<Text style={[styles.goal, styles.lbsTypo]}>{`Goal`}</Text>
        				<Text style={[styles.current, styles.lbsTypo]}>{`Current`}</Text>
        				<Text style={[styles.starting, styles.lbsTypo]}>{`Starting`}</Text>
                        <Text style={[styles.number1, ]}>{`165`}</Text>
        				<Text style={[styles.number2, ]}>{`198`}</Text>
        				<Text style={[styles.number3, ]}>{`200`}</Text>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    dailyPosition: {
        right: "0%",
        left: "0%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%"
    },
    questManagerPosition: {
        width: 298,
        left: "50%",
        position: "absolute"
    },
    bodyweightLayout: {
        height: 146,
        width: 365,
        position: "absolute"
    },
    bodyWeightLbsTypo: {
        height: 53,
        top: 20,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: 0,
        fontSize: '20px',
        position: "relative",
        left: "5%",
        width: 310,
        //Stroke
        textShadowColor: "#000", // Outline color
        textShadowOffset: { width: 2, height: 2 }, // Controls outline width
        textShadowRadius: 1,
    },
    lbsTypo: {
        height: 42,
        top: 63,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 35,
        letterSpacing: 0,
        fontSize: '17px',
        position: "absolute",
        //Stroke
        textShadowColor: "#000", // Outline color
        textShadowOffset: { width: 2, height: 2 }, // Controls outline width
        textShadowRadius: 1,
    },
    goal5DaysTypo: {
        top: 64,
        height: 42,
        right: 0,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: 0,
        fontSize: FontSize.size_5xl,
        position: "absolute"
    },
    
    bar: {
        height: "3.71%",
        marginLeft: -114.58,
        top: "96.25%",
        bottom: "0.04%",
        backgroundColor: "#d9d9d9",
        width: 229,
        left: "50%",
        borderRadius: Border.br_xl,
        position: "absolute"
    },
    goals: {
        width: 149,
        height: 33,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: 0,
        fontSize: FontSize.size_5xl
    },
    questsHeader: {
        height: "67.31%",
        marginLeft: -149,
        bottom: "32.69%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 0,
        borderRadius: Border.br_xl,
        top: "0%",
        width: 298
    },
    questManager: {
        height: "10.31%",
        marginLeft: -148.8,
        top: "3.33%",
        bottom: "86.36%"
    },
    goalManager: {
        width: "99.9%",
        right: "0.1%",
        left: "0%",
        bottom: "0%",
        height: "100%",
        top: "0%",
        position: "absolute",
        backgroundColor: "#000",
        borderStyle: "solid",
        borderWidth: 5,
        borderRadius: Border.br_xl
    },
    bodyweightChild: {
        top: 0,
        backgroundColor: Color.theme2,
        alignItems: "center",
        left: -5,
        borderRadius: Border.br_xl,
    },
    goal: {
        width: 92,
        right: 18,
        height: 42,
        top: 63
    },
    current: {
        marginLeft: -52.5,
        width: 106,
        height: 42,
        top: 63,
        left: "50%"
    },
    starting: {
        width: 116,
        height: 42,
        top: 63,
        left: 0
    },
    bodyweight: {
        top: 122,
        left: 20,
        width: 365
    },
    weeklyWorkoutsDays: {
        marginLeft: -144.5,
        width: 310
    },
    goal5Days: {
        width: 92
    },
    weeklyworkouts: {
        top: 305,
        left: 20,
        width: 365
    },
    goal2100Cal: {
        width: 108
    },
    calories: {
        top: 501,
        left: 20,
        width: 365
    },
    goalsPopup: {
        flex: 1,
        height: 706,
        width: "100%",
        transform: [{ scale: 0.8 }]
    },
    number1: {
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        lineHeight: 35,
        fontSize: '17px',
        position: "relative",
        marginLeft: -52.5,
        width: 106,
        height: 42,
        top: 40,
        left: "25%",
        //Stroke
        textShadowColor: "#000", // Outline color
        textShadowOffset: { width: 2, height: 2 }, // Controls outline width
        textShadowRadius: 1,
    },
    number2: {
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        lineHeight: 35,
        fontSize: '17px',
        position: "relative",
        marginLeft: 70,
        width: 106,
        height: 42,
        top: -3,
        left: "25%",
        //Stroke
        textShadowColor: "#000", // Outline color
        textShadowOffset: { width: 2, height: 2 }, // Controls outline width
        textShadowRadius: 1,
    },
    number3: {
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        lineHeight: 35,
        fontSize: '17px',
        position: "relative",
        marginLeft: 210,
        width: 106,
        height: 42,
        top: -45,
        left: "20%",
        //Stroke
        textShadowColor: "#000", // Outline color
        textShadowOffset: { width: 2, height: 2 }, // Controls outline width
        textShadowRadius: 1,
    },
    
});

export default GoalsPopUp;
