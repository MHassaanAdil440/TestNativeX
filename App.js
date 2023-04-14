import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Button } from "react-native";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {

  const Stack = createNativeStackNavigator();

  const Home = () => {
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30}}>This is Home Page</Text>
      </View>
    );
  }
  const Login = (props) => {
    return(
      <View style={styles.container}>
        <Text style={{fontSize:30}}>This is Home Page</Text>
        <Button title="Home" onPress={()=>{
          props.navigation.navigate("Home");
        }}/>
      </View>

    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
