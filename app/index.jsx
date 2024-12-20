import { StatusBar } from "expo-status-bar"
import { router} from "expo-router"
import { View, Text, StyleSheet, Pressable } from "react-native"


export default function App() {
  const pressedLogin = () => {
    console.log("pressed login")
    router.push("/auth/Login")
  }
  const pressedSignup = () => {
    console.log("pressed signup")
    router.push("/auth/Register")
  }
  return (
    <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.title}>Gymit</Text>
          <StatusBar style="auto" />
          <View style={styles.btn_container}>
            <Pressable onPress={pressedLogin}>
              <View style={styles.btn}>
                  <Text style={styles.btn_text}>Login</Text>
              </View>
            </Pressable>

            <Pressable onPress={pressedSignup}>
              <View style={styles.btn}>
                  <Text style={styles.btn_text}>Sign up</Text>
              </View>
            </Pressable>
            
          </View>
        </View>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    content: {
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 300
    },
    title: {
      color: '#4C6DEF',
      fontSize: 50,
      fontWeight: 'bold'
    },

    btn_text: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center'
    },
    btn: {
      backgroundColor: '#4C6DEF',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      textAlign: 'center'
    },
    btn_container: {
      flex: 1,
      justifyContent: 'center',
      gap: 10,
      marginTop: 100
    }
})