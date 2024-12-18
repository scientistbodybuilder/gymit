import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen 
          name="register"
          component={RegisterScreen}
        />
        <Stack.Screen 
          name="home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}