import * as React from "react";
import {Image, StyleSheet, Text, View, ScrollView} from "react-native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const HomePage = () => {
  	
  	return (
    		<View style={styles.homePage}>
      			<View style={[styles.profileLevelParent, styles.scaledContent]}>
        				<View style={styles.profileLevel}>
          					<View style={[styles.ellipseParent, styles.groupChildLayout]}>
            						<Image style={[styles.groupChild, styles.groupPosition]} resizeMode="cover" source={require('./Assets/HomeScreen/Ellipse1.png')} />
            						<Text style={[styles.text, styles.textTypo]}>5</Text>
          					</View>
          					<Image style={[styles.image1Icon, styles.groupPosition]} resizeMode="cover" source={require('./Assets/HomeScreen/ProfilePic.png')} />
          					<Text style={[styles.jonyLiftz, styles.levelTypo]}>Jony Liftz</Text>
          					<Text style={[styles.level, styles.levelTypo]}> Level</Text>
        				</View>
        				<View style={styles.caloriesBurnedParent}>
          					<View style={styles.caloriesBurned}>
            						<View style={styles.caloriesBurnedChild} />
            						<View style={[styles.calories, styles.caloriesPosition]}>
              							<View style={[styles.calories1, styles.caloriesPosition]}>
                								<Image style={styles.fireIcon} resizeMode="cover" source={require('./Assets/HomeScreen/Fire.png')} />
                								<Text style={styles.calories2}>Calories</Text>
                								<Text style={[styles.text1, styles.textLayout]}>105</Text>
              							</View>
            						</View>
          					</View>
          					<View style={[styles.dailyQuests, styles.dailyLayout1]}>
            						<View style={[styles.dailyQuestsChild, styles.dailyLayout1]} />
            						<View style={[styles.dailyQuests1, styles.dailyLayout]}>
              							<Text style={[styles.dailyQuests2, styles.dailyLayout]}>Daily Quests</Text>
              							<Text style={[styles.text2, styles.dailyLayout]}>1/3</Text>
            						</View>
          					</View>
          					<View style={[styles.stats, styles.statsPosition]}>
            						<View style={styles.statsChild} />
            						<View style={[styles.stats1, styles.statsPosition]}>
              							<View style={styles.strength}>
                								<View style={[styles.ellipseGroup, styles.groupLayout]}>
                  									<Image style={[styles.ellipse, styles.groupLayout]} resizeMode="cover" source={require('./Assets/HomeScreen/Ellipse1.png')} />
                  									<Text style={[styles.ellipsenumber, styles.textTypo]}>3</Text>
                								</View>
                								<View style={[styles.strength1, styles.groupPosition]}>
                  									<Image style={styles.groupLayout} resizeMode="cover" source={require('./Assets/HomeScreen/Strength.png')} />
                  									<Text style={[styles.strength2, styles.levelTypo]}>{`Strength`}</Text>
                                </View>
                            </View>
                            <View style={styles.strength}>
                                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                                    <Image style={[styles.ellipse, styles.groupLayout]} resizeMode="cover" source={require('./Assets/HomeScreen/Ellipse1.png')} />
                                    <Text style={[styles.ellipsenumber, styles.textTypo]}>2</Text>
                                </View>
                                <View style={[styles.strength1, styles.groupPosition]}>
                                    <Image style={styles.groupLayout} resizeMode="cover" source={require('./Assets/HomeScreen/Speed.png')} />
                                    <Text style={[styles.strength2, styles.levelTypo]}>Speed</Text>
                                </View>
                            </View>
                            <View style={styles.strength}>
                                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                                    <Image style={[styles.ellipse, styles.groupLayout]} resizeMode="cover" source={require('./Assets/HomeScreen/Ellipse1.png')} />
                                    <Text style={[styles.ellipsenumber, styles.textTypo]}>1</Text>
                                </View>
                                <View style={[styles.strength1, styles.groupPosition]}>
                                    <Image style={styles.groupLayout} resizeMode="cover" source={require('./Assets/HomeScreen/Stamina.png')} />
                  									<Text style={[styles.strength2, styles.levelTypo]}>{`Stamina
                  									`}</Text>
                                </View>
                            </View>
                            <View style={styles.strength}>
                                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                                    <Image style={[styles.ellipse, styles.groupLayout]} resizeMode="cover" source={require('./Assets/HomeScreen/Ellipse1.png')} />
                                    <Text style={[styles.ellipsenumber, styles.textTypo]}>6</Text>
                                </View>
                                <View style={[styles.strength1, styles.groupPosition]}>
                                    <Image style={styles.groupLayout} resizeMode="cover" source={require('./Assets/HomeScreen/UpperBody.png')} />
                  									<Text style={[styles.strength2, styles.levelTypo]}>{`Upper Body
                  									`}</Text>
                                </View>
                            </View>
                            <View style={styles.strength}>
                                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                                    <Image style={[styles.ellipse, styles.groupLayout]} resizeMode="cover" source={require('./Assets/HomeScreen/Ellipse1.png')} />
                                    <Text style={[styles.ellipsenumber, styles.textTypo]}>2</Text>
                                </View>
                                <View style={[styles.strength1, styles.groupPosition]}>
                                    <Image style={styles.groupLayout} resizeMode="cover" source={require('./Assets/HomeScreen/LowerBody.png')} />
                  									<Text style={[styles.strength2, styles.levelTypo]}>{`Lower Body
                  									`}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    groupChildLayout: {
        height: 85,
        width: 82
    },
    groupPosition: {
        left: 0,
        position: "absolute"
    },
    textTypo: {
        textAlign: "center",
        color: Color.colorWhite,
        lineHeight: 29,
        letterSpacing: 0,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        position: "absolute"
    },
    levelTypo: {
        textAlign: "left",
        lineHeight: 30,
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        letterSpacing: 0
    },
    caloriesPosition: {
        height: 141,
        marginLeft: -86,
        width: 172,
        left: "50%",
        position: "absolute"
    },
    textLayout: {
        height: 40,
        fontSize: FontSize.size_xl,
        lineHeight: 30,
        textAlign: "center",
        color: Color.colorWhite,
        letterSpacing: 0,
        left: "50%"
    },
    dailyLayout1: {
        height: 124,
        width: 168,
        position: "absolute"
    },
    dailyLayout: {
        width: 162,
        position: "absolute"
    },
    statsPosition: {
        width: 237,
        left: 0,
        position: "absolute"
    },
    groupLayout: {
        height: 50,
        width: 50
    },
    groupChild: {
        height: 65,
        width: 65,
        top: 5,
    },
    text: {
        top: 25,
        left: 18,
        fontSize: 30,
        width: 30,
        height: 30
    },
    ellipseParent: {
        top: 45,
        left: 240,
        position: "absolute"
    },
    image1Icon: {
        width: 144,
        height: 150,
        top: 0
    },
    jonyLiftz: {
        top: 4,
        left: 152,
        width: 152,
        height: 41,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        position: "absolute"
    },
    level: {
        top: 70,
        left: 146,
        fontSize: 22,
        width: 92,
        height: 44,
        position: "absolute"
    },
    profileLevel: {
        width: 322,
        height: 150
    },
    caloriesBurnedChild: {
        width: 168,
        borderWidth: 4,
        borderColor: Color.theme1,
        borderStyle: "solid",
        borderRadius: Border.br_3xs,
        left: 4,
        height: 158,
        top: 0,
        position: "absolute"
    },
    fireIcon: {
        marginLeft: -54.41,
        width: 108,
        height: 68,
        borderRadius: Border.br_3xs,
        left: "50%",
        top: 0,
        position: "absolute"
    },
    calories2: {
        top: 66,
        height: 33,
        marginLeft: -86,
        width: 172,
        lineHeight: 30,
        fontSize: 20,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        letterSpacing: 0,
        left: "50%",
        position: "absolute"
    },
    text1: {
        marginLeft: -50.9,
        top: 101,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        width: 102,
        position: "absolute"
    },
    calories1: {
        top: 0
    },
    calories: {
        top: 9
    },
    caloriesBurned: {
        top: 178,
        left: 237,
        height: 158,
        width: 172,
        position: "absolute"
    },
    dailyQuestsChild: {
        borderWidth: 4,
        borderColor: Color.theme1,
        borderStyle: "solid",
        height: 124,
        borderRadius: Border.br_3xs,
        left: 0,
        top: 0
    },
    dailyQuests2: {
        height: 35,
        lineHeight: 30,
        width: 162,
        fontSize: 20,
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        letterSpacing: 0,
        left: 0,
        top: 0
    },
    text2: {
        marginLeft: -81,
        top: 36,
        height: 40,
        fontSize: FontSize.size_xl,
        lineHeight: 30,
        textAlign: "center",
        color: Color.colorWhite,
        letterSpacing: 0,
        left: "50%",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        width: 162
    },
    dailyQuests1: {
        top: 26,
        left: 2,
        height: 76
    },
    dailyQuests: {
        top: 28,
        left: 243
    },
    statsChild: {
        borderRadius: 15,
        width: 233,
        left: 4,
        height: 358,
        top: 0,
        position: "absolute"
    },
    ellipse: {
        left: 10,
        position: "absolute",
        top: 0
    },
    ellipsenumber: {
        top: 9,
        left: 20,
        fontSize: FontSize.size_lg,
        width: 32,
        height: 30
    },
    ellipseGroup: {
        left: 153,
        top: 0,
        position: "absolute"
    },
    strength2: {
        fontSize: FontSize.size_sm,
        width: 100,
        height: 32
    },
    strength1: {
        top: 13,
        flexDirection: "row",
        gap: Gap.gap_md,
        opacity: 0.8,
        alignItems: "center"
    },
    strength: {
        width: 203,
        height: 63
    },
    stats1: {
        top: 8,
        height: 344,
        paddingHorizontal: 10,
        paddingVertical: 0,
        gap: 11
    },
    stats: {
        height: 358,
        top: 0
    },
    caloriesBurnedParent: {
        height: 358,
        width: 411
    },
    profileLevelParent: {
        marginLeft: -206,
        paddingHorizontal: 0,
        paddingVertical: 30,
        gap: 28,
        alignItems: "center",
        width: 411,
        left: "50%",
        top: 0,
        position: "relative"
    },
    homePage: {
        backgroundColor: "#1c0101",
        flex: 1,
        width: "100%",
        height: 880,
        overflow: "visible"
    },
    scaledContent: {
    		transform: [{ scale: 0.9 }],  // Adjust scale factor as needed
  	},
    
});

export default HomePage;
