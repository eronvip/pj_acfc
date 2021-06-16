import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FunctionComponent, useState } from "react";
import { View, Button, Text } from "react-native";

export function HomeScreen({ navigation }: { navigation: any }) {
  
  const movePage = () => {
    navigation.navigate("Lyrics");
  }

  return (
    <View>
      <FontAwesomeIcon icon={faHome} />
      <Text>Home Page</Text>
      <Button
        title="Press here"
        onPress={() => movePage()}
      />
    </View>
  );
};