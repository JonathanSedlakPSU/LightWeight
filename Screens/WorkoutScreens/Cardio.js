import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Color} from "../../GlobalStyles";

const CardioWorkout = () => {
   const workoutList = [
      // Level: Beginner, Intermediate, Advanced

      /* Cardio */
      { id: 1, name: "Jump Rope", reps: "3 x 60sec",  
         image: require("../Assets/Cardio/JumpRope.png"), },

      { id: 2, name: "Cardio Bike", reps: "10min", 
         image: require("../Assets/Cardio/CardioBike.png"), },

      { id: 3, name: "Recmbent Bike", reps: "10min", 
         image: require("../Assets/Cardio/RecumbentBike.png"),},
      
      { id: 4, name: "Burpee", reps: "2 x 10", 
         image: require("../Assets/Cardio/Burpee.png"), },

      { id: 5, name: "Battle Rope", reps: "2 x 30sec",  
         image: require("../Assets/Cardio/BattleRope.png"), },

      { id: 6, name: "Squat Jump", reps: "2 x 15", 
         image: require("../Assets/Cardio/SquatJump.png"), },

      { id: 7, name: "Swimming", reps: "20min", 
         image: require("../Assets/Cardio/Swimming.png"), },
         
      { id: 8, name: "Tennis", reps: "30min", 
         image: require("../Assets/Cardio/Tennis.png"), },


  ];

  return (
   <View style={styles.container}>
     {/* Fixed Header */}
     <View style={styles.header}>
       <Text style={styles.headerText}>Cardio</Text>
     </View>

     {/* Scrollable List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
         <View style={styles.gridContainer}>
            {workoutList.map((workout) => (
               <View key={workout.id} style={styles.listItem}>
               <View style={styles.textContainer}>
                  <Text style={styles.itemTitle}>{workout.name}</Text>
                  <Image source={workout.image} style={styles.image} />
                  <Text style={styles.itemSubtitle}>{workout.reps}</Text>
               </View>
               </View>
            ))}
         </View>
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
   },
   gridContainer: {
     flexDirection: "row",
     flexWrap: "wrap", // Enables wrapping of children
     justifyContent: "space-between", // Spaces items nicely
   },
   listItem: {
     width: "48%", // Ensures two items per row with small spacing
     backgroundColor: Color.colorBackground2,
     padding: 10,
     marginVertical: 10,
     borderRadius: 10,
     shadowColor: "#000",
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 4,
     elevation: 3,
   },
   image: {
     width: 100,
     height: 100,
     marginTop: 10,
     borderRadius: 10,
   },
   textContainer: {
     flex: 1,
     alignItems: "center",
   },
   itemTitle: {
     fontSize: 20,
     fontWeight: "600",
     color: Color.colorWhite,
   },
   itemSubtitle: {
     fontSize: 17,
     color: Color.colorWhite,
     marginTop: 5,
   },
 });
 
export default CardioWorkout;
