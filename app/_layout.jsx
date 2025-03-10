import { Stack } from "expo-router"

const RootLayout = () => {
  return(
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="register" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout