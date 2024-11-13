import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogCaloriesPopUp = () => {
  	
  	return (
    		<View style={styles.LogCaloriesPopUp}>
      			<View style={styles.goalManager}/>
      			<View style={[styles.boxPosition1, styles.boxPositionLayout]}>
        			<View style={[styles.colorbackground, styles.boxPositionLayout]} />
        				<Text style={[styles.title]}>Breakfast</Text>
        				<Text style={[styles.cal]}>{`240 cal`}</Text>
                        <Image style={styles.image} resizeMode="cover" source={require('./Assets/ActivityScreen/Plus.png')} />
                </View>
                <View style={[styles.boxPosition2, styles.boxPositionLayout]}>
                    <View style={[styles.colorbackground, styles.boxPositionLayout]} />
                        <Text style={[styles.title]}>Lunch</Text>
                        <Text style={[styles.cal]}>{`300 cal`}</Text>
                        <Image style={styles.image} resizeMode="cover" source={require('./Assets/ActivityScreen/Plus.png')} />

                </View>
                <View style={[styles.boxPosition3, styles.boxPositionLayout]}>
                    <View style={[styles.colorbackground, styles.boxPositionLayout]} />
                        <Text style={[styles.title]}>Dinner</Text>
        				<Text style={[styles.cal]}>{`0 cal`}</Text>
                        <Image style={styles.image} resizeMode="cover" source={require('./Assets/ActivityScreen/Plus.png')} />

                </View>
                <View style={[styles.boxPosition4, styles.boxPositionLayout]}>
                    <View style={[styles.colorbackground, styles.boxPositionLayout]} />
                        <Text style={[styles.title]}>Snacks</Text>
        				<Text style={[styles.cal]}>{`0 cal`}</Text>
                        <Image style={styles.image} resizeMode="cover" source={require('./Assets/ActivityScreen/Plus.png')} />

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
    boxPositionLayout: {
        height: 125,
        width: 365,
        position: "absolute"
    },
    title: {
        height: 53,
        top: 20,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: 0,
        fontSize: '29',
        position: "relative",
        left: "-5%",
        width: 310,
        //Stroke
        textShadowColor: "#000", // Outline color
        textShadowOffset: { width: 2, height: 2 }, // Controls outline width
        textShadowRadius: 1,
    },
    cal: {
        height: 40,
        top: 5,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 45,
        letterSpacing: 0,
        fontSize: '20',
        position: "relative",
        left: "-12%",
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
    dailyQuestsChild: {
        backgroundColor: "#000",
        borderStyle: "solid",
        borderColor: Color.colorWhite,
        borderWidth: 5,
        borderRadius: Border.br_xl
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
        borderWidth: 5,
        borderRadius: Border.br_xl,
        backgroundColor: "#000",
    },
    colorbackground: {
        top: 0,
        backgroundColor: Color.theme2,
        alignItems: "center",
        left: -5,
        borderRadius: Border.br_xl,
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
    boxPosition1: {
        top: 50,
        left: 20,
        width: 365
    },
    boxPosition2Days: {
        marginLeft: -144.5,
        width: 310
    },
    goal5Days: {
        width: 92
    },
    boxPosition2: {
        top: 200,
        left: 20,
        width: 365
    },
    goal2100Cal: {
        width: 108
    },
    boxPosition3: {
        top: 350,
        left: 20,
        width: 365
    },
    boxPosition4: {
        top: 500,
        left: 20,
        width: 365
    },
    LogCaloriesPopUp: {
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
        left: "25%"
    },
    number2: {
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        lineHeight: 35,
        fontSize: '17',
        position: "relative",
        marginLeft: 70,
        width: 106,
        height: 42,
        top: -3,
        left: "25%"
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
        left: "20%"
    },
    image: {
        top: -60,
        position: "relative",
        left: "70%",
    }
    
});

export default LogCaloriesPopUp;