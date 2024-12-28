import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { router } from 'expo-router'
import { app, db } from '../../firebaseConfig'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
const Profile = () => {
    const auth = getAuth(app)
    //get the user data needed to be displayed in the profile
    const email = auth.currentUser?.email
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [interest, setInterest] = useState([])
    const [bio, setBio] = useState('')

    const [useInfo, setUserInfo] = useState({})

    const fetchUserInfo = async (email) => {
        try {
            const userRef = collection(db, "users")
            const userSnapShot = await getDocs(query(userRef, where("email", "==", email)))
            const user = []
            if(!userSnapShot.empty){
                userSnapShot.forEach((doc) => {
                    user.push({"username":doc.data().username,
                                //"name":doc.data().name,
                                //"interest":doc.data().interest
                                //"avatar_url": doc.data().avatar_url
                                //"bio": doc.data().bio
                            }
                )
                })
                setUsername(user[0]["username"])
                setUserInfo(user[0])
                //
                //
                //
                //
            }
        } catch(e){
            console.log(`Error: ${e}`)
        }
    }

    useEffect(() => {
        fetchUserInfo(email);
    }, [email]);

    const navFollowers = () => {
        // router.push('/account/page1')
        console.log(`go to ${email}'s followers`)
    }

    const navFollowing = () => {
        // router.push('/account/page2')
        console.log(`go to ${email}'s following`)
    }
        
    return(
        <View style={styles.container}>
            <View style={styles.c}>
            <View style={styles.top_container}>
            <StatusBar style="auto" />
                <View style={styles.avatar_box}>
                    <View style={styles.avatar}>

                    </View>
                    <Text style={styles.username}>@{username}</Text>
                    <Text style={styles.alias}>OUS</Text>
                </View>
                <View style={styles.follow_box}>
                    <Pressable onPress={navFollowers}>
                        <View style={styles.f_btn}>
                            <Text style={styles.btn_text}>Followers</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={navFollowing}>
                        <View style={styles.f_btn}>
                            <Text style={styles.btn_text}>Following</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        
            <View style={styles.bio_box}>
                <Text style={styles.bio}>
                    Hi! My name is Ousman. I like going to gym to workout with friends
                </Text>
            </View>

            <View style={styles.interest_box}>
                    <Text style={styles.text}>Interests</Text>
                    <View style={styles.interset_card_container}>

                    </View>
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
        display: 'flex',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 16
    },
    interset_card_container: {
        display: 'grid'
    }

})