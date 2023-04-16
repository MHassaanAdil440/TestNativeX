import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View,Text } from "react-native";

export default function App() {
  const [data, setData] = useState([]);
  const dataFromApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result =await result.json();
    setData(result);
  };
  useEffect(()=>{dataFromApi()}, []);


  return (
    <View>
      <Text style={{ fontSize: 30, marginTop:30 }}>Flatlist with API data</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}
