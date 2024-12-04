import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity  } from "react-native";
import { Color} from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const CardioWorkout = () => {
   const navigation = useNavigation();

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
         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backArrow}>{"<--"}</Text>
         </TouchableOpacity>
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
     paddingBottom: 70,
   },
   header: {
     backgroundColor: Color.theme2,
     flexDirection: "row", // Arrange items in a row
     paddingVertical: 15,
     alignItems: "center",
     justifyContent: "center",
     alignSelf: "center", // Ensures the container itself is centered
     marginTop: 10,
     marginBottom:10,
     width: "90%"
   },
   backButton: {
    position: "absolute", // Position it independently of the title
    left: 15, // Push to the far left
  },
  backArrow: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
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
     flexWrap: "wrap", // Allow text to wrap within the container
     textAlign: "center", // Center-align text if needed
     width: "100%", // Ensure text respects the container width
   },
   itemSubtitle: {
     fontSize: 17,
     color: Color.colorWhite,
     marginTop: 5,
     flexWrap: "wrap", // Allow text to wrap within the container
     textAlign: "center", // Center-align text if needed
     width: "100%", // Ensure text respects the container width
   },
 });
 
export default CardioWorkout;
