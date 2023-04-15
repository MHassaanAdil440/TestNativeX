import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./Components/Login";
import Home from "./Components/Home";
import PropsScreen from "./Components/PropsScreen";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='PropsScreen' component={PropsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


