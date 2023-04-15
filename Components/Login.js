import { View, Text,Button } from "react-native";
import CustomStyles from "./CustomStyles";
const Login = (props) => {
    return(
      <View style={CustomStyles.container}>
        <Text style={{fontSize:30}}>This is Login Page</Text>
        <Button title="Home" onPress={()=>{
          props.navigation.navigate("Home");
         }}/>
      </View>

    );
  }
  export default Login;