import { View, Text,Button } from "react-native";
import CustomStyles from "./CustomStyles";
import { useState } from "react";
const PropsScreen = () => {
    const [name, setName] = useState("default");
    return(
      <View style={CustomStyles.container}>
        <Text style={{fontSize:30}}>This is PropsScreen Page</Text>
        <Button title="change name" onPress={()=>{
            setName("bruce")
        }}/>
        <This name = {name} />
      </View>

    );
  }

  const This = (props) => {
    return(

    <View>
        <Text>Name: {props.name}</Text>
    </View>
    );
  }
export default PropsScreen;