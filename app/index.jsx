import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet } from "react-native"


export default function App() {
  return (
    <View style={styles.container}>
        <Text>Gymit</Text>
        <StatusBar style="auto" />
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})