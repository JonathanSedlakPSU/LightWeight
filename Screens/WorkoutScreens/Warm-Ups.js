import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Color} from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const WarmUpsWorkout = () => {
   const navigation = useNavigation();

   const LowerBody = [
      /* Lower Body */
      { id: 1, name: "Figure-4", reps: "3 x 60sec",  
         image: require("../Assets/Warm-Ups/LB-Figure4.png"), },

      { id: 2, name: "Leg Holds", reps: "10min", 
         image: require("../Assets/Warm-Ups/LB-LegHolds.png"), },

      { id: 3, name: "Deep Lung", reps: "10min", 
         image: require("../Assets/Warm-Ups/LB-Lung.png"),},
      
      { id: 4, name: "Hip Popper", reps: "2 x 10", 
         image: require("../Assets/Warm-Ups/LB-SideLegs.png"), },

      { id: 5, name: "Toe Touches", reps: "2 x 30sec",  
         image: require("../Assets/Warm-Ups/LB-ToeTouches.png"), },
  ];

  const UpperBody = [
      /* Upper Body */
      { id: 1, name: "Back Popper", reps: "3 x 60sec",  
         image: require("../Assets/Warm-Ups/UB-Back.png"), },

      { id: 2, name: "Bring It Around", reps: "10min", 
         image: require("../Assets/Warm-Ups/UB-BringItAround.png"), },

      { id: 3, name: "Lat-Opener", reps: "10min", 
         image: require("../Assets/Warm-Ups/UB-Lat.png"),},
   
      { id: 4, name: "Cuff Rotator", reps: "2 x 10", 
         image: require("../Assets/Warm-Ups/UB-RotatorCuff.png"), },

      { id: 5, name: "The Classic", reps: "2 x 30sec",  
         image: require("../Assets/Warm-Ups/UB-Shoulder.png"), },

      { id: 6, name: "T-Pose", reps: "2 x 30sec",  
         image: require("../Assets/Warm-Ups/UB-TPose.png"), },
   ];
   

  return (
   <View style={styles.container}>
     {/* Fixed Header */}
      <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backArrow}>{"<--"}</Text>
         </TouchableOpacity>
         <Text style={styles.headerText}>Warm-Ups</Text>
     </View>

     {/* Scrollable List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
         <View style={styles.header1}>
            <Text style={styles.headerText1}>-- Lower Body --</Text>
         </View>
         <View style={styles.gridContainer}>
            {LowerBody.map((workout) => (
               <View key={workout.id} style={styles.listItem}>
               <View style={styles.textContainer}>
                  <Text style={styles.itemTitle}>{workout.name}</Text>
                  <Image source={workout.image} style={styles.image} />
                  <Text style={styles.itemSubtitle}>{workout.reps}</Text>
               </View>
               </View>
            ))}
         </View>

         <View style={styles.header1}>
            <Text style={styles.headerText1}>-- Upper Body --</Text>
         </View>
         <View style={styles.gridContainer}>
            {UpperBody.map((workout) => (
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
   header1: {
     backgroundColor: Color.theme1,
     paddingVertical: 15,
     alignItems: "center",
     alignSelf: "center", // Ensures the container itself is centered
     marginTop: 20,
     marginBottom:10,
     width: "50%"
   },
   headerText: {
     color: "#fff",
     fontSize: 20,
     fontWeight: "bold",
   },
  
   headerText1: {
     color: Color.colorWhite,
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
     marginBottom: 20,
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
 
export default WarmUpsWorkout;
