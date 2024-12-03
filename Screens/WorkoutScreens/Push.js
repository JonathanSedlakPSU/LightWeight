import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Color} from "../../GlobalStyles";

const PushWorkout = () => {
   const workoutList = [
      // Level: Beginner, Intermediate, Advanced

      /* Chest */
      { id: 1, name: "Incline Dumbell Press", reps: "4 x 12", level: "Beginner", 
         image: require("../Assets/Push/InclineDumbellPress_1.png"), },

      { id: 2, name: "Barbell Press", reps: "4 x 6", level: "Beginner", 
         image: require("../Assets/Push/BarbellPress_1.png"), },

      { id: 3, name: "Cable Crossover", reps: "3 x 12", level: "Intermediate", 
         image: require("../Assets/Push/CableCrossovers_1.png"),},

      /* Triceps */
      { id: 4, name: "Tricep Dips", reps: "3 x 8", level: "Hard", 
         image: require("../Assets/Push/Dips_1.png"), },

      { id: 5, name: "Tricep Pushdowns", reps: "4 x 10", level: "Beginner", 
         image: require("../Assets/Push/Pushdown_1.png"), },

      { id: 6, name: "Skull Crushers", reps: "3 x 12", level: "Beginner", 
         image: require("../Assets/Push/SkullCrushers_1.png"), },

  ];

  return (
   <View style={styles.container}>
     {/* Fixed Header */}
     <View style={styles.header}>
       <Text style={styles.headerText}>Push</Text>
     </View>

     {/* Scrollable List */}
     <ScrollView contentContainerStyle={styles.scrollContainer}>
       {workoutList.map((workout) => (
         <View key={workout.id} style={styles.listItem}>
           <Image source={workout.image} style={styles.image} />
           <View style={styles.textContainer}>
             <Text style={styles.itemTitle}>{workout.name}</Text>
             <Text style={styles.itemSubtitle}>{workout.reps}</Text>
             <Text style={styles.itemSubtitle}>{workout.level}</Text>
           </View>
         </View>
       ))}
       
     </ScrollView>
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: Color.colorBackground,
   paddingBottom: 50
 },
 header: {
  backgroundColor: Color.theme2,
  paddingVertical: 15,
   paddingHorizontal: 20,
   alignItems: "center",
 },
 headerText: {
   color: "#fff",
   fontSize: 20,
   fontWeight: "bold",
 },
 scrollContainer: {
   padding: 20,
   alignItems: "center",
 },
 listItem: {
   width: "90%",
   backgroundColor: Color.colorBackground2,
   padding: 20,
   marginVertical: 10,
   borderRadius: 10,
   shadowColor: "#000",
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.1,
   shadowRadius: 4,
   elevation: 3,
   flexDirection: "row",
   alignItems: "center",
 },
 image: {
   width: 100,
   height: 100,
   marginRight: 15,
   borderRadius: 10,
 },
 textContainer: {
   flex: 0,
 },
 itemTitle: {
   fontSize: 22,
   fontWeight: "600",
   color: Color.colorWhite,
 },
 itemSubtitle: {
   fontSize: 15,
   color: Color.colorWhite,
   marginTop: 5,
 },
});

export default PushWorkout;
