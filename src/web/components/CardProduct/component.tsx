import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { StyleSheet, Button, KeyboardAvoidingView, SafeAreaView, TextInput, View, Text, Image, TouchableOpacity } from "react-native";

const CardProductComponent: FunctionComponent<any> = (props: any) => {
  const { data, onClick } = props;
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isPressMenu, setPressMenu] = useState(false);
  return (
    <View style={styles.cardProduct}>
      <View style={styles.imageProduct}>
        {/* <Image source={require("")} /> */}
      </View>
      <View style={styles.infoProduct}>
        <Text style={styles.textName}>{data.name}</Text>
        <Text style={styles.textPrice}>{data.price}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onClick}>
          <View style={styles.btnAddCart}>
            <Text style={styles.textAddCart}>Thêm</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardProduct: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProduct: {
    width: 150,
    height: 200,
    backgroundColor: '#ccc'
  },
  infoProduct: {
    padding: 10,
    flex: 1,
    flexDirection: "column"
  },
  textName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  textPrice: {
    fontSize: 14,
    color: 'red',
    textDecorationLine: "underline",
    fontWeight: "bold"
  },
  btnAddCart: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#244DB7'
  },
  textAddCart: {
    color: '#fff',
    alignItems: 'center'
  },
});

export default CardProductComponent;