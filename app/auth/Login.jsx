import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Pressable, Alert,ActivityIndicator } from "react-native";
import { useState } from 'react';
import { useRouter } from 'expo-router' 
import app from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {
    const [enteredUsername, setUsername] = useState('')
    const [enteredPassword, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleUsername = (enteredText) => {
      setUsername(enteredText)
    }
    const handlePassword = (enteredText) => {
      setPassword(enteredText)
    }
    const navRegister= () => {
      router.push("/auth/Register")
    }
    
    async function login() {
      setLoading(true)
      try {
        const auth = getAuth(app)
        const response = await signInWithEmailAndPassword(auth, enteredUsername, enteredPassword)
        if('FirebaseError' in response){
          setLoading(false)
          Alert.alert('Invalid Credentials')
        } else {
          router.push("(tabs)")
        }


      } catch(e){
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
               <TextInput onChangeText={handleUsername} style={styles.input} placeholder='Username'/>
               <TextInput onChangeText={handlePassword} style={styles.input} placeholder='Password'/>
               <Pressable style={styles.action_btn} onPress={login}>  
                  {loading ? (
                    <ActivityIndicator size={'small'} color={'white'} animating={loading} />
                  ) : (
                    <Text style={styles.action_btn_text}> Login </Text>
                  )} 
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
      width: '80%',
      height: 45,
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 6,
      paddingBottom: 6,
      marginBottom: 15,
      borderRadius: 8
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


export default Login