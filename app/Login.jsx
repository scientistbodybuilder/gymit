import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
    return(
        <View style={styles.container}>
            <Text>Gymit</Text>
            <StatusBar style="auto" />
        </View>
    );
}


export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})