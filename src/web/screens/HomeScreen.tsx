import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View, Button, Text, FlatList, ScrollView } from "react-native";
import CardProductContainer from "../components/CardProduct";

interface Item {
  id: number,
  name: string
}
export function HomeScreen({ navigation }: { navigation: any }) {
  const [data, setData] = useState([
    {id: 1, name: "San Pham 1", price: "1.200.000 Đ"},
    {id: 2, name: "San Pham 2", price: "200.000 Đ"},
    {id: 3, name: "San Pham 3", price: "1.500.000 Đ"},
    {id: 4, name: "San Pham 4", price: "2.200.000 Đ"},
    {id: 5, name: "San Pham 5", price: "2.290.000 Đ"},
    {id: 6, name: "San Pham 6", price: "2.250.000 Đ"}
  ])
  const movePage = () => {
    navigation.navigate("Lyrics");
  }

  const genarateProduct = (item: any) => {
    return <CardProductContainer data={item} onClick={() => movePage()} />
  }

  return (
    <View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.boxProduct}
        data={data}
        renderItem={genarateProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  boxProduct: {
    justifyContent: 'center',
    alignItems: "center"
  }
});