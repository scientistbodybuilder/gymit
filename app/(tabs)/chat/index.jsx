import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { app, db } from '../../firebaseConfig'
import { getAuth, signOut } from 'firebase/auth'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { TextInput } from "react-native-web";

const Chat = () => {
    const auth = getAuth(app)
    const [enteredSearch, setSearch] = useState('')
    const handlePSearch = (enteredText) => {
        setSearch(enteredText)
      }

      const openChat =() => {
        console.log('Opening Chat')
        router.push('/conversation')
      }

    return(
        <View style={styles.container}>
            <View style={styles.username_box}>
                <Pressable>
                    <View style={styles.arrow}>

                    </View>
                </Pressable>
                <Text style={styles.username}>username</Text>

            </View>
            <View style={styles.search_box}>
                <TextInput style={{fontSize: 17, flex:1, outline: 'none'}} underlineColorAndroid='transparent' onChange={handlePSearch} placeholder='Search'></TextInput>
                <View style={styles.search_icon}>

                </View>
            </View>
            <ScrollView style={styles.chats_box}>
                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.chat_element}>
                        <View style={styles.chat_avatar}>

                        </View>
                        <View style={styles.chat_ingo}>
                            <Text style={styles.chat_username}>username</Text>
                            <Text style={styles.chat_history}>Sent a message    20m</Text>
                        </View>
                    </View>
                </Pressable>
                

            </ScrollView>

        </View>
    )
}

export default Chat

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
        gap: 24
    },
    username_box: {
        width: '65%',
        height: 25,
        maxHeight: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop:40,
        // borderWidth: 1

    },
    search_box: {
        width: '75%',
        borderRadius: 16,
        flexDirection: 'row',
        backgroundColor: "#F3F2F2",
        height: 35,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    search_icon: {
        aspectRatio: 1 / 1,
        width: 10,
        backgroundColor: PRIMARY
    },
    arrow: {
        aspectRatio: 1 / 1,
        width: 15,
        backgroundColor: PRIMARY
    },
    username: {
        fontSize: 18,
        fontWeight: 500
    },
    chats_box: {
        width: '100%',
        // borderWidth: 1,
        height: '70%',
        bottom: 0,
        gap:8
    },
    chat_element: {
        flexDirection: 'row',
        // borderWidth: 1,
        width: '100%',
        height: 60,
        gap: 5,
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical:2

    },
    chat_avatar: {
        borderWidth: 1,
        height: '90%',
        aspectRatio: 1 / 1,
        borderRadius: '50%',
        marginRight:4,
    },
    chat_username: {
        fontSize: 16
    },
    chat_history: {
        fontSize: 13,
        color: '#8c8c8c'
    }

})