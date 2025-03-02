import { Stack } from "expo-router"
const ChatLayout = () => {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="conversation" options={{headerShown: false}}/>
        </Stack>
    );
}

export default ChatLayout