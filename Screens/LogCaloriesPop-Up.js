import * as React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogCaloriesPopUp = () => {
  	
  	return (
    		<View style={styles.logCaloriesPopUp}>
      			<View style={styles.caloriePopup} />
      			<View style={[styles.vectorParent, styles.groupPosition]}>
        				<View style={styles.breakfastParent}>
          					<Text style={[styles.breakfast, styles.calTypo]}>{`Breakfast
`}</Text>
                    <View style={styles.plus}>
                        <Image style={styles.groupChildPosition} resizeMode="cover" source="Circle.png" />
                        <View style={styles.plus1}>
                            <View style={styles.plusChild} />
                            <View style={styles.plusChildPosition} />
                        </View>
                    </View>
                    <Text style={[styles.cal, styles.calTypo]}>240 cal</Text>
                </View>
            </View>
            <View style={[styles.vectorGroup, styles.groupPosition]}>
                <View style={styles.breakfastParent}>
                    <Text style={[styles.breakfast, styles.calTypo]}>Lunch</Text>
                    <View style={styles.plus}>
                        <Image style={styles.groupChildPosition} resizeMode="cover" source="Circle.png" />
                        <View style={styles.plus1}>
                            <View style={styles.plusChild} />
                            <View style={styles.plusChildPosition} />
                        </View>
                    </View>
                    <Text style={[styles.cal, styles.calTypo]}>605</Text>
                </View>
            </View>
            <View style={[styles.vectorContainer, styles.groupPosition]}>
                <View style={styles.breakfastParent}>
          					<Text style={[styles.breakfast, styles.calTypo]}>{`Dinner
          					`}</Text>
                    <View style={styles.plus}>
                        <Image style={styles.groupChildPosition} resizeMode="cover" source="Circle.png" />
                        <View style={styles.plus1}>
                            <View style={styles.plusChild} />
                            <View style={styles.plusChildPosition} />
                        </View>
                    </View>
                    <Text style={[styles.cal, styles.calTypo]}>0 cal</Text>
                </View>
            </View>
            <View style={[styles.groupView, styles.groupPosition]}>
                <View style={styles.breakfastParent}>
          					<Text style={[styles.breakfast, styles.calTypo]}>{`Snacks
          					`}</Text>
                    <View style={styles.plus}>
                        <Image style={styles.groupChildPosition} resizeMode="cover" source="Circle.png" />
                        <View style={styles.plus1}>
                            <View style={styles.plusChild} />
                            <View style={styles.plusChildPosition} />
                        </View>
                    </View>
                    <Text style={[styles.cal, styles.calTypo]}>62 cal</Text>
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    groupPosition: {
        left: "8.9%",
        right: "8.9%",
        width: "82.2%",
        height: "17.88%",
        position: "absolute"
    },
    groupChildPosition: {
        maxHeight: "100%",
        overflow: "hidden",
        maxWidth: "100%",
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%"
    },
    calTypo: {
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: 0,
        fontSize: FontSize.size_5xl,
        position: "absolute"
    },
    caloriePopup: {
        borderRadius: 20,
        borderStyle: "solid",
        borderColor: Color.colorWhite,
        borderWidth: 5,
        backgroundColor: Color.colorBlack,
        bottom: "0%",
        height: "100%",
        left: "0%",
        right: "0%",
        top: "0%",
        position: "absolute",
        width: "100%"
    },
    groupChild: {
        borderRadius: Border.br_mini
    },
    breakfast: {
        height: "53.7%",
        width: "77.82%",
        left: "0%",
        top: "0%",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: 0,
        fontSize: FontSize.size_5xl
    },
    plusChild: {
        right: "37.59%",
        left: "37.49%",
        borderRadius: Border.br_3xs,
        width: "24.92%",
        backgroundColor: Color.colorBlack,
        bottom: "0%",
        top: "0%",
        height: "100%",
        position: "absolute"
    },
    plusChildPosition: {
        transform: [
            {
                rotate: "-90deg"
            }
        ],
        bottom: "-62.53%",
        right: "75.08%",
        top: "62.53%",
        borderRadius: Border.br_3xs,
        width: "24.92%",
        backgroundColor: Color.colorBlack,
        left: "0%",
        height: "100%",
        position: "absolute"
    },
    plus1: {
        height: "74.25%",
        width: "64.99%",
        top: "13.33%",
        right: "17.61%",
        bottom: "12.42%",
        left: "17.4%",
        position: "absolute"
    },
    plus: {
        height: "74.07%",
        width: "19.72%",
        top: "18.52%",
        bottom: "7.41%",
        left: "80.28%",
        right: "0%",
        position: "absolute"
    },
    cal: {
        height: "37.04%",
        width: "70.78%",
        top: "62.96%",
        left: "4.75%"
    },
    breakfastParent: {
        height: "58.06%",
        width: "83.65%",
        top: "17.2%",
        right: "8.41%",
        bottom: "24.73%",
        left: "7.94%",
        position: "absolute"
    },
    vectorParent: {
        top: "6.92%",
        bottom: "75.19%"
    },
    vectorGroup: {
        top: "28.27%",
        bottom: "53.85%"
    },
    vectorContainer: {
        top: "49.62%",
        bottom: "32.5%"
    },
    groupView: {
        top: "70.96%",
        bottom: "11.15%"
    },
    logCaloriesPopUp: {
        flex: 1,
        height: 520,
        width: "100%"
    }
});

export default LogCaloriesPopUp;
