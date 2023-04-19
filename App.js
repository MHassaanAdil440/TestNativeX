import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [data, setData] = useState(true);
  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 30 }}>
       Life cycle methods with useEffect:
      </Text>
      <Button
        title="Toggle"
        onPress={() => {
          setData(!data);
        }}
        style={{ margin: 5 }}
      />
  {
    data?<User info={data}/>:null
  }
      
    </View>
  );
}
const User = (props) => {

  let timer = setInterval(()=>{
    console.warn("Timer called");
  },1000);

  useEffect(()=>{
    return () => clearInterval(timer);
})

  return(
<View>
    <Text style={{ fontSize: 30, marginTop: 30, color:"orange"}}>Data:{props.info}</Text>
</View>
  );
}
