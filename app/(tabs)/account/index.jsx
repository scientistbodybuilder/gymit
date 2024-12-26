import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { router } from 'expo-router'
import { app, db } from '../../firebaseConfig'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
const Profile = () => {
    const auth = getAuth(app)
    console.log()
    return(
        <View style={styles.container}>
            <View style={styles.c}>
            <View style={styles.top_container}>
            <StatusBar style="auto" />
                <View style={styles.avatar_box}>
                    <View style={styles.avatar}>

                    </View>
                    <Text style={styles.username}>@ousman</Text>
                    <Text style={styles.alias}>OUS</Text>
                </View>
                <View style={styles.follow_box}>
                    <Pressable>
                        <View style={styles.f_btn}>
                            <Text style={styles.btn_text}>Followers</Text>
                        </View>
                    </Pressable>
                    <Pressable>
                        <View style={styles.f_btn}>
                            <Text style={styles.btn_text}>Following</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={styles.interest_box}>

            </View>
            <View style={styles.bio_box}>
                <Text style={styles.bio}>
                    Hi! My name is Ousman. I like going to gym to workout with friends
                </Text>

            </View>
            </View>
        </View>
    );
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    c: {
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '40%',
        // borderWidth: 1,
        width: '90%'
    },
    avatar_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    avatar: {
        borderRadius: '50%',
        aspectRatio: 1 / 1,
        width: '35%',
        borderWidth: 1,
        borderColor: '#8c8c8c'
    },
    alias: {
        fontWeight: 'bold',
        fontSize: 16
    },
    username: {
        color: '#8c8c8c',
        fontSize: 12
    },
    bio_box: {
        // borderWidth: 1,
        marginBottom: 50,
        maxWidth: '90%'
    },
    bio: {
        maxWidth: '90%',
        padding: 8,
        textAlign: 'center'

    },
    follow_box: {
        flex: 1,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '70%'
    },
    f_btn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#8c8c8c'
    },
    btn_text: {
        fontSize: 15,
        textAlign: 'center'
    },
    interest_box: {

    }

})