import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInpu, Pressable } from 'react-native';
import { useState } from 'react';

const ProfileSection = ({navigation}) => {

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.profile}>

          </View>
          <Text style={styles.username}>@ousmanjikineh</Text>
          <Text style={styles.name}>Ousman The Man</Text>
        </View>
        <View style={styles.follow_container}>
          <Pressable>
          <View style={styles.f_btn}>
            <Text style={styles.text}>Followers</Text>
          </View>
          </Pressable>

          <Pressable>
          <View style={styles.f_btn}>
            <Text style={styles.text}>Following</Text>
          </View>
          </Pressable>
        </View>

        <View style={styles.bio}>
          <Text style={styles.text}>Hi! I'm Ousman, a fitness enthusiast who believes that working out is not only about building strength but also about building connections. I’m into HIIT, weightlifting, and trail running but open to trying new routines.</Text>
        </View>
        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 60
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', 
      borderWidth: 1
    },
    box1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    profile: {
      width: 100,
      height: 100,
      borderWidth: 2,
      borderRadius: '50%',
      marginBottom: 15
    },
    username: {
      fontSize: 10
    },
    name: {
      fontSize: 12
    },
    follow_container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '90%',
      alignItems: 'center',
      paddingHorizontal: 16
    },
    f_btn: {
      borderRadius: 8,
      backgroundColor: '#fff',
      borderWidth: 1,
      textAlign: 'center',
      alignItems: 'center',
      padding: 8
    },
    text: {
      textAlign: 'center',
      fontSize: 15
    },
    bio: {
      width: '80%',
      marginBottom: 200
    }
  });

  export default ProfileSection;
  