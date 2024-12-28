import { Stack } from "expo-router"
const AccountLayout = () => {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="page1" options={{headerShown: false}}/>
            <Stack.Screen name="page2" options={{headerShown: false}}/>
        </Stack>
    );
}

export default AccountLayout