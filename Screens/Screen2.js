import { StyleSheet, View, Text, FlatList } from "react-native";

const Screen2 = () => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Sides</Text>
      <FlatList
        data={data.filter((item) => item.category === "women clothing")}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#F5FCFF",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Screen2;