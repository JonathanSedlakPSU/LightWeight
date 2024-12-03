import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Color} from "../../GlobalStyles";

const LegWorkout = () => {
   const workoutList = [
      // Level: Beginner, Intermediate, Advanced

      /* Legs */
      { id: 1, name: "Squats", reps: "4 x 8", level: "Intermediate", 
         image: require("../Assets/Legs/Squats_1.png"), },

      { id: 2, name: "Romanian Deadlifts", reps: "3 x 6", level: "Advanced", 
         image: require("../Assets/Legs/RomanianDeadlift_1.png"), },

      { id: 3, name: "Leg Curls", reps: "3 x 10", level: "Beginner", 
         image: require("../Assets/Legs/LegCurl_1.png"),},
      
      { id: 4, name: "Leg Extensions", reps: "3 x 10", level: "Beginner", 
         image: require("../Assets/Legs/LegExtension_1.png"), },

      { id: 5, name: "Lunges", reps: "2 x 10", level: "Intermediate", 
         image: require("../Assets/Legs/Lunges_1.png"), },

  ];

  return (
   <View style={styles.container}>
     {/* Fixed Header */}
     <View style={styles.header}>
       <Text style={styles.headerText}>Legs</Text>
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
   backgroundColor: "#6200ea",
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
   fontSize: 18,
   fontWeight: "600",
   color: Color.colorWhite,
 },
 itemSubtitle: {
   fontSize: 14,
   color: Color.colorWhite,
   marginTop: 5,
 },
});

export default LegWorkout;
