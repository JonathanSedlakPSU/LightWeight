import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WorkoutScreen() {
   return(
      <View style={styles.container}>
         <Text>Workout Screen</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});