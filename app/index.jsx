
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Pressable, Alert,ActivityIndicator } from "react-native";
import { useState } from 'react';
import { useRouter } from 'expo-router' 
import { app, db } from './firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDocs, query, where, and } from "firebase/firestore";


const App = () => {
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
      router.push("/register")
    }
    
    async function login() {
      setLoading(true)
      try {
        const auth = getAuth(app)
        const userRef = collection(db, "users")
        const userSnapShot = await getDocs(query(userRef, where("username", "==", enteredUsername)))
        const user = []
        if(!userSnapShot.empty){
          userSnapShot.forEach((doc) => {
            user.push({"username":doc.data().username,
                        "password":doc.data().password,
                        "email":doc.data().email
                      }
          )
          })
          
          if(user[0]["username"] == enteredUsername && user[0]["password"] == enteredPassword){
            console.log("An existing user with proper credentials")
            const response = await signInWithEmailAndPassword(auth,user[0]["email"],enteredPassword)
            if('FirebaseError' in response){
              Alert.alert('Oops','Authentication Error')
            } else {
              router.push('(tabs)')
            } 
          } else if (user[0]["username"] != enteredUsername && user[0]["password"] == enteredPassword){
            console.log("incorrect username")
            Alert.alert('Oops','Incorrect Username')
          } else if (user[0]["username"] == enteredUsername && user[0]["password"] != enteredPassword){
            console.log("incorrect password")
            Alert.alert('Oops','Incorrect Password')
          }
        } else {
          console.log("Invalid Credentials")
          Alert.alert('Sorry...','Invalid Credentials')
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
               <TextInput onChangeText={handlePassword} style={styles.input} placeholder='Password' secureTextEntry/>
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


export default App