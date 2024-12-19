import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from 'react';
import { router } from 'expo-router'


const Register = () => {
    const [enteredEmail, setEmail] = useState('')
    const [enteredUsername, setUsername] = useState('')
    const [enteredPassword, setPassword] = useState('')
    const [enteredConfirmPassword, setConfirmPassword] = useState('')
  
    const handleEmail = (enteredText) => {
      setEmail(enteredText)
    }
    const handleUsername = (enteredText) => {
      setUsername(enteredText)
    }
    const handlePassword = (enteredText) => {
      setPassword(enteredText)
    }
    const handleConfirmPassword = (enteredText) => {
      setConfirmPassword(enteredText)
    }
    const navLogin = () => {
      router.push("/auth/Login")
    }
  
    const Register = () => {
      console.log(enteredEmail)
      console.log(enteredUsername)
      console.log(enteredPassword)
      console.log(enteredConfirmPassword)
    }
    return(
        <View style={styles.container}>
              <Text style={styles.txt}>Gymit</Text>
              <StatusBar style="auto" />
              <View style={styles.input_container}>
                <TextInput onChangeText={handleEmail} style={styles.input} placeholder='Email'/>
                <TextInput onChangeText={handleUsername} style={styles.input} placeholder='Username'/>
                <TextInput onChangeText={handlePassword} style={styles.input} placeholder='Password'/>
                <TextInput onChangeText={handleConfirmPassword} style={styles.input} placeholder='Confirm Password'/>
                <Pressable onPress={Register}>
                  <Text style={styles.action_btn}>Sign Up</Text>
                </Pressable>
                <Pressable onPress={navLogin}>
                  <Text style={styles.small_text}>Login</Text>
                </Pressable>
              </View>
              
            </View>
    );
}


export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16, 
      justifyContent: 'space-between'
    },
    txt: {
      color: '#4C6DEF',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 150,
      marginBottom: 50
    },
    input: {
      borderWidth: 1,
      borderColor: '#e6e3e2',
      width: 250,
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 6,
      paddingBottom: 6,
      marginBottom: 15,
      borderRadius: 8
    },
    input_container: {
      marginBottom: 200
    },
    small_text: {
      color: '#4C6DEF',
      marginTop: 20,
      alignSelf: 'center'
    },
    action_btn: {
      backgroundColor: '#4C6DEF',
      color: 'white',
      padding: 10,
      borderRadius: 16,
      textAlign: 'center'
    }
  });