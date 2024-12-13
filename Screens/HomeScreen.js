import * as React from "react";
import { Image, StyleSheet, Text, View, ScrollView , Pressable, Button, Modal} from "react-native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";
import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle } from "react-native-svg";
import DailyQuestPopup from "./DailyQuestPop-Up";
import { collection, getDocs, setDoc } from "firebase/firestore";
import moment from "moment-timezone";


const HomePage = ({ userId }) => {
  // Variables for saving useStates
  const [userData, setUserData] = React.useState({});
  const [modalOpen, setModalOpen] = React.useState(false); // Daily Quest popup
  const [dailyQuests, setDailyQuests] = React.useState([]);
  
  // Get user data from Firebase
  const fetchUserData = async () => {
    try {
      const userDoc = await getDoc(doc(FIREBASE_DB, "Users", userId));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

  };

  const fetchRandomQuests = async () => {
    try {
      const questsCollection = collection(FIREBASE_DB, "Quests");
      const questsSnapshot = await getDocs(questsCollection);
      const questsList = questsSnapshot.docs.map(doc => doc.data());

      // Shuffle the quests list and select the first 3
      const shuffledQuests = questsList.sort(() => 0.5 - Math.random());
      const selectedQuests = shuffledQuests.slice(0, 3);

      // Store the selected quests in the user's document
      await setDoc(doc(FIREBASE_DB, "Users", userId), {
        dailyQuests: selectedQuests,
        lastRefresh: new Date().toISOString(),
        completedQuest1: false,
        completedQuest2: false,
        completedQuest3: false,
        questsCompleted: 0

      }, { merge: true });

      setDailyQuests(selectedQuests);
    } catch (error) {
      console.error("Error fetching quests:", error);
    }
  };

  const checkAndRefreshQuests = async () => {
    try {
      const userDocRef = doc(FIREBASE_DB, "Users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        // Check last refresh date
        const lastRefresh = userData.lastRefresh ? new Date(userData.lastRefresh) : null;
        const now = moment().tz("America/New_York");

        // Set to midnight
        const estMidnight = now.clone().startOf('day');

        // Check if the last refresh was before midnight
        if (!lastRefresh || lastRefresh < estMidnight.toDate()) {
          await fetchRandomQuests();
        } else {
          setDailyQuests(userData.dailyQuests || []);
        }
      }
    } catch (error) {
      console.error("Error checking and refreshing quests:", error);
    }
  };

  // Fetch user data at beginning
  React.useEffect(() => {
    fetchUserData();
    checkAndRefreshQuests();
    const userDocRef = doc(FIREBASE_DB, "Users", userId);
    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setUserData(data);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [userId]);



  return (
    <View style={styles.homePage}>
      <View style={[styles.profileLevelParent, styles.scaledContent]}>

        {/*Profile Level*/}
        <View style={styles.profileLevel}>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <Circle cx="35" cy="35" r="30" stroke={Color.theme2} strokeWidth="5"/>
            </Svg>
            <Text style={[styles.text, styles.textTypo]}>{userData.level}</Text>
          </View>
          <Image style={[styles.image1Icon, styles.groupPosition]} resizeMode="cover" source={ FIREBASE_AUTH.currentUser.photoURL ? { uri: FIREBASE_AUTH.currentUser.photoURL } : require("../assets/default_avatar.png")}/>
          <Text style={[styles.jonyLiftz, styles.levelTypo]}>{userData.Username}</Text>
          <Text style={[styles.level, styles.levelTypo]}> Level</Text>
        </View>

        {/* Calories Burned*/}
        <View style={styles.caloriesBurnedParent}>
          <View style={styles.caloriesBurned}>
            <View style={styles.caloriesBurnedChild} />
            <View style={[styles.calories, styles.caloriesPosition]}>
              <View style={[styles.calories1, styles.caloriesPosition]}>
                <Image
                  style={styles.fireIcon}
                  resizeMode="cover"
                  source={require("./Assets/HomeScreen/Fire.png")}
                />
                <Text style={styles.calories2}>Calories</Text>
                <Text style={[styles.text1, styles.textLayout]}>{userData.calories}</Text>
              </View>
            </View>
          </View>

          {/* Daily Quests*/}
          <Pressable style={[styles.dailyQuests, styles.dailyLayout1]} onPress={() => setModalOpen(true)}>
            <View style={[styles.dailyQuestsChild, styles.dailyLayout1]} />
            <View style={[styles.dailyQuests1, styles.dailyLayout]}>
              <Text style={[styles.dailyQuests2, styles.dailyLayout]}>
                Daily Quests
              </Text>
              <Text style={[styles.text2, styles.dailyLayout]}>{userData.questsCompleted}/3</Text>
            </View>
          </Pressable>


          <View style={[styles.stats, styles.statsPosition]}>
            <View style={styles.statsChild} />
            <View style={[styles.stats1, styles.statsPosition]}>

              {/* Strength */}
              <View style={styles.strength}>
                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                  <Svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <Circle cx="25" cy="25" r="20" stroke={Color.theme2} strokeWidth="5"/>
                  </Svg>
                  <Text style={[styles.ellipsenumber, styles.textTypo]}>{userData.strength}</Text>
                </View>
                <View style={[styles.strength1, styles.groupPosition]}>
                  <Image style={styles.groupLayout} resizeMode="cover" source={require("./Assets/HomeScreen/Strength.png")}/>
                  <Text style={[styles.strength2, styles.levelTypo]}>{`Strength`}</Text>
                </View>
              </View>

              {/* Speed */}
              <View style={styles.strength}>
                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                  <Svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <Circle cx="25" cy="25" r="20" stroke={Color.theme2} strokeWidth="5"/>
                  </Svg>
                  <Text style={[styles.ellipsenumber, styles.textTypo]}>{userData.speed}</Text>
                </View>
                <View style={[styles.strength1, styles.groupPosition]}>
                  <Image style={styles.groupLayout} resizeMode="cover" source={require("./Assets/HomeScreen/Speed.png")}/>
                  <Text style={[styles.strength2, styles.levelTypo]}> Speed</Text>
                </View>
              </View>

              {/*Stamina */}
              <View style={styles.strength}>
                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                  <Svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <Circle cx="25" cy="25" r="20" stroke={Color.theme2} strokeWidth="5"/>
                  </Svg>
                  <Text style={[styles.ellipsenumber, styles.textTypo]}>{userData.stamina}</Text>
                </View>
                <View style={[styles.strength1, styles.groupPosition]}>
                  <Image style={styles.groupLayout}  resizeMode="cover" source={require("./Assets/HomeScreen/Stamina.png")}/>
                  <Text style={[styles.strength2, styles.levelTypo]}>{`Stamina`}</Text>
                </View>
              </View>
          
              {/* Upper Body */}
              <View style={styles.strength}>
                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                  <Svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <Circle cx="25" cy="25" r="20" stroke={Color.theme2} strokeWidth="5"/>
                  </Svg>
                  <Text style={[styles.ellipsenumber, styles.textTypo]}>{userData.upperBody}</Text>
                </View>
                <View style={[styles.strength1, styles.groupPosition]}>
                  <Image style={styles.groupLayout} resizeMode="cover" source={require('./Assets/HomeScreen/UpperBody.png')} />
                  <Text style={[styles.strength2, styles.levelTypo]}>{`Upper Body`}</Text>
                </View>
              </View>

              {/* Lower Body */}
              <View style={styles.strength}>
                <View style={[styles.ellipseGroup, styles.groupLayout]}>
                  <Svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <Circle cx="25" cy="25" r="20" stroke={Color.theme2} strokeWidth="5"/>
                  </Svg>
                  <Text style={[styles.ellipsenumber, styles.textTypo]}>{userData.lowerBody}</Text>
                </View>
                <View style={[styles.strength1, styles.groupPosition]}>
                  <Image style={styles.groupLayout} resizeMode="cover" source={require('./Assets/HomeScreen/LowerBody.png')} />
                  <Text style={[styles.strength2, styles.levelTypo]}>{`Lower Body`}</Text>
                </View>
              </View>



            {/* Modal with Daily Quests Pop-Up */}
						<Modal visible={modalOpen} animationType="slide" transparent={true} 
						onRequestClose={() => setModalOpen(false)}>
						<View style={styles.modalOverlay}>
            	<View style={styles.modalContent}>
              		<DailyQuestPopup userId={userId} dailyQuests={dailyQuests}/>
              		<View style={styles.closeButton}>
                		<Button title="Close" onPress={() => setModalOpen(false)} />
              		</View>
            		</View>
          		</View>
        		</Modal>

            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

{/* StyleSheet */}
const styles = StyleSheet.create({

    modalOverlay: {
        flex: 1,
        alignItems: "center", // Center modal content horizontally
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
	      top: 55,
	      height: 820,
        width: "100%",
        position: "absolute",
    },
    modalContent: {
        width: "100%",
        //backgroundColor: "#000", // Black background for modal
        alignItems: "center", // Align content to the center
	      top: 100,
	      height: 550,
        width: "85%",
	      borderRadius: 20,
    },
	  closeButton: {
	      justifyContent: 'center',
        marginTop: 20,
	      top: -150,
        padding: 10,
        borderRadius: 10,
	      flexDirection: "row",
    },
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
        left: 20,
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
        width: 400,
        height: 41,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        position: "absolute"
    },
    level: {
        top: 70,
        left: 165,
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
        left: 10,
        fontSize: FontSize.size_lg,
        width: 32,
        height: 30
    },
    ellipseGroup: {
        left: 150,
        top: 15,
        position: "relative"
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
        backgroundColor: Color.colorBackground,
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
