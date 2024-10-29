import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ActivityScreen() {
   return(
      <View style={styles.container}>
         <Text>Activity Screen</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
});