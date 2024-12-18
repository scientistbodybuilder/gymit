import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View } from 'react-native';
import Feed from "./Feed"
import ChatListScreen from './ChatList';
import Profile from './Profile'
import Community from './Community'
import NewPost from './NewPost'

const Tab = createBottomTabNavigator()

export default function Home(){
    return(
        <Tab.Navigator
        initialRouteName='Feed'
        screenOptions={{headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen
            name='Feed'
            component={Feed}
            options={{
                 tabBarIcon: ()=> <Image source={require('../assets/icons/dumbell.png')} style={{width: 40, height: 35}} />
             }}
            />

            <Tab.Screen
            name='Community'
            component={Community}
            options={{
                tabBarIcon: ()=> <Image source={require('../assets/icons/people.png')} style={{width: 35, height: 35, marginTop: 10}} />
            }}
            />

            <Tab.Screen
            name='Post'
            component={NewPost}
            options={{
                tabBarIcon: ()=> <Image source={require('../assets/icons/more.png')} style={{width: 30, height: 30}} />
            }}
            />

            <Tab.Screen
            name='Chat'
            component={ChatListScreen}
            options={{
                tabBarIcon: ()=> <Image source={require('../assets/icons/bubble-chat.png')} style={{width: 32, height: 32}} />
            }}
            />

            <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon: ()=> <View style={{width: 35, height: 35, borderWidth: 2, borderRadius: '50%'}}></View>
            }}
            />

        </Tab.Navigator>
    )
}