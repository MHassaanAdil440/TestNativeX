import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const Data = [
    {
      key:0,
      name:"Hassaan",
      skills:"React native"
    },
    {
      key:1,
      name:"Najam",
      skills:"React Js"
    },
    {
      key:2,
      name:"Ali Raza",
      skills:"MERN"
    },
    {
      key:3,
      name:"Abdan",
      skills:"Animation & 3D modaling"
    },
    {
      key:4,
      name:"Qasim",
      skills:"Transportataional Engineering"
    },
    {
      key:5,
      name:"Ammar",
      skills:"Megatronics and control engineering"
    },
    {
      key:6,
      name:"Abdul Hadi",
      skills:"MERN and React native"
    },
    {
      key:7,
      name:"Saqlain",
      skills:"IT"
    },
  ]
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  // const Item = ({title}) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!app</Text>
      <FlatList 
        data={Data}
        renderItem={({item})=><Item title = {item.name}/>}
      />

{/* <FlatList
        data={Data}
        renderItem={({item}) => <Item title={item.name} />} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#ff6f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
