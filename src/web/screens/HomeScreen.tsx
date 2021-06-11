import React, { FunctionComponent, useState } from "react";
import { View, Button, Text } from "react-native";

const HomeScreen: FunctionComponent = (props: any) => {
  const { history } = props;
  
  const movePage = () => {
    history.push("/lyric")
  }
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Press here"
        onPress={() => movePage()}
      />
    </View>
  );
};

export default HomeScreen;