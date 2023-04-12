import { FlatList } from "react-native";
import { Text,View,StyleSheet } from "react-native";
const DATA = [
    {
      id:0,
      name:'Bruce Waye',
      identity:'Batman'
    },
    {
      id:1,
      name:'Tony Stark',
      identity:'Iron man'
    },
    {
      id:2,
      name:'Steve Rogers',
      identity:'Captain America'
    },
    {
      id:3,
      name:'Clark Kent',
      identity:'Superman'
    },
    {
      id:4,
      name:'Thomas Waye',
      identity:'Batman'
    },
    {
      id:5,
      name:'Billy',
      identity:'The Butcher'
    },
  ]
function CustomFlatlist(){
    const render = ({item}) => {
        <Text>item.name</Text>
    }
    return(
        <View style={styles.container}>
            <FlatList 
                data={DATA}
                renderItem={render}
            />
        </View>
    );
}

const styles = StyleSheet.create({
        continer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}
);

export default CustomFlatlist;