import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import { useState } from 'react';
import { router } from 'expo-router' 


const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>

    );
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16, 
      justifyContent: 'space-between'
    },
})