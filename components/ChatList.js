import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useState } from 'react';

const Stack = createNativeStackNavigator()

const ChatList = ({navigation}) => {

    const openChat = () => {
        
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <TextInput style={styles.input} placeholder='Search'/>
                <View style={styles.search}></View>
            </View>
            <View style={styles.scroll_container}>
                <ScrollView style={styles.scroll_view}>
                    <Pressable onPress={openChat}>
                        <View style={styles.chat_list_item}>
                        <View style={styles.chat_profile_icon}></View>
                        <View>
                            <Text>Username</Text>
                            <Text style={styles.last_msg}>Last conversation about something....</Text>
                        </View>
                        </View>
                    </Pressable>
                    

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                    <View style={styles.chat_list_item}>
                    <View style={styles.chat_profile_icon}></View>
                    <View>
                        <Text>Username</Text>
                        <Text style={styles.last_msg}>Last conversation about something....</Text>
                    </View>
                    </View>

                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 40
    },
    scroll_container: {
        flex: 1,
        height: '90%',
        minHeight: 500,
        // borderWidth: 2
    },
    scroll_view: {
        backgroundColor: '#fff'
    },
    chat_list_item: {
        // borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        width: '80%',
        minWidth: 200,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'

    },
    chat_profile_icon: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: '#f3f2f2',
        marginRight: 15
    },
    last_msg: {
        color: '#959393',
        fontSize: 12,
        marginTop: 5
    },
    header: {
        width: '100%',
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#4c6def',
    },
    input: {
        width: 250,
        borderRadius: 24,
        paddingHorizontal: 16,
        backgroundColor: '#f3f2f2',
        marginRight: 10,
    }
})

export default ChatList;