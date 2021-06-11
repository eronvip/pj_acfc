import React, { FunctionComponent } from "react";

import LyricsContainer from "../components/Lyrics/LyricsContainer";

const LyricScreen: FunctionComponent = (props: any) => {
  return (
    <div>
      <h1>Lyrics Search</h1>
      <LyricsContainer />
    </div>
  );
};

export default LyricScreen;