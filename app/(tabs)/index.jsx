import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import { useState } from 'react';
import { router } from 'expo-router' 
import { app } from '../firebaseConfig'
import { getAuth, signOut } from 'firebase/auth'


const Home = () => {
    const signout = () => {
        const auth = getAuth(app)
        signOut(auth).then(()=>{
            console.log('user signout')
            router.push('/auth/Login')
        }).catch((error)=>{
            console.log(`Error signing out: ${error}`)
        })
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable onPress={signout}>
                <View style={styles.signout_btn}>
                    <Text style={styles.signout}>
                        Sign out
                    </Text>
                </View>
            </Pressable>
            <StatusBar style="auto" />
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
    },
    signout: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    signout_btn: {
        backgroundColor: '#4C6DEF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: 30,
        alignItems: 'center'
    }
})