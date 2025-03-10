import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable, Alert, ActivityIndicator } from "react-native";
import { useState } from 'react';
import { router } from 'expo-router'
import { app, db } from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { colorScheme } from "nativewind";


const Register = () => {
    const [enteredEmail, setEmail] = useState('')
    const [enteredUsername, setUsername] = useState('')
    const [enteredPassword, setPassword] = useState('')
    const [enteredConfirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
  
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
      router.push("/")
    }
  
    async function register() {
      setLoading(true)
      try {
        if (enteredConfirmPassword == enteredPassword){
          const auth = getAuth(app)

          //normalize the email
          setEmail(enteredEmail.toLowerCase())
          console.log(`The normalized email is now ${enteredEmail}`)
          
          // try and see if a user already exist with that email
          const usersRef = collection(db, "users")
          const user = []
          const emailSnapShot = await getDocs(query(usersRef, where("email", "==", enteredEmail)))
          if(!emailSnapShot.empty){
            console.log("An account with this email already exist")
          } else {
            const usernameSnapShot = await getDocs(query(usersRef, where("username", "==", enteredUsername)))
            if(!usernameSnapShot.empty){
              console.log('Username is not unique')
            } else {
              //create the new user in the auth
              const response = await createUserWithEmailAndPassword(auth,enteredEmail,enteredPassword)
              if('FirebaseError' in response){
                Alert.alert("Oops",'Registration Error')
              } else {
                //create the new user in the firestore
                const newDocRef = await addDoc(usersRef, {
                  username: enteredUsername,
                  email: enteredEmail,
                  password: enteredPassword,
                  avatar: ""
                })
                router.push('/')
              }  
            }
          }

        } else {
          Alert.alert('Ooops','Passwords do not match')
        }
        
      } catch(e) {
        console.log(e)
        setLoading(false)
        Alert.alert('Ooops','something went wrong')
      }
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
                <Pressable style={styles.action_btn} onPress={register}>
                  {loading ? (
                    <ActivityIndicator size={'small'} color={'white'} animating={loading} />
                  ) : (
                    <Text style={styles.action_btn_text}> Sign up </Text>
                  )} 
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
      width: '80%',
      height: 45,
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 6,
      paddingBottom: 6,
      marginBottom: 15,
      borderRadius: 6
    },
    input_container: {
      marginBottom: 200,
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    small_text: {
      color: '#4C6DEF',
      marginTop: 20,
      alignSelf: 'center'
    },
    action_btn_text: {
      backgroundColor: '#4C6DEF',
      color: 'white',
      padding: 10,
      borderRadius: 6,
      textAlign: 'center'
    },
    action_btn: {
      width: '80%',
      height: 45,
    }
  });