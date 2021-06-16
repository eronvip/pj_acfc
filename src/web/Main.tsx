import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import React, { FunctionComponent } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import HeaderContainer from "./components/Header/container";
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
          options={{
            headerStyle: styles.headerStyle,
            headerTitleContainerStyle: styles.headerTitleContainerStyle,
            headerTitle: props => <HeaderContainer />,
            headerLeft: ()=> null
          }} />
        <Stack.Screen
          name="Lyrics"
          component={LyricScreen}
          options={{
            headerStyle: styles.headerStyle,
            headerTitle: props => <HeaderContainer />,
            headerLeft: ()=> null
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    padding: 0,
    height: 100,
    borderBottomWidth: 0
  },
  headerTitleContainerStyle: {
    position: 'relative',
    left: 0,
    right: 0
  }
});
export default Main;
