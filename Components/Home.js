import { View, Text,Button } from "react-native";
import CustomStyles from "./CustomStyles";
const Home = (props) => {
    return(
      <View style={CustomStyles.container}>
        <Text style={{fontSize:30}}>This is Home Page</Text>
        <Button title="Props Screen" onPress={()=>{
          props.navigation.navigate("PropsScreen");
         }}/>
      </View>

    );
  }
  export default Home;