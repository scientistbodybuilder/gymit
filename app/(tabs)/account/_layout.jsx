import { Stack } from "expo-router"
const AccountLayout = () => {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="following" options={{headerShown: false}}/>
            <Stack.Screen name="followers" options={{headerShown: false}}/>
        </Stack>
    );
}

export default AccountLayout