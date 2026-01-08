import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
     <View style={styles.container}>
       <Text style={styles.text}>MovieHome</Text>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontWeight: 900,
     fontSize: 20,
   },
 });