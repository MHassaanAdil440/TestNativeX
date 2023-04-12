import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import {CustomFlatlist} from './Components/Flatlist';

export default function App() {
  // const renderItem = ({ item }) => (
  //   <Text style={styles.text}>{item.name}</Text>
  // );

  return (
    // <View style={styles.container}>
    <View>
      <CustomFlatlist/>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
{/* }; */}

{/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'blue'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
}); */}
}
