import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InitialScreen from './src/screens/InitialScreen/index'
import WelcomeScreen from './src/screens/WelcomeScreen/index'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    <StatusBar style="auto" />
    </NavigationContainer>
  )
}