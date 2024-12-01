import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../FirebaseConfig";

const DailyQuestPopup = ({userId, dailyQuests }) => {
  const [isImage1, setIsImage1] = useState(false);
  const [isImage2, setIsImage2] = useState(false);
  const [isImage3, setIsImage3] = useState(false);
  const [userData, setUserData] = useState({});

  // Load initial states
  useEffect(() => {
    const loadCompletionStates = async () => {
      const userDoc = await getDoc(doc(FIREBASE_DB, "Users", userId));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
		setIsImage1(userData.completedQuest1 || false);
        setIsImage2(userData.completedQuest2 || false);
        setIsImage3(userData.completedQuest3 || false);
      }
    };
    loadCompletionStates();
  }, []);

  const updateQuestStatus = async (questNumber, isCompleted) => {
    try {
      const userRef = doc(FIREBASE_DB, "Users", userId);
      await updateDoc(userRef, {
        [`completedQuest${questNumber}`]: isCompleted,
      });
    } catch (error) {
      console.error(`Error updating quest ${questNumber}:`, error);
    }
  };

  const handlePress1 = async () => {
    if (isImage1 === false) {
      setIsImage1(true);
      await updateQuestStatus(1, true);
    }
  };
  const handlePress2 = async () => {
    if (isImage2 === false) {
      setIsImage2(true);
      await updateQuestStatus(2, true);
    }
  };
  const handlePress3 = async () => {
    if (isImage3 === false) {
      setIsImage3(true);
      await updateQuestStatus(3, true);
    }
  };

  return (
    <View style={styles.dailyQuestPopup}>
      <View style={[styles.questsManager, styles.childPosition]}>
        {/* Quests Header */}
        <View style={[styles.questsManager, styles.childPosition]}>
          <View style={[styles.dailyQuestsChild, styles.childPosition]} />
          <View style={styles.questManager}>
            <View style={styles.bar} />
            <View style={styles.questsHeader}>
              <Text style={[styles.textTypo]}>Quests</Text>
            </View>
          </View>
        </View>

        {/* Daily Quest 1 */}
        <View style={[styles.groupParent, styles.groupPosition]}>
          <Pressable onPress={handlePress1} style={styles.ellipseParent}>
            <View style={styles.svgContainer}>
              {isImage1 ? (
                // Checkmark if clicked
                <Image
                  source={require("./Assets/DailyQuestPop-Up/CheckMark.png")}
                  style={{ width: 55, height: 55 }}
                />
              ) : (
                //else
                // SVG + number
                <>
                  <Svg width="55" height="55" viewBox="0 0 70 70" fill="none">
                    <Circle
                      cx="35"
                      cy="35"
                      r="30"
                      stroke={Color.theme2}
                      strokeWidth="5"
                    />
                  </Svg>
                  <Text style={styles.text1}>1</Text>
                </>
              )}
            </View>
          </Pressable>
          {/* Change text if clicked */}
          <Text
            style={[
              styles.greetARandomPosition,
              isImage1 && { color: "#696868" },
            ]}
          >
            {dailyQuests[0].description}
          </Text>
        </View>

        {/* Daily Quest 2 */}
        <View style={styles.groupContainer}>
          <Pressable onPress={handlePress2} style={styles.ellipseParent}>
            <View style={styles.svgContainer}>
              {isImage2 ? (
                // Checkmark if clicked
                <Image
                  source={require("./Assets/DailyQuestPop-Up/CheckMark.png")}
                  style={{ width: 55, height: 55 }}
                />
              ) : (
                // else
                // SVG + number
                <>
                  <Svg width="55" height="55" viewBox="0 0 70 70" fill="none">
                    <Circle
                      cx="35"
                      cy="35"
                      r="30"
                      stroke={Color.theme2}
                      strokeWidth="5"
                    />
                  </Svg>
                  <Text style={styles.text1}>2</Text>
                </>
              )}
            </View>
          </Pressable>
          {/* Change text if clicked */}
          <Text
            style={[
              styles.greetARandomPosition,
              isImage2 && { color: "#696868" },
            ]}
          >
            {dailyQuests[1].description}
          </Text>
        </View>

        {/* Daily Quest 3 */}
        <View style={[styles.groupView, styles.groupPosition]}>
          <Pressable onPress={handlePress3} style={styles.ellipseParent}>
            <View style={styles.svgContainer}>
              {isImage3 ? (
                // Checkmark if clicked
                <Image
                  source={require("./Assets/DailyQuestPop-Up/CheckMark.png")}
                  style={{ width: 55, height: 55 }}
                />
              ) : (
                // else
                // SVG + number
                <>
                  <Svg width="55" height="55" viewBox="0 0 70 70" fill="none">
                    <Circle
                      cx="35"
                      cy="35"
                      r="30"
                      stroke={Color.theme2}
                      strokeWidth="5"
                    />
                  </Svg>
                  <Text style={styles.text1}>3</Text>
                </>
              )}
            </View>
          </Pressable>
          {/* Change text if clicked */}
          <Text
            style={[
              styles.greetARandomPosition,
              isImage3 && { color: "#696868" },
            ]}
          >
            {dailyQuests[2].description}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  childPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "relative",
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
    height: "16%",
    position: "absolute",
  },
  checkBg: {
    backgroundColor: Color.colorLime,
    width: "21%",
    position: "absolute",
  },
  greetARandomPosition: {
    height: 64,
    justifyContent: "center",
    display: "flex",
    left: "18.38%",
    top: "65%",
    width: "71.61%",
    marginTop: -32,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
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
    height: "100%",
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
    position: "absolute",
  },
  quests: {
    width: 250,
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
    position: "relative",
  },
  questManager: {
    height: "10.3%",
    top: "3.33%",
    bottom: "86.37%",
    width: 298,
    marginLeft: -149,
    left: "50%",
    position: "absolute",
  },
  questsManager: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  groupChild: {
    maxWidth: "100%",
    overflow: "visible",
    maxHeight: "100%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
    transform: [{ scale: 0.9 }],
  },
  text1: {
    height: "38%",
    width: "63.94%",
    top: "28%",
    left: "18%",
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
  },
  ellipseParent: {
    height: "78.13%",
    width: "18.39%",
    top: "10.94%",
    right: "81.61%",
    bottom: "10.94%",
    left: "1%",
    position: "absolute",
  },
  groupParent: {
    top: "21.39%",
    bottom: "65.9%",
  },
  checkMarkChild: {
    height: "67.67%",
    top: "51.65%",
    right: "79%",
    bottom: "-19.32%",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    left: "0%",
  },
  checkMarkItem: {
    height: "114.22%",
    right: "-6.2%",
    bottom: "-14.22%",
    left: "85.2%",
    transform: [
      {
        rotate: "45deg",
      },
    ],
    top: "0%",
    width: "21%",
  },
  checkMark: {
    height: "46.4%",
    width: "58.48%",
    top: "26%",
    right: "20.08%",
    bottom: "27.6%",
    left: "21.44%",
    position: "absolute",
  },
  blurr: {
    opacity: 0.5,
  },
  groupContainer: {
    top: "40.25%",
    right: "3.36%",
    bottom: "47.05%",
    left: "3.02%",
    width: "93.62%",
    height: "16%",
    position: "absolute",
  },
  groupView: {
    top: "60.1%",
    bottom: "27.2%",
  },
  dailyQuestPopup: {
    flex: 1,
    height: 504,
    width: "100%",
    transform: [{ scale: 0.8 }],
  },
});

export default DailyQuestPopup;
