import React, {useState} from "react";
import {StyleSheet, View, Text, TextInput} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GoalsPopUp = ({userId}) => {
    const [bodyWeight1, setBodyWeight1] = React.useState("");
    const [bodyWeight2, setBodyWeight2] = React.useState("");
    const [bodyWeight3, setBodyWeight3] = React.useState("");

    const [workouts1, setWorkout1 ] = React.useState("");
    const [workouts2, setWorkout2 ] = React.useState("");
    const [workouts3, setWorkout3 ] = React.useState("");

    const [cal1, setCal1] = React.useState("");
    const [cal2, setCal2] = React.useState("");
    const [cal3, setCal3] = React.useState("");

  	
  	return (
    		<View style={styles.goalsPopup}>
                
                {/* Body Weight */}
      		    <View style={[styles.bodyweight, styles.bodyweightLayout]}>
        			<View style={[styles.bodyweightChild, styles.bodyweightLayout]} />
        			<Text style={[styles.bodyWeightLbsTypo]}>Body Weight (lbs)</Text>
        			<Text style={[styles.goal, styles.lbsTypo]}>{`Goal`}</Text>
        			<Text style={[styles.current, styles.lbsTypo]}>{`Current`}</Text>
        			<Text style={[styles.starting, styles.lbsTypo]}>{`Starting`}</Text>
                    <TextInput 
                        onChangeText={(text) => setBodyWeight1(text)}
                        placeholder="0"
                        style={styles.number1}
                    />
        			<TextInput 
                        onChangeText={(text) => setBodyWeight2(text)}
                        placeholder="0"
                        style={styles.number2}
                    />
        			<TextInput 
                        onChangeText={(text) => setBodyWeight3(text)}
                        placeholder="0"
                        style={styles.number3}
                    />
                </View>

                {/* Weekly Workouts */}
                <View style={[styles.weeklyworkouts, styles.bodyweightLayout]}>
                    <View style={[styles.bodyweightChild, styles.bodyweightLayout]} />
                    <Text style={[styles.bodyWeightLbsTypo]}>Weekly Workouts (days)</Text>
                    <Text style={[styles.goal, styles.lbsTypo]}>{`Goal`}</Text>
        			<Text style={[styles.current, styles.lbsTypo]}>{`Current`}</Text>
        			<Text style={[styles.starting, styles.lbsTypo]}>{`Starting`}</Text>
                    <TextInput 
                        onChangeText={(text) => setWorkout1(text)}
                        placeholder="0"
                        style={styles.number1}
                    />
        			<TextInput 
                        onChangeText={(text) => setWorkout2(text)}
                        placeholder="0"
                        style={styles.number2}
                    />
        			<TextInput 
                        onChangeText={(text) => setWorkout3(text)}
                        placeholder="0"
                        style={styles.number3}
                    />
                </View>

                {/* Daily Calories */}
                <View style={[styles.calories, styles.bodyweightLayout]}>
                    <View style={[styles.bodyweightChild, styles.bodyweightLayout]} />
                    <Text style={[styles.bodyWeightLbsTypo]}>Daily Calories (cal)</Text>
        			<Text style={[styles.goal, styles.lbsTypo]}>{`Goal`}</Text>
        			<Text style={[styles.current, styles.lbsTypo]}>{`Current`}</Text>
        			<Text style={[styles.starting, styles.lbsTypo]}>{`Starting`}</Text>
                    <TextInput 
                        onChangeText={(text) => setCal1(text)}
                        placeholder="0"
                        style={styles.number1}
                    />
        			<TextInput 
                        onChangeText={(text) => setCal2(text)}
                        placeholder="0"
                        style={styles.number2}
                    />
        			<TextInput 
                        onChangeText={(text) => setCal3(text)}
                        placeholder="0"
                        style={styles.number3}
                    />
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
        position: "absolute",
        left: 13
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
        fontSize: 20,
        position: "relative",
        left: "10%",
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
        fontSize: 17,
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
    
    bodyweightChild: {
        top: 0,
        backgroundColor: Color.theme2,
        alignItems: "center",
        left: 0,
        borderRadius: Border.br_xl,
    },
    goal: {
        width: 92,
        right: 0,
        height: 42,
        top: 63
    },
    current: {
        marginLeft: -45.5,
        width: 106,
        height: 42,
        top: 63,
        left: "50%"
    },
    starting: {
        width: 116,
        height: 42,
        top: 63,
        left: 10
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
        right: 28,
        top: -100,
        //backgroundColor: "#000",
        //borderRadius: Border.br_xl,
        transform: [{ scale: 0.8 }]
    },
    number1: {
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        lineHeight: 35,
        fontSize: 17,
        position: "relative",
        marginLeft: -40,
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
        fontSize: 17,
        position: "relative",
        marginLeft: 85,
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
        fontSize: 17,
        position: "relative",
        marginLeft: 233,
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
