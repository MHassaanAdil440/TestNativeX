import { Text, TextInput, Button, View } from "react-native";
import Customstyles from "./CustomStyles";
import { useState } from "react";
const TextInputScreen = () => {
    const [input, setInput] = useState("");
    return(
        <View style={Customstyles.container}>
            <Text>Your name:{input} </Text>
            <TextInput 
                style={Customstyles.textinput}
                placeholder='Enter your name'
                value={input}
                onChangeText={(text)=>setInput(text)
                }
            />
            <Button title="Clear" onPress={()=>setInput('')}/>
        </View>
    );
}
export default TextInputScreen;