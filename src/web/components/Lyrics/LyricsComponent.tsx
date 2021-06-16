import React, { FunctionComponent, useRef, useState } from "react";
import { Button, KeyboardAvoidingView, SafeAreaView, TextInput, View, Text } from "react-native";
import { getLyrics } from "../../../core/actionCreators/lyricsActionCreators";

interface Props {
  lyrics: string;
  isLoading: boolean;
  error: Error | string;
  onSearch(artist: string, song: string): void;
  onClear(): void;
}

const SearchComponent: FunctionComponent<any> = (props: Props) => {
  const { onSearch, onClear, lyrics, isLoading, error } = props;
  let textInput = useRef(null)
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  if (error) {
    console.log("error: ", error);
    return <Text>{error}</Text>;
  }

  if (isLoading) {
    return <Text>{"Loading.."}</Text>;
  }

  const getLyrics = () => {
    onSearch(artist, song);
    setArtist("");
    setSong("");
  }

  const artistInputChange = (val: string) => {
    setArtist(val);
  }

  const songInputChange = (val: string) => {
    setSong(val);
  }


  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
      >
        <TextInput
          value={artist}
          placeholder="artist"
          onChangeText={artistInputChange}
          keyboardType="default"
          returnKeyType="next"
        />
        <TextInput
          value={song}
          placeholder="song"
          onChangeText={songInputChange}
          keyboardType="default"
          returnKeyType="next"
        />
        <Button
          title="Get Lyrics"
          onPress={() => getLyrics()}
        />
        <Button title="Clear Results" onPress={onClear} />
        <View><Text>{lyrics}</Text></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SearchComponent;