import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";

import LyricsContainer from "../components/Lyrics/LyricsContainer";

export function LyricScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Lyrics Search</Text>
      <LyricsContainer />
    </View>
  );
};