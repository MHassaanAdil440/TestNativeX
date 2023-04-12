import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const Data = [
    {
      key: 0,
      name: "Hassaan",
      msg: "React native",
      image: require("./assets/icon.png"),
    },
    {
      key: 1,
      name: "Najam",
      msg: "React Js",
      image: require("./assets/icon.png"),
    },
    {
      key: 2,
      name: "Ali Raza",
      msg: "MERN",
      image: require("./assets/icon.png"),
    },
    {
      key: 3,
      name: "Abdan",
      msg: "Animation & 3D modaling",
      image: require("./assets/icon.png"),
    },
    {
      key: 4,
      name: "Qasim",
      msg: "Transportataional Engineering",
      image: require("./assets/icon.png"),
    },
    {
      key: 5,
      name: "Ammar",
      msg: "Megatronics and control engineering",
      image: require("./assets/icon.png"),
    },
    {
      key: 6,
      name: "Abdul Hadi",
      msg: "MERN and React native",
      image: require("./assets/icon.png"),
    },
    {
      key: 7,
      name: "Saqlain",
      msg: "IT",
      image: require("./assets/icon.png"),
    },
    {
      key: 8,
      name: "Arslan",
      msg: "B.Com",
      image: require("./assets/icon.png"),
    },
    {
      key: 9,
      name: "Ammar ch",
      msg: "CA",
      image: require("./assets/icon.png"),
    },
    {
      key: 10,
      name: "Ali",
      msg: "Dating",
      image: require("./assets/icon.png"),
    },
    {
      key: 11,
      name: "Hammad",
      msg: "CS",
      image: require("./assets/icon.png"),
    },
  ];

  const headings = ["Chat", "Status", "Calls"];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const myImage = require('./assets/icon.png');
  const Img = ({ }) => (
      <Image source={myImage} style={{height:100, width:100}}/>
  );
  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>
          WattsApp
        </Text>
        <FlatList
          data={headings}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.headingstyle}>{item.name}</Text>
            </View>
          )}
          horizontal={true}
        />
      </View>
      <View style={styles.mainview}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View>
              <Img/>
              <Item title={item.name} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  topview: {
    flex: 0.15,
    backgroundColor: "green",
  },
  mainview: {
    flex: 0.85,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  headingstyle: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 33,
    marginTop: 33,
    fontSize: 20,
  },
});
