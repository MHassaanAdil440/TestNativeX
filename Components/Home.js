import { View, Text } from "react-native";
import CustomStyles from "./CustomStyles";
const Home = () => {
    return(
      <View style={CustomStyles.container}>
        <Text style={{fontSize:30}}>This is Home Page</Text>
      </View>
    );
  }
  export default Home;