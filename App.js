import { StyleSheet, View, Text } from "react-native";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import { useState,useEffect } from "react";
import axios from "axios";

export default function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
      .then(function (response) {
        console.log('response', response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });  
  }, []);

  return (
    <View style={styles.container}>
      
      <Screen1/>
      <Screen2/>
    </View>
  );
}
const ConsoleAPIData = () => {
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log('Products:', response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return(
    <View>
      <Text>Fetching datat ..</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },

});
