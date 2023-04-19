import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [int, setInt] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn("int updated");
  // }, [int]);
  // useEffect(() => {
  //   console.warn("data updated");
  // }, [data,int]);
  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 30 }}>
        {data} Life cycle methods with useEffect:{int}
      </Text>
      <Button
        title="update int "
        onPress={() => {
          setInt(int + 1);
        }}
        style={{ margin: 5 }}
      />
      <Button
        title="update data "
        onPress={() => {
          setData(data + 1);
        }}
        style={{ margin: 5 }}
      />
      <User info={{data,int}}/>
    </View>
  );
}
const User = (props) => {
  useEffect(()=>{
    console.warn("data is updated");
  },[props.info.data])
  return(
<View>
    <Text style={{ fontSize: 30, marginTop: 30, color:"orange"}}>Data:{props.info.data}</Text>
    <Text style={{ fontSize: 30, marginTop: 30, color:"orange"}}>int:{props.info.int}</Text>
</View>
  );
}
