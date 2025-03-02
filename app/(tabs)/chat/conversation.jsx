import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { app, db } from '../../firebaseConfig'
import { getAuth, signOut } from 'firebase/auth'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { TextInput } from "react-native-web";

const Conversation = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.arrow}>

                </View>
                <View>
                    <View style={styles.avatar}>

                    </View>
                    <View>
                        <Text>Name</Text>
                        <Text>username</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.chat_body}>
                
            </ScrollView>
            <View style={styles.message_box}>
                <TextInput placeholder="Send message"></TextInput>
                <View style={styles.send_icon}></View>
            </View>

        </View>
    )
}

export default Conversation

const PRIMARY = "#4C6DEF"

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
})