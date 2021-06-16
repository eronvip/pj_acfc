import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import HeaderContainer from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { LyricScreen } from "./screens/LyricScreen";

const Stack = createStackNavigator();

const Main: FunctionComponent = (props: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: styles.headerStyle,
            headerTitleContainerStyle: styles.headerTitleContainerStyle,
            headerTitle: (props) => {
              return <HeaderContainer navigation={navigation} />
            },
            headerLeft: () => null
          })} />
        <Stack.Screen
          name="Lyrics"
          component={LyricScreen}
          options={({ navigation }) => ({
            headerStyle: styles.headerStyle,
            headerTitleContainerStyle: styles.headerTitleContainerStyle,
            headerTitle: (props) => {
              return <HeaderContainer navigation={navigation} />
            },
            headerLeft: () => null
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    padding: 0,
    height: 130,
    flex: 1,
    borderBottomWidth: 0
  },
  headerTitleContainerStyle: {
    left: 0,
    right: 0
  }
});
export default Main;
