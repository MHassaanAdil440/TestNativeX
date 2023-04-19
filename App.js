import { useEffect, useState } from "react";
import { View,Text, Button } from "react-native";

export default function App() {

  const [int, setInt] = useState(0);
  useEffect(()=>{
    console.warn("hello");
  },[]
  )

  return (
    <View>
      <Text style={{ fontSize: 30, marginTop:30 }}>Life cycle methods with useEffect:{int}</Text>
      <Button title='update state' onPress={()=>{setInt(int+1)}}/>
          </View>
  );
}
