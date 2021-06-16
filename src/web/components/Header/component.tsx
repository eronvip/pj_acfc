import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FunctionComponent, useRef, useState } from "react";
import { StyleSheet, Button, KeyboardAvoidingView, SafeAreaView, TextInput, View, Text, Image, TouchableOpacity } from "react-native";

const dataCategory = [
  { name: 'Nu', id: 1, parentId: null },
  { name: 'Nam', id: 2, parentId: null },
  { name: 'Tre em', id: 3, parentId: null },
  { name: 'Outlet', id: 4, parentId: null },
  { name: 'Thuong hieu', id: 5, parentId: 1 },
  { name: 'Trang phuc', id: 6, parentId: 1 },
  { name: 'Giay dep', id: 7, parentId: 1 },
  { name: 'Tui vi', id: 8, parentId: 1 },
  { name: 'Phu kien', id: 9, parentId: 1 },
  { name: 'Trang suc', id: 10, parentId: 1 },
  { name: 'Mat kinh', id: 11, parentId: 1 },
  { name: 'Van phong pham - Qua tang', id: 12, parentId: 1 },
  { name: 'Me va be', id: 13, parentId: 1 },
  { name: 'Khuyen mai', id: 14, parentId: 1 },
  { name: 'Thuong hieu', id: 15, parentId: 2 },
  { name: 'Trang phuc', id: 16, parentId: 2 },
  { name: 'Giay dep', id: 17, parentId: 2 },
  { name: 'Tui vi', id: 18, parentId: 2 },
  { name: 'Phu kien', id: 19, parentId: 2 },
  { name: 'Trang suc', id: 20, parentId: 2 },
  { name: 'Mat kinh', id: 21, parentId: 2 },
  { name: 'Van phong pham - Qua tang', id: 22, parentId: 2 },
  { name: 'Khuyen mai', id: 23, parentId: 2 },
  { name: 'Thuong hieu', id: 24, parentId: 3 },
  { name: 'Trang phuc', id: 25, parentId: 3 },
  { name: 'Giay dep', id: 26, parentId: 3 },
  { name: 'Tui vi', id: 27, parentId: 3 },
  { name: 'Phu kien', id: 28, parentId: 3 },
  { name: 'Trang suc', id: 29, parentId: 3 },
  { name: 'Mat kinh', id: 30, parentId: 3 },
  { name: 'Van phong pham - Qua tang', id: 31, parentId: 3 },
  { name: 'Khuyen mai', id: 32, parentId: 3 },
  { name: 'Thuong hieu', id: 24, parentId: 4 },
  { name: 'Trang phuc', id: 25, parentId: 4 },
  { name: 'Giay dep', id: 26, parentId: 4 },
  { name: 'Tui vi', id: 27, parentId: 4 },
  { name: 'Phu kien', id: 28, parentId: 4 },
  { name: 'Mat kinh', id: 30, parentId: 4 },
  { name: 'Van phong pham - Qua tang', id: 31, parentId: 4 }
]

const HeaderComponent: FunctionComponent<any> = (props: any) => {
  const { navigation } = props;
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isPressMenu, setPressMenu] = useState(false);

  const selectCategory = (catId: number) => {
    setCurrentCategory(catId);
    setPressMenu(true);
  }
  const pressOutSideMenu = () => {
    setPressMenu(false);
  }
  const gotoHomePage = () => {
    navigation.navigate("Home");
  }
  const menu = () => {
    return dataCategory
      .filter(cat => cat.parentId === null)
      .map(cat =>
        <TouchableOpacity
          onPress={() => selectCategory(cat.id)}
          key={cat.id}
          style={[
            styles.cellMenu,
            {
              borderBottomColor: (currentCategory === 0 && cat.id === 1) || currentCategory === cat.id ? "#80142e" : "transparent"
            }
          ]}
        ><Text>{cat.name}</Text></TouchableOpacity>
      )
  }
  const showSubMenu = () => {
    if (isPressMenu) {
      return <View><Text>Press Menu</Text></View>
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../../assets/images/logo.png")} />
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => gotoHomePage()} style={styles.cellMenu}><Text><FontAwesomeIcon icon={faHome} /></Text></TouchableOpacity>
        {menu()}
      </View>
      {/* {showSubMenu()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10
  },
  logo: {
    width: 179,
    height: 52,
  },
  menu: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  cellMenu: {
    fontSize: 16,
    textTransform: "uppercase",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default HeaderComponent;