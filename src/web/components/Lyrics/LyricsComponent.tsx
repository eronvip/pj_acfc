import React, { FunctionComponent, useState } from "react";
import { Button, TextInput, View } from "react-native";
import "./style.less";

interface Props {
  lyrics: string;
  isLoading: boolean;
  error: Error | string;
  onSearch(artist: string, song: string): void;
  onClear(): void;
}

const SearchComponent: FunctionComponent<any> = (props: Props) => {
  const { onSearch, onClear, lyrics, isLoading, error } = props;
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  if (error) {
    console.log("error: ", error);
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>{"Loading.."}</div>;
  }

  return (
    <View>
      <TextInput value={artist} placeholder="artist" onChangeText={val => setArtist(val)} />
      <TextInput value={song} placeholder="song" onChangeText={val => setSong(val)} />
      <Button
        title="Get Lyrics"
        onPress={() => {
          onSearch(artist, song);
          setArtist("");
          setSong("");
        }}
      />
      <Button title="Clear Results" onPress={onClear} />
      <View>{lyrics}</View>
    </View>
  );
};

export default SearchComponent;