import { Tabs } from "expo-router"
const TabsLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Home"}} />
            <Tabs.Screen name="post" options={{ title: "Post"}} />
            <Tabs.Screen name="account" options={{ title: "Profile"}} />
        </Tabs>
    )
}

export default TabsLayout