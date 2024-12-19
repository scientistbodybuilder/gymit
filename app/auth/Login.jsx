import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import { useState } from 'react';
import { router } from 'expo-router' 


const Login = () => {
  const [enteredUsername, setUsername] = useState('')
    const [enteredPassword, setPassword] = useState('')
    const handleUsername = (enteredText) => {
      setUsername(enteredText)
    }
    const handlePassword = (enteredText) => {
      setPassword(enteredText)
    }
    const navRegister= () => {
      router.push("/auth/Register")
    }
    const Login = () => {
      if (enteredPassword == '' || enteredUsername == ''){
        console.log('Please enter username and password')
      }
      console.log(enteredUsername)
      console.log(enteredPassword)
  
    }
    return(
       <View style={styles.container}>
             <Text style={styles.txt}>Gymit</Text>
             <StatusBar style="auto" />
             <View style={styles.input_container}>
               <TextInput onChangeText={handleUsername} style={styles.input} placeholder='Username'/>
               <TextInput onChangeText={handlePassword} style={styles.input} placeholder='Password'/>
               <Pressable onPress={Login}>
                 <Text style={styles.action_btn}>Login</Text>
               </Pressable>
               <Pressable onPress={navRegister}>
                 <Text style={styles.small_text}>Register</Text>
               </Pressable>
       
             </View>
             
           </View>
    );
}

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


export default Login