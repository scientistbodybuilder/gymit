import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';

const InChat = ({navigation}) => {

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <View style={styles.chat_profile_icon}></View>
                <View>
                    <Text style={styles.name}>OUS</Text>
                    <Text style={styles.username}>@ousmanjikineh</Text>
                </View>
                <View style={styles.chat_scroll_area}>
                    <ScrollView>

                    </ScrollView>
                </View>
                <View style={styles.input_box}>
                    <TextInput style={styles.input}> Type a message...</TextInput>
                    <View style={styles.send_btn}>

                    </View>

                </View>

            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 40
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 70,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center'
    },
    username: {
        fontSize: 15
    },
    name: {
        color: '#959393',
        fontSize: 12,
        marginTop: 5
    },
    chat_scroll_area: {

    },
    input_box: {
        height: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    input: {
        width: 200,
        borderRadius: 24,
        paddingHorizontal: 16,
        backgroundColor: '#f3f2f2',
        marginRight: 10,
    },
    send_btn: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#4c6def'
    }
})

export default InChat;