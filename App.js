import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InitialScreen from './src/screens/InitialScreen/index'
import WelcomeScreen from './src/screens/WelcomeScreen/index'
import CalculateScreen from './src/screens/CalculateScreen/index'
import ResultantScreen from './src/screens/ResultantScreen/index'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="CalculateScreen" component={CalculateScreen} />
        <Stack.Screen name="ResultantScreen" component={ResultantScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}