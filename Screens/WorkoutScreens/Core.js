import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Color} from "../../GlobalStyles";

const CoreWorkout = () => {
   const workoutList = [
      // Level: Beginner, Intermediate, Advanced

      /* Core */
      { id: 1, name: "Plank", reps: "3 x 60sec", level: "Beginner", 
         image: require("../Assets/Core/Plank.png"), },

      { id: 2, name: "Sit-Ups", reps: "2 x 15", level: "Beginner", 
         image: require("../Assets/Core/Situps.png"), },

      { id: 3, name: "V-Ups", reps: "3 x 10", level: "Intermediate", 
         image: require("../Assets/Core/V-Ups.png"),},
      
      { id: 4, name: "Toe Taps", reps: "3 x 20", level: "Beginner", 
         image: require("../Assets/Core/ToeTaps.png"), },

      { id: 5, name: "Twists", reps: "2 x 10", level: "Intermediate", 
         image: require("../Assets/Core/Twists.png"), },

      { id: 6, name: "L-Sit", reps: "2 x 10sec", level: "Advanced", 
         image: require("../Assets/Core/L-Sit.png"), },

      { id: 7, name: "Leg Raises", reps: "2 x 10", level: "Beginner", 
         image: require("../Assets/Core/LegRaises.png"), },

  ];

  return (
   <View style={styles.container}>
     {/* Fixed Header */}
     <View style={styles.header}>
       <Text style={styles.headerText}>Core</Text>
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
   paddingBottom: 50,
   
 },
 header: {
  backgroundColor: Color.theme2,
  paddingVertical: 15,
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

export default CoreWorkout;
